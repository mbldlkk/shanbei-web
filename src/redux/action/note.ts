import * as api from "../api/note";
import { noteAction } from "../slice/note";

export const getNoteByWordId = async (dispatch: Function, wordId: string) => {
  try {
    const { data } = await api.getNoteByWordId(wordId);
    console.log(data);
    dispatch(noteAction.resolveNote(data));
  } catch (error) {
    throw error;
  }
};

export const createNoteByWordId = async (
  dispatch: Function,
  wordId: string,
  content: string,
) => {
  try {
    const response = await api.createNote(wordId, content);
    console.log(response);
    dispatch(noteAction.postNote({ id: response.data.id, content })); //提交的笔记要如何处理?
  } catch (error) {
    throw error;
  }
};

export const findMyNote = async (dispatch: Function) => {
  try {
    const { data } = await api.findMyNote();
    console.log(data);
    dispatch(noteAction.getMyNote(data));
  } catch (error) {
    throw error;
  }
};
