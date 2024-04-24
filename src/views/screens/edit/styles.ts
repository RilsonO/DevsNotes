import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #333;
`;

export const TitleInput = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  color: #fafaf9;
`;

export const BodyInput = styled.TextInput`
  flex: 1;
  font-size: 15px;
  padding: 15px;
  color: #fafaf9;
`;

export const DeleteButton = styled.TouchableHighlight`
  height: 40px;
  background-color: #ff3333;
  justify-content: center;
  align-items: center;
`;

export const DeleteButtonTitle = styled.Text`
  font-size: 14px;
  color: #fafaf9;
`;
