import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Task } from '../../types/taskTypes';

export type StatusFilter = 'All' | 'Completed' | 'Pending';
export type PriorityFilter = 'All' | 'High' | 'Medium' | 'Low';
export type CategoryFilter = 'All' | string;
export type SortBy = 'created_at' | 'due_date' | 'priority';
export type SortOrder = 'asc' | 'desc';

interface FilterState {
  status: StatusFilter;
  priority: PriorityFilter;
  category: CategoryFilter;
  sortBy: SortBy;
  sortOrder: SortOrder;
}

const initialState: FilterState = {
  status: 'All',
  priority: 'All',
  category: 'All',
  sortBy: 'created_at',
  sortOrder: 'desc',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<StatusFilter>) {
      state.status = action.payload;
    },
    setPriority(state, action: PayloadAction<PriorityFilter>) {
      state.priority = action.payload;
    },
    setCategory(state, action: PayloadAction<CategoryFilter>) {
      state.category = action.payload;
    },
    setSortBy(state, action: PayloadAction<SortBy>) {
      state.sortBy = action.payload;
    },
    setSortOrder(state, action: PayloadAction<SortOrder>) {
      state.sortOrder = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const {
  setStatus,
  setPriority,
  setCategory,
  setSortBy,
  setSortOrder,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;

// Selector for filtered and sorted tasks
export const selectFilteredSortedTasks = createSelector(
  [(state: RootState) => state.tasks.tasks, (state: RootState) => state.filters],
  (tasks, filters) => {
    let filtered = tasks.filter(task => {
      if (filters.status === 'Completed' && !task.completed) return false;
      if (filters.status === 'Pending' && task.completed) return false;
      if (filters.priority !== 'All' && task.priority !== filters.priority) return false;
      if (filters.category !== 'All' && task.category !== filters.category) return false;
      return true;
    });

    return filtered.sort((a: Task, b: Task) => {
      let valA: any, valB: any;

      if (filters.sortBy === 'created_at') {
        valA = new Date(a.created_at).getTime();
        valB = new Date(b.created_at).getTime();
      } else if (filters.sortBy === 'due_date') {
        valA = a.due_date ? new Date(a.due_date).getTime() : 0;
        valB = b.due_date ? new Date(b.due_date).getTime() : 0;
      } else if (filters.sortBy === 'priority') {
        const order = { High: 3, Medium: 2, Low: 1 };
        valA = order[a.priority] || 0;
        valB = order[b.priority] || 0;
      }

      if (filters.sortOrder === 'asc') {
        return valA - valB;
      } else {
        return valB - valA;
      }
    });
  }
);

export const selectRecentlyCompleted = createSelector(
  [(state: RootState) => state.tasks.tasks],
  (tasks) => {
    const completedTasks = tasks
      .filter(task => task.completed)
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 3);
    
    return completedTasks;
  }
);
