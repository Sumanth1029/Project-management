import { firestore } from "firebase";

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    firestore()
      .collection('projects')
      .add({
        ...project,
        authorFirstName: "Shreedhar",
        authorLastName: "Hegde",
        authorId: 12589,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err)=>{
        dispatch({type:'CREATE_PROJECT_ERROR',err})
      })
  };
};


////