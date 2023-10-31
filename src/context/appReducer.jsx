const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR": {
      return {
        ...state,
        showSideBar: !state.showSideBar,
      };
    }
    case "SET_SIDEBAR_SIZE": {
      return {
        ...state,
        sideBarSize: state.sideBarSize === "large" ? "small" : "large",
      };
    }
  }
};

export default appReducer;
