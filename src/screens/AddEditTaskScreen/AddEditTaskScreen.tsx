import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View, Platform, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './AddEditTaskScreenStyle';
import Header from '../../components/Header/Header';
import { useDispatch } from 'react-redux';
import { addTask, updateTask, deleteTask } from '../../redux/slice/taskSlice';
import Screens from '../../navigation/ScreenNameList';
import colors from '../../theme/colors';

const AddEditTaskScreen: React.FC = ({ route, navigation }: any) => {
  const { task } = route.params || {};
  const [title, setTitle] = useState(task?.title || '');
  const [desc, setDesc] = useState(task?.description || '');
  const [priority, setPriority] = useState(task?.priority || 'Medium');
  const [dueDate, setDueDate] = useState(task?.due_date ? new Date(task.due_date) : null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [titleError, setTitleError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const validateTitle = () => {
    if (!title.trim()) {
      setTitleError('Title is required');
      return false;
    }
    setTitleError('');
    return true;
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDueDate(selectedDate);
    }
  };

  const onPressSave = async () => {
    if (!validateTitle()) return;
    
    setLoading(true);
    
    const newTask = {
      title: title.trim(),
      description: desc.trim(),
      completed: task?.completed || false,
      id: task?.id,
      priority,
      due_date: dueDate ? dueDate.toISOString() : null,
      category: task?.category || null,
    };

    try {
      if (task) {
        dispatch(updateTask(newTask));
      } else {
        dispatch(addTask(newTask));
      }
      navigation.navigate(Screens.TASK_LIST);
    } catch (error) {
      Alert.alert('Error', 'Failed to save task. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const onPressDelete = () => {
    Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        onPress: async () => {
          setLoading(true);
          try {
            dispatch(deleteTask(task.id));
            navigation.navigate(Screens.TASK_LIST);
          } catch (error) {
            Alert.alert('Error', 'Failed to delete task. Please try again.');
          } finally {
            setLoading(false);
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={task ? 'Edit Task' : 'Add New Task'}
        canGoBack={true}
        navigation={navigation}
      />

      <Text style={styles.label}>Title:</Text>
      <TextInput
        value={title}
        placeholder="Enter Title"
        style={[styles.inputBoxTitle, titleError && styles.inputError]}
        onChangeText={text => {
          setTitle(text);
          if (titleError) setTitleError('');
        }}
        editable={!loading}
      />
      {titleError ? <Text style={styles.errorText}>{titleError}</Text> : null}

      <Text style={styles.label}>Description (optional):</Text>
      <TextInput
        value={desc}
        placeholder="Enter Description"
        style={styles.inputBoxDesc}
        onChangeText={text => setDesc(text)}
        multiline={true}
        scrollEnabled={true}
        editable={!loading}
      />

      <Text style={styles.label}>Priority:</Text>
      <View style={styles.priorityContainer}>
        {['High', 'Medium', 'Low'].map(level => (
          <TouchableOpacity
            key={level}
            style={[
              styles.priorityButton,
              priority === level && {
                backgroundColor: colors[`priority${level}`],
              },
            ]}
            onPress={() => setPriority(level)}
            disabled={loading}
          >
            <Text
              style={[
                styles.priorityText,
                priority === level && { color: 'white' },
              ]}
            >
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Due Date:</Text>
      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setShowDatePicker(true)}
        disabled={loading}
      >
        <Text style={styles.datePickerText}>
          {dueDate ? dueDate.toDateString() : 'Select Due Date'}
        </Text>
      </TouchableOpacity>

      {dueDate && (
        <TouchableOpacity
          style={styles.clearDateButton}
          onPress={() => setDueDate(null)}
          disabled={loading}
        >
          <Text style={styles.clearDateText}>Clear Date</Text>
        </TouchableOpacity>
      )}

      {showDatePicker && (
        <DateTimePicker
          value={dueDate || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChangeDate}
        />
      )}

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.discardButton]}
          onPress={() => navigation.goBack()}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Discard</Text>
        </TouchableOpacity>

        {task && (
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={onPressDelete}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Text style={styles.buttonText}>Delete</Text>
            )}
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={onPressSave}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <Text style={styles.buttonText}>Save</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddEditTaskScreen;
