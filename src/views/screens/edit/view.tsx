import React, {useCallback, useLayoutEffect} from 'react';
import {useEditViewModel} from './view-model';
import {SaveButton} from './components/save-button/view';
import {
  Container,
  TitleInput,
  BodyInput,
  DeleteButton,
  DeleteButtonTitle,
} from './styles';

function Edit() {
  const {
    title,
    body,
    status,
    handleTitle,
    handleBody,
    setOptions,
    handleSaveButton,
    handleDeleteNote,
  } = useEditViewModel();

  const memoizedSaveButton = useCallback(
    () => <SaveButton onPress={handleSaveButton} />,
    [handleSaveButton],
  );

  useLayoutEffect(() => {
    setOptions({
      title: status === 'new' ? 'New Note' : 'Edit Note',
      headerRight: memoizedSaveButton,
    });
  }, [status, title, body, setOptions, memoizedSaveButton]);

  return (
    <Container>
      <TitleInput
        value={title}
        onChangeText={handleTitle}
        placeholder="Enter the title of your note here..."
        placeholderTextColor="#CCC"
        autoFocus
      />
      <BodyInput
        value={body}
        onChangeText={handleBody}
        placeholder="Enter the description of your note here..."
        placeholderTextColor="#CCC"
        multiline
        textAlignVertical="top"
      />

      {status === 'edit' && (
        <DeleteButton underlayColor={'#ff0000'} onPress={handleDeleteNote}>
          <DeleteButtonTitle>Delete Note</DeleteButtonTitle>
        </DeleteButton>
      )}
    </Container>
  );
}
export {Edit};
