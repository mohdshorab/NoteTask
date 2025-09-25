import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './AddEditTaskScreenStyle';
import Header from '../../components/Header/Header';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask, deleteTask } from '../../redux/slice/taskSlice';
import Screens from '../../navigation/ScreenNameList';

const AddEditTaskScreen: React.FC = ({ route, navigation }: any) => {
  const { task } = route.params || {};
  const [title, setTitle] = useState(task?.title || '');
  const [desc, setDesc] = useState(task?.description || '');
  const [titleError, setTitleError] = useState('');

  const dispatch = useDispatch();

  const validateTitle = () => {
    if (!title.trim()) {
      setTitleError('Title is required');
      return false;
    }
    setTitleError('');
    return true;
  };
  const onPressSave = () => {
    if (!validateTitle()) {
      return;
    }

    const newTask = {
      title: title.trim(),
      description: desc.trim(),
      completed: task?.completed || 0,
      id: task?.id,
    };
    if (task) {
      dispatch(updateTask(newTask));
    } else {
      dispatch(addTask(newTask));
    }
    navigation.navigate(Screens.TASK_LIST);
  };

  const onPressDelete = () => {
    Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        onPress: () => {
          dispatch(deleteTask(task.id));
          navigation.navigate(Screens.TASK_LIST);
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
      <Text>Title : </Text>
      <TextInput
        value={title}
        placeholder="Enter Title"
        style={[styles.inputBoxTitle, titleError && styles.inputError]}
        onChangeText={text => {
          setTitle(text);
          if (titleError) setTitleError('');
        }}
      />
      {titleError ? <Text style={styles.errorText}>{titleError}</Text> : null}

      <Text>Description (optional) : </Text>
      <TextInput
        value={desc}
        placeholder="Enter Description "
        style={styles.inputBoxDesc}
        onChangeText={text => setDesc(text)}
        multiline={true}
        scrollEnabled={true}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.discardButton]}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Discard</Text>
        </TouchableOpacity>

        {task && (
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={onPressDelete}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={() => {
            onPressSave();
          }}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddEditTaskScreen;
