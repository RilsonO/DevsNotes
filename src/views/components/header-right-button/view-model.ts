import {useNavigation} from '@react-navigation/native';
import {AppNavigatorRoutesProps} from '../../../routes/app.routes';

export interface HeaderRightButtonViewModel {
  handleNavigate: () => void;
}

function useHeaderRightButtonViewModel(): HeaderRightButtonViewModel {
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();

  function handleNavigate() {
    navigate('edit');
  }

  return {
    handleNavigate,
  };
}

export {useHeaderRightButtonViewModel};
