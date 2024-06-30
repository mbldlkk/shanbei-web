import * as api from "../api/auth";
import { authActions } from "../slice/auth";

export const signIn = async (dispatch: Function, userFormData: object) => {
  try {
    const { data } = await api.signIn(userFormData);
    dispatch(authActions.success(data.accessToken));
  } catch (error) {
    throw error;
  }
};

export const signUp = async (dispatch: Function, userFormData: object) => {
  try {
    const { data } = await api.signUp(userFormData);
    console.log(data);
    dispatch(authActions.success(data.accessToken));
  } catch (error) {
    throw error;
  }
};

export const signOut = (dispatch: Function) => {
  dispatch(authActions.signOut());
};

export const getLocalAuth = (dispatch: Function) => {
  dispatch(authActions.getLocalAccessToken());
};
