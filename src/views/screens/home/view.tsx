import React from 'react';
import {useHomeViewModel} from './view-model';
import {Container, Notes, NoNotes, NoNotesImage, NoNotesText} from './styles';
import {Note} from '../../components/note/view';
import {NoteModel} from '../../../models/note.model';

export function Home() {
  const {notes, handleNotePress} = useHomeViewModel();

  return (
    <Container>
      <Notes
        data={notes}
        renderItem={({item, index}) => (
          <Note
            data={item as NoteModel}
            onPress={() => handleNotePress(index)}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={
          notes.length <= 0 && {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }
        }
        ListEmptyComponent={
          <NoNotes>
            <NoNotesImage source={require('../../../assets/note.png')} />
            <NoNotesText>You don't have any notes.</NoNotesText>
          </NoNotes>
        }
      />
    </Container>
  );
}
