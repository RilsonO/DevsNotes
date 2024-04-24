import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {NoteModel} from '../../../models/note.model';
import {AppNavigatorRoutesProps} from '../../../routes/app.routes';
import {useNotes} from '../../../hooks/use-notes.hook';

type ParamsProps = {
  key: number;
};

export interface EditViewModel {
  notes: NoteModel[];
  title: string;
  body: string;
  status: string;
  handleTitle: (value: string) => void;
  handleBody: (value: string) => void;
  setOptions: (options: Partial<NativeStackNavigationOptions>) => void;
  handleSaveButton: () => void;
  handleDeleteNote: () => void;
}

function useEditViewModel(): EditViewModel {
  const route = useRoute();
  const params = route.params as ParamsProps;
  const {setOptions, goBack} = useNavigation<AppNavigatorRoutesProps>();
  const dispatch = useDispatch();
  const notes = useNotes();

  const [body, setBody] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [status, setStatus] = useState<string>('new');

  useEffect(() => {
    if (params?.key !== undefined && notes[params?.key]) {
      console.log('Caiu dentro do useEffect com parâmetro:' + params?.key);

      setStatus('edit');
      setTitle(notes[params?.key].title);
      setBody(notes[params?.key].body);
    }
  }, [notes, params]);

  function handleTitle(value: string) {
    setTitle(value);
  }

  function handleBody(value: string) {
    setBody(value);
  }

  function handleDeleteNote() {
    Alert.alert('! Warning !', 'Are your sure your want to delete this note?', [
      {
        text: 'Yes',
        onPress: () => {
          dispatch({
            type: 'DEL_NOTE',
            payload: {
              key: params?.key,
            },
          });
          goBack();
        },
      },
      {
        text: 'No',
        onPress: () => {
          return;
        },
      },
    ]);
  }

  function handleSaveButton() {
    if (title === '' || body === '') {
      return Alert.alert('Enter a title and description for your note.');
    }

    if (status === 'edit') {
      dispatch({
        type: 'EDIT_NOTE',
        payload: {
          key: params?.key,
          title,
          body,
        },
      });
    } else {
      dispatch({
        type: 'ADD_NOTE',
        payload: {title, body},
      });
    }
    goBack();
  }

  return {
    notes,
    title,
    body,
    status,
    handleBody,
    handleTitle,
    setOptions,
    handleSaveButton,
    handleDeleteNote,
  };
}

export {useEditViewModel};
