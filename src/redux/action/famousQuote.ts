import * as api from "../api/famousQuote";
import { todayFamousAction } from "../slice/famousQuote";

export const getTodayFamous = async (dispatch: Function) => {
  try {
    const { data } = await api.getFamousQuote();
    dispatch(todayFamousAction.setTodayFamous(data));
  } catch (error) {
    throw error;
  }
};
