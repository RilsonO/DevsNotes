import React from 'react';
import {Container, SaveImage} from './styles';
import {TouchableHighlightProps} from 'react-native';

function SaveButton(props: TouchableHighlightProps) {
  return (
    <Container underlayColor="transparent" {...props}>
      <SaveImage source={require('../../../../../assets/save.png')} />
    </Container>
  );
}
export {SaveButton};
