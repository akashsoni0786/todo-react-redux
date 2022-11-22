import { CHECKED, DELETE_COMP, DELETE_INC, EDIT, TODO, UNDOTASK, UPDATE } from "./Constiner";

const initstate = {
  todo: "",
  incomplete: [],
  complete: [],
};

export const Reducers = (state = initstate, action) => {
  if (action.type === TODO) {
    let ind = state.incomplete.length;
    let temps = { index: ((Math.random().toFixed(6)*1000000).toFixed(0)), tasks: action.payload };
    return {
      ...state,
      incomplete: [...state.incomplete, temps],
    };
  }

  if (action.type === CHECKED) {
    let chk = [
      ...state.incomplete.filter(
        (item, ind) => item.index === action.payload
      ),
    ];
    return {
      ...state,
      incomplete: [
        ...state.incomplete.filter(
          (item, ind) => item.index !== action.payload
        ),
      ],
      complete: [...state.complete, chk[0]],
    };
  }

  if (action.type === EDIT) {
    return {
      ...state,
      incomplete: [
        ...state.incomplete.filter((item, ind) => ind !== action.payload),
      ],
    };
  }
  if (action.type === UPDATE) {
    return {
      ...state,
      incomplete: [...state.incomplete, action.payload],
    };
  }

  if (action.type === DELETE_INC) {
    return {
      ...state,
      incomplete: [
        ...state.incomplete.filter((item, ind) => ind !== action.payload),
      ],
    };
  }

  if (action.type === DELETE_COMP) {
    return {
      ...state,
      complete: [
        ...state.complete.filter((item, ind) => item.index !== action.payload),
      ],
    };
  }

  if (action.type === UNDOTASK) {
    let unchk;
    state.complete.map((k,kind)=>{
      if(k.index === action.payload){
        unchk= k
      }
    })
    return {
      ...state,
      incomplete:[...state.incomplete,unchk],
      complete: [
        ...state.complete.filter((item, ind) => item.index !== action.payload),
      ],
    };
  }
  return { ...state };
};
