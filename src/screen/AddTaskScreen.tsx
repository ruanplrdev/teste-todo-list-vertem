import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button';
import { spacing, colors, typography } from '../theme';
import { TodoContext } from '../src/context/TodoContext';

const AddTaskScreen = ({ navigation }:any) => {
  const { addTask } = useContext<any>(TodoContext);

  // Validação com Yup
  const TaskSchema = Yup.object().shape({
    title: Yup.string().required('Título é obrigatório'),
    description: Yup.string().required('Descrição é obrigatória'),
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ title: '', description: '' }}
        validationSchema={TaskSchema}
        onSubmit={(values, { resetForm }) => {
          addTask({ title: values.title, description: values.description });
          resetForm();
          navigation.goBack();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <Text style={styles.label}>Título</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              placeholder="Digite o título da tarefa"
            />
            {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}

            <Text style={styles.label}>Descrição</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              placeholder="Digite a descrição da tarefa"
              multiline
            />
            {touched.description && errors.description && (
              <Text style={styles.error}>{errors.description}</Text>
            )}

            <Button title="Adicionar Tarefa" onPress={handleSubmit} style={{ marginTop: spacing.md }} />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  label: {
   ...typography.bodybold,
    marginBottom: spacing.sm,
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.sm,
    padding: spacing.md,
    marginBottom: spacing.md,
    color: colors.text,
    ...typography.body,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  error: {
    color: colors.error,
    marginBottom: spacing.md,
    ...typography.bodysm
  },
});

export default AddTaskScreen;
