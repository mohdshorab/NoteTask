import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDB } from '../../db/db';

interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};



export const fetchTasks = createAsyncThunk('tasks/fetch', async () => {
  const db = getDB();
  const [results] = await db.executeSql('SELECT * FROM tasks ORDER BY id DESC');
  const tasks = [];
  for (let i = 0; i < results.rows.length; i++) {
    tasks.push(results.rows.item(i));
  }
  return tasks;
});

export const addTask = createAsyncThunk('tasks/add', async task => {
  const db = getDB();
  const now = new Date().toISOString();
  const [result] = await db.executeSql(
    'INSERT INTO tasks (title, description, completed, created_at, updated_at) VALUES (?, ?, ?, ?, ?)',
    [task.title, task.description, task.completed ? 1 : 0, now, now],
  );
  return {
    id: result.insertId,
    ...task,
    created_at: now,
    updated_at: now,
  };
});

export const updateTask = createAsyncThunk('tasks/update', async task => {
  const db = getDB();
  const now = new Date().toISOString();
  await db.executeSql(
    'UPDATE tasks SET title = ?, description = ?, completed = ?, updated_at = ? WHERE id = ?',
    [task.title, task.description, task.completed ? 1 : 0, now, task.id],
  );
  return { ...task, updated_at: now };
});

export const deleteTask = createAsyncThunk('tasks/delete', async id => {
  const db = getDB();
  await db.executeSql('DELETE FROM tasks WHERE id = ?', [id]);
  return id;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tasks';
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.unshift(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(t => t.id === action.payload.id);
        if (index !== -1) state.tasks[index] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(t => t.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
