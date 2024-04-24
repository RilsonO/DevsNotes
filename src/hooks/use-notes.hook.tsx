import {useSelector} from 'react-redux';
import {NoteModel} from '../models/note.model';
import {RootState} from '../libs/redux/reducers';

export function useNotes() {
  const notes = useSelector(
    (state: RootState) => state.notes.list,
  ) as NoteModel[];

  return notes;
}
