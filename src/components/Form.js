import React from "react";

function Form() {
  return (
    <form>
      <input type="text" placeholder="확인할 이메일을 입력해주세요" />
      <button type="button">초기화</button>
      <button type="submit">제출</button>
    </form>
  );
}
export default Form;
