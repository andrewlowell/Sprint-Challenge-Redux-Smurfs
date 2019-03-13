import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => dispatch => {
  // console.log('fetching people data');
  const fetch = { type: FETCHING_SMURFS };
  dispatch(fetch);
  axios.get('http://localhost:3333/smurfs/')
  .then(res => {
    // console.log('successfully got some people data!');
    const fetchSuccess = {
      type: SUCCESS,
      payload: res.data
    };
    dispatch(fetchSuccess);
  })
  .catch(err => {
    // console.log('error in fetching the data :(');
    const failure = {
      type: FAILURE,
      payload: err
    }
    dispatch(failure);
  });
}
export const addSmurf = smurf => dispatch => {
  const addSmurf = { type: ADDING_SMURF };
  dispatch(addSmurf);
  axios.post('http://localhost:3333/smurfs', smurf)
  .then(res => {
    const addSuccess = {
      type: SUCCESS,
      payload: res.data
    };
    dispatch(addSuccess);
  })
  .catch(err => {
    // console.log('error in fetching the data :(');
    const failure = {
      type: FAILURE,
      payload: err
    }
    dispatch(failure);
  });
}
export const deleteSmurf = smurfId => dispatch => {
  const deleteSmurf = { type: DELETING_SMURF };
  dispatch(deleteSmurf);
  axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
  .then(res => {
    const deleteSuccess = {
      type: SUCCESS,
      payload: res.data
    };
    dispatch(deleteSuccess);
  })
  .catch(err => {
    console.log('error in fetching the data :(', err);
    const failure = {
      type: FAILURE,
      payload: err
    }
    dispatch(failure);
  });
}