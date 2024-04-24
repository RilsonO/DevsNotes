import {AnyAction} from 'redux';
import {NoteModel} from '../../../models/note.model';

export interface NotesState {
  list: NoteModel[];
}
const initialState: NotesState = {
  list: [
    {
      title: 'Primeira nota',
      body: 'Descrição da primeira nota!!!',
    },
  ],
};

export function notesReducer(
  state = initialState,
  action: AnyAction,
): NotesState {
  let newList = [...state.list];
  switch (action.type) {
    case 'ADD_NOTE':
      newList.push({
        title: action.payload.title,
        body: action.payload.body,
      });
      break;
    case 'EDIT_NOTE':
      if (newList[action.payload.key]) {
        newList[action.payload.key] = {
          title: action.payload.title,
          body: action.payload.body,
        };
      }
      break;
    case 'DEL_NOTE':
      newList = newList.filter((item, index) => index !== action.payload.key);
      break;
    default:
      break;
  }

  return {...state, list: newList};
}
