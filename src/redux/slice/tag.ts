import { createSlice } from "@reduxjs/toolkit";

export const STATUS = {
  pending: "pending",
  resolve: "resolve",
  reject: "reject",
} as { pending: "pending"; resolve: "resolve"; reject: "reject" };

export type tagItem = { id: string | number; name: string; isPopular: boolean };

const tagSlice = createSlice({
  name: "tag",
  initialState: {
    status: STATUS.pending,
    currentTag: "",
    popular: [],
    notPopular: [],
  } as {
    status: keyof typeof STATUS;
    currentTag: string;
    popular: Array<tagItem>;
    notPopular: Array<tagItem>;
  },
  reducers: {
    resolveTag(state, { payload }) {
      const groupedTagData = (payload as Array<tagItem>).reduce(
        (groupedTag, item) => {
          if (item.isPopular === true) {
            groupedTag.popular.push(item);
          } else {
            groupedTag.notPopular.push(item);
          }
          return groupedTag;
        },
        { popular: [] as Array<tagItem>, notPopular: [] as Array<tagItem> },
      );
      state.popular = groupedTagData.popular;
      state.notPopular = groupedTagData.notPopular;
      state.status = STATUS.resolve;
    },
    resolveError(state) {
      state.status = STATUS.reject;
    },
    setCurrentTag(state, { payload }) {
      state.currentTag = payload;
    },
  },
});

export const tagAction = tagSlice.actions;

export const tagReducer = tagSlice.reducer;
