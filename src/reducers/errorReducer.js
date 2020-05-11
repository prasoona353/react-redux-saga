import IMAGES from "../constants";

const errorReducer = (state = null, actions) => {
  switch (actions.type) {
    case IMAGES.LOAD_SUCCESS:
    case IMAGES.LOAD:
      return null;
    case IMAGES.LOAD_FAIL:
      return actions.error;
    default:
      return actions;
  }
};


export default errorReducer;
