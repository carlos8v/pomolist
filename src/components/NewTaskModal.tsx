import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import { GroupContext } from '../context/Group';

import colors from '../styles/colors';

export function NewTaskModal({ groupId }: { groupId: number }) {
  const [title, setTitle] = useState('');
  const [disabled, setDisabled] = useState(true);

  const {
    addTask,
    newTaskVisible,
    toggleTaskVisible
  } = useContext(GroupContext) as GroupContextType;

  useEffect(() => {
    setTitle('');
  }, [newTaskVisible])

  useEffect(() => {
    if (title !== '') setDisabled(false);
    else setDisabled(true);
  }, [title])

  function handleNewTask() {
    if (title !== '') {
      addTask(groupId, title);
      toggleTaskVisible();
    }
  }

  const styles = getStyles(disabled);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={newTaskVisible}
    >
      <View style={styles.modal}>
        <Text style={styles.title}>Nova Tarefa:</Text>
        <View style={styles.container}>
          <TextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={styles.textInput}
            placeholder="Título"
            placeholderTextColor={colors.inactive}
            autoCapitalize={"sentences"}
          />
          <TouchableOpacity
            style={styles.addButton}
            disabled={disabled}
            onPress={handleNewTask}
          >
            <Text style={styles.textButton}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableWithoutFeedback
        onPress={toggleTaskVisible}
      >
        <View style={styles.mainPage}/>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const getStyles = (disabled: boolean) => StyleSheet.create({
  modal: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.header,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 10,
    zIndex: 10,
  },
  title: {
    color: colors.text,
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: { padding: 10 },
  error: {
    color: colors.inactive,
    paddingBottom: 10
  },
  textInput: {
    height: 42,
    color: colors.text,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.inactive,
    borderRadius: 4,
    marginBottom: 15,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: disabled ? colors.inactive : colors.primary,
    borderRadius: 4,
    height: 42,
  },
  textButton: {
    color: colors.background,
    fontWeight: 'bold',
  },
  mainPage: { flex: 1 },
});
