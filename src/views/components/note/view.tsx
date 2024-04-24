import React from 'react';
import {Container, Title, Description} from './styles';
import {NoteModel} from '../../../models/note.model';

interface Props {
  data: NoteModel;
  onPress: () => void;
}

function Note({data, onPress}: Props) {
  const {title, body} = data;

  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <Description>{body}</Description>
    </Container>
  );
}
export {Note};
