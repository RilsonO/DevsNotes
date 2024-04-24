import React from 'react';
import {Container, AddImage} from './styles';
import {useHeaderRightButtonViewModel} from './view-model';

function HeaderRightButton() {
  const {handleNavigate} = useHeaderRightButtonViewModel();
  return (
    <Container underlayColor="transparent" onPress={handleNavigate}>
      <AddImage source={require('../../../assets/more.png')} />
    </Container>
  );
}
export {HeaderRightButton};
