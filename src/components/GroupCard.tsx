import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../styles/colors';

import { Context } from '../context';

export function GroupCard({ title, category }: Group) {
  const { removeGroup } = useContext(Context) as ContextType;
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={0.7}
      onPress={() => setIsActive((prev) => !prev)}
    >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        {isActive && (
          <>
            <Text style={styles.category}>{category}</Text>
            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.action} onPress={() => removeGroup(title)}>
                <Text style={styles.actionText}>Deletar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Text style={styles.actionText}>Novo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Text style={styles.saveAction}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  container: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.inactive,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  category: {
    fontSize: 16,
    color: colors.inactive,
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  action: {
    paddingVertical: 15,
    paddingRight: 15,
    marginRight: 15,
  },
  saveAction: {
    color: colors.primary,
  },
  actionText: {
    color: colors.text,
  },
});
