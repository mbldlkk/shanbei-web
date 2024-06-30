import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "./tag";

type noteItem = {
  id: string | number;
  content: string;
  author: { name: string };
};

const noteSlice = createSlice({
  name: "note",
  initialState: {
    note: [],
    status: STATUS.pending,
    myNote: { id: "", content: "", author: { name: "" } },
  } as {
    note: Array<noteItem>;
    status: keyof typeof STATUS;
    myNote: noteItem;
  }, 
  reducers: {
    resolveNote(
      state,
      {
        payload: { wordNote, userWordNote },
      }: { payload: { wordNote: Array<noteItem>; userWordNote: noteItem } },
    ) {
      state.note = wordNote;

      if (userWordNote !== null) {
        state.myNote = userWordNote;
      } else {
        state.myNote = { id: "", content: "", author: { name: "" } };
      }
      state.status = STATUS.resolve;
    },
    getMyNote(state, { payload }) {
      state.myNote = payload;
    },
    toggleLoading(state) {
      state.status = STATUS.pending;
    },
    postNote(state, { payload }: { payload: { id: string; content: string } }) {
      state.myNote.content = payload.content;
      state.note.push({
        id: payload.id,
        content: payload.content,
        author: { name: "" },
      });
    },
  },
});

export const noteAction = noteSlice.actions;

export const noteReducer = noteSlice.reducer;
