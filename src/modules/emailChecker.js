const FORM_CHANGE = "email/FORM_CHANGE";
const FORM_SUBMIT = "email/FORM_SUBMIT";
const FORM_RESET = "email/FORM_RESET";
const RESULT_RESET = "email/RESULT_RESET";
const LIST_DELETE = "email/LIST_DELETE";
const LIST_RESET = "email/LIST_RESET";

let nextId = 1;

export const formChange = (text) => ({ type: FORM_CHANGE, payload: { text } });
export const formSubmit = (data) => ({
  type: FORM_SUBMIT,
  payload: { data, id: nextId++ },
});
export const formReset = () => ({ type: FORM_RESET });
export const resultReset = () => ({ type: RESULT_RESET });
export const listDelete = (id) => ({ type: LIST_DELETE, payload: { id } });
export const listReset = () => ({ type: LIST_RESET });

const initialState = {
  value: "",
  result: null,
  list: [],
};

export function emailChecker(state = initialState, action) {
  switch (action.type) {
    case FORM_CHANGE:
      return {
        ...state,
        value: action.payload.text,
      };
    case FORM_SUBMIT:
      return {
        ...state,
        result: { ...action.payload.data, id: action.payload.id },
        list: [
          ...state.list,
          { ...action.payload.data, id: action.payload.id },
        ],
        value: "",
      };
    case FORM_RESET:
      return {
        ...state,
        value: "",
      };
    case RESULT_RESET:
      return {
        ...state,
        result: null,
      };
    case LIST_DELETE:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };
    case LIST_RESET:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
}
