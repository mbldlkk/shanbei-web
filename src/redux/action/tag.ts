import * as api from "../api/tag";
import { tagAction } from "../slice/tag";

export const getBookTag = async (dispatch: Function) => {
  try {
    const { data } = await api.getBookTag();
    console.log(data);
    dispatch(tagAction.resolveTag(data));
  } catch (error) {
    throw error;
  }
};
