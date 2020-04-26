const initState = {
  projects: [
    { id: "1", title: "proj1", content: "dfdsfsdf" },
    { id: "2", title: "proj2", content: "dfdsfsdf" },
    { id: "3", title: "proj3", content: "dfdsfsdf" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("project created", action.project);
      return state;

    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;

    default:
      return state;
  }
};
export default projectReducer;
