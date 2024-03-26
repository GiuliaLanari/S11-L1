export const ADD_TO_PREFERITI = "ADD_TO_PREFERITI";
export const DELETE_FROM_PREFERITI = "DELETE_FROM_PREFERITI";
export const GET_JOBS = "GET_JOBS";

export const addToPreferitiAction = (jobData) => {
  return {
    type: ADD_TO_PREFERITI,
    payload: jobData,
  };
};

export const deleteFromPreferiti = (i) => {
  return {
    type: DELETE_FROM_PREFERITI,
    payload: i,
  };
};

export const getJobsAction = (query) => {
  return (dispatch, getState) => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching results");
        }
      })
      .then((fetchedJobs) => {
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs.data,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
};
