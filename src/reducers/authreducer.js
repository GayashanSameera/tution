import history from '../history';
import {authAxios} from '../axios';

export const TRY_TO_SUBMIT = 'TRY_TO_SUBMIT';

const INIT_STATE = {
    loadingSubmit : false
}
export default (state = INIT_STATE, action) => {
    switch(action.type){
        default: return state;
    }
}

export const submitLogin = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: TRY_TO_SUBMIT, payload: true });
      const res = await authAxios.post(`/`, { email: email, password: password });
      console.log("res=======>>>>>>>>>",res)
    //   let token = res.data.token;
    //   await dispatch(setToken(token));
    //   await dispatch(getUser());
    //   await dispatch({
    //     type: AUTH_SUCCESS,
    //     payload: res.data
    //   });
    //   dispatch({ type: AUTH_LOADING, payload: false });
    } catch (error) {
    //   dispatch({ type: AUTH_LOADING, payload: false });
    //   dispatch(commonErrHandler(error));
    }
  }