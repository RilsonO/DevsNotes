import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #333;
`;

export const Notes = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const NoNotes = styled.View`
  justify-content: center;
  align-items: center;
`;

export const NoNotesImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const NoNotesText = styled.Text`
  font-size: 17px;
  color: #fafaf9;
  font-weight: bold;
`;
