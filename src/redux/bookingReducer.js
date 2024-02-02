import { BOOKING, DELETE } from "./actionTypes";

const initialState = {
  data: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
      const newData = [...state.data];
      newData.push(action.payload);
      return { data: newData };

    case DELETE:
      const filterData = state.data.filter((d) => d.id !== action.payload);
      return { data: filterData };

    default:
     return state;
  }
};

export default bookingReducer;
