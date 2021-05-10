import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailApi } from "../api";
import Form from "../components/Form";
import List from "../components/List";
import Result from "../components/Result";
import { formChange, formReset, formSubmit } from "../modules/emailChecker";

function EmailContainer() {
  const { value } = useSelector((state) => ({
    value: state.emailChecker.value,
  }));
  const dispatch = useDispatch();

  const changeInput = (e) => {
    const { value } = e.target;
    dispatch(formChange(value));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const { data } = await emailApi(value);
    dispatch(formSubmit(data));
  };

  const resetInput = () => {
    dispatch(formReset());
  };

  return (
    <div>
      <Form
        value={value}
        onChange={changeInput}
        onSubmit={submitForm}
        onReset={resetInput}
      />
      <Result />
      <List />
    </div>
  );
}

export default EmailContainer;
