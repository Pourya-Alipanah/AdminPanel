const appReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      localStorage.setItem("theme", action.payLoad);
      return {
        ...state,
        theme: action.payLoad,
      };
    }
  }
};

export default appReducer;
