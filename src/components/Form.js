import React from "react";
import styled from "styled-components";
import { BlueBtn, LightBtn } from "../styles/components/Button";
import { TextInput } from "../styles/components/Input";
import { customMedia } from "../styles/customMedia";

const FormContainer = styled.div`
  margin-bottom: 50px;
`;

const CheckForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  margin: 0 auto;

  ${customMedia.greaterThan("lgBreakpoint")`
    flex-direction: row;
    align-items: flex-end;
    height: 40px;
  `}
`;

const Input = styled(TextInput)`
  flex-grow: 1;
  flex-shrink: 0;
  min-width: 250px;
  height: 100%;
  height: 30px;

  ${customMedia.greaterThan("mdBreakpoint")`
    min-width: 400px;
    margin-right: 10px;
  `}
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 10px;

  button:not(:last-child) {
    margin-right: 10px;
  }
`;

const SubmitBtn = styled(BlueBtn)`
  width: 100px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const ResetBtn = styled(LightBtn)`
  width: 100px;
`;

function Form({ value, onChange, onSubmit, onReset }) {
  return (
    <FormContainer>
      <CheckForm onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="확인할 이메일을 입력해주세요"
          value={value}
          onChange={onChange}
        />
        <ButtonBox>
          <SubmitBtn type="submit" aria-label="이메일 제출">
            제출
          </SubmitBtn>
          <ResetBtn
            type="button"
            onClick={onReset}
            aria-label="입력한 값 초기화"
          >
            초기화
          </ResetBtn>
        </ButtonBox>
      </CheckForm>
    </FormContainer>
  );
}
export default Form;
