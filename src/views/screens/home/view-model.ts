import {useNavigation} from '@react-navigation/native';
import {AppNavigatorRoutesProps} from '../../../routes/app.routes';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {NoteModel} from '../../../models/note.model';
import {useNotes} from '../../../hooks/use-notes.hook';

export interface HomeViewModel {
  notes: NoteModel[];
  setOptions: (options: Partial<NativeStackNavigationOptions>) => void;
  handleNotePress: (index: number) => void;
}

function useHomeViewModel(): HomeViewModel {
  const {navigate, setOptions} = useNavigation<AppNavigatorRoutesProps>();
  const notes = useNotes();

  function handleNotePress(index: number) {
    navigate('edit', {key: index});
  }

  return {
    notes,
    setOptions,
    handleNotePress,
  };
}

export {useHomeViewModel};
