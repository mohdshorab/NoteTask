import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  setStatus,
  setPriority,
  setCategory,
  setSortBy,
  setSortOrder,
  resetFilters,
  StatusFilter,
  PriorityFilter,
  SortBy,
  SortOrder,
} from '../../redux/slice/filterSlice';
import colors from '../../theme/colors';
import typography from '../../theme/typography';
import styles from './style';

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
};

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const { status, priority, category, sortBy, sortOrder } = useSelector(
    (state: any) => state.filters
  );

  const StatusOption = ({ value, label }: { value: StatusFilter; label: string }) => (
    <TouchableOpacity
      style={[styles.option, status === value && styles.selectedOption]}
      onPress={() => dispatch(setStatus(value))}
    >
      <Text style={[styles.optionText, status === value && styles.selectedText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const PriorityOption = ({ value, label }: { value: PriorityFilter; label: string }) => (
    <TouchableOpacity
      style={[styles.option, priority === value && styles.selectedOption]}
      onPress={() => dispatch(setPriority(value))}
    >
      <Text style={[styles.optionText, priority === value && styles.selectedText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const SortOption = ({ value, label }: { value: SortBy; label: string }) => (
    <TouchableOpacity
      style={[styles.option, sortBy === value && styles.selectedOption]}
      onPress={() => dispatch(setSortBy(value))}
    >
      <Text style={[styles.optionText, sortBy === value && styles.selectedText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.header}>Filters & Sort</Text>

            {/* Status Filter */}
            <Text style={styles.sectionTitle}>Status</Text>
            <View style={styles.optionGroup}>
              <StatusOption value="All" label="All" />
              <StatusOption value="Completed" label="Completed" />
              <StatusOption value="Pending" label="Pending" />
            </View>

            {/* Priority Filter */}
            <Text style={styles.sectionTitle}>Priority</Text>
            <View style={styles.optionGroup}>
              <PriorityOption value="All" label="All" />
              <PriorityOption value="High" label="High" />
              <PriorityOption value="Medium" label="Medium" />
              <PriorityOption value="Low" label="Low" />
            </View>

            {/* Sort By */}
            <Text style={styles.sectionTitle}>Sort By</Text>
            <View style={styles.optionGroup}>
              <SortOption value="created_at" label="Created Date" />
              <SortOption value="due_date" label="Due Date" />
              <SortOption value="priority" label="Priority" />
            </View>

            {/* Sort Order */}
            <Text style={styles.sectionTitle}>Sort Order</Text>
            <View style={styles.optionGroup}>
              <TouchableOpacity
                style={[styles.option, sortOrder === 'desc' && styles.selectedOption]}
                onPress={() => dispatch(setSortOrder('desc'))}
              >
                <Text style={[styles.optionText, sortOrder === 'desc' && styles.selectedText]}>
                  Newest First
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.option, sortOrder === 'asc' && styles.selectedOption]}
                onPress={() => dispatch(setSortOrder('asc'))}
              >
                <Text style={[styles.optionText, sortOrder === 'asc' && styles.selectedText]}>
                  Oldest First
                </Text>
              </TouchableOpacity>
            </View>

            {/* Buttons */}
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.resetButton]}
                onPress={() => dispatch(resetFilters())}
              >
                <Text style={styles.buttonText}>Clear All</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.applyButton]}
                onPress={onClose}
              >
                <Text style={styles.buttonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};



export default FilterModal;
