import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDB } from '../../db/db';
import { Task } from '../../types/taskTypes';
import { handleError } from '../../utils/errorHandler';

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

export const fetchTasks = createAsyncThunk<Task[]>(
  'tasks/fetch',
  async () => {
    try {
      const db = getDB();
      const [results] = await db.executeSql('SELECT * FROM tasks ORDER BY id DESC');
      const tasks: Task[] = [];
      for (let i = 0; i < results.rows.length; i++) {
        tasks.push(results.rows.item(i));
      }
      return tasks;
    } catch (error) {
      handleError(error, 'Failed to load tasks. Please try again.');
    }
  },
);

export const addTask = createAsyncThunk<Task, Omit<Task, 'id' | 'created_at' | 'updated_at'>>(
  'tasks/add',
  async (task) => {
    try {
      const db = getDB();
      const now = new Date().toISOString();
      const [result] = await db.executeSql(
        'INSERT INTO tasks (title, description, completed, created_at, updated_at, priority, due_date, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [
          task.title,
          task.description,
          task.completed ? 1 : 0,
          now,
          now,
          task.priority,
          task.due_date,
          task.category,
        ],
      );
      return {
        id: result.insertId,
        ...task,
        created_at: now,
        updated_at: now,
      };
    } catch (error) {
      handleError(error, 'Failed to add task. Please check your input and try again.');
    }
  },
);

export const updateTask = createAsyncThunk<Task, Task>(
  'tasks/update',
  async (task) => {
    try {
      const db = getDB();
      const now = new Date().toISOString();
      await db.executeSql(
        'UPDATE tasks SET title = ?, description = ?, completed = ?, updated_at = ?, priority = ?, due_date = ?, category = ? WHERE id = ?',
        [
          task.title,
          task.description,
          task.completed ? 1 : 0,
          now,
          task.priority,
          task.due_date,
          task.category,
          task.id,
        ],
      );
      return { ...task, updated_at: now };
    } catch (error) {
      handleError(error, 'Failed to update task. Please try again.');
    }
  },
);

export const deleteTask = createAsyncThunk<number, number>(
  'tasks/delete',
  async (id) => {
    try {
      const db = getDB();
      await db.executeSql('DELETE FROM tasks WHERE id = ?', [id]);
      return id;
    } catch (error) {
      handleError(error, 'Failed to delete task. Please try again.');
    }
  },
);

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
        state.error = null;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tasks';
      })
      .addCase(addTask.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.unshift(action.payload);
        state.error = null;
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to add task';
      })
      .addCase(updateTask.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.tasks.findIndex(t => t.id === action.payload.id);
        if (index !== -1) state.tasks[index] = action.payload;
        state.error = null;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update task';
      })
      .addCase(deleteTask.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter(t => t.id !== action.payload);
        state.error = null;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete task';
      });
  },
});

export const { clearError } = taskSlice.actions;
export default taskSlice.reducer;
