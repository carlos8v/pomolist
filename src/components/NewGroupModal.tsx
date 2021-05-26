import React, { useState, useContext, useEffect } from 'react';
import { Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import { Button } from './Button';

import { GroupContext } from '../context/Group';

import colors from '../styles/colors';

export function NewGroupModal() {
  const [disabled, setDisabled] = useState(true);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const {
    addGroup,
    newGroupVisible,
    toggleGroupVisible
  } = useContext(GroupContext) as GroupContextType;

  useEffect(() => {
    if (title !== '' && category !== '') setDisabled(false);
    else setDisabled(true);
  }, [title, category]);

  useEffect(() => {
    setTitle('');
    setCategory('');
  }, [newGroupVisible]);

  function handleNewGroup() {
    if (title !== '' && category !== '') {
      addGroup({ title, category });
      toggleGroupVisible();
    }
  }

  const styles = getStyles(disabled);

  return (
    <>
      <Button
        size={48}
        style={{ bottom: 15 }}
        onClick={toggleGroupVisible}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={newGroupVisible}
      >
        <View style={styles.modal}>
          <Text style={styles.title}>Novo Grupo:</Text>
          <View style={styles.container}>
            <TextInput
              value={title}
              onChangeText={(text) => setTitle(text)}
              style={styles.textInput}
              placeholder="Título"
              placeholderTextColor={colors.inactive}
              autoCapitalize={"sentences"}
            />
            <TextInput
              value={category}
              onChangeText={(text) => setCategory(text)}
              style={styles.textInput}
              placeholder="Categoria"
              placeholderTextColor={colors.inactive}
              autoCapitalize={"sentences"}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleNewGroup}
              disabled={disabled}
            >
              <Text style={styles.textButton}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback
          onPress={toggleGroupVisible}
        >
          <View style={styles.mainPage}/>
        </TouchableWithoutFeedback>
      </Modal>
    </>
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
