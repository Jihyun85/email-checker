import React from "react";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

function Result({ result }) {
  if (result !== null) {
    return (
      <section className="result">
        <h2>확인 결과</h2>
        <div>
          <dl>
            <div>
              <dt>확인 요청 이메일 주소</dt>
              <dd>{result.email}</dd>
            </div>
            <div>
              <dt>유효여부</dt>
              <dd>
                {result.smtp_check ? (
                  <>
                    <FaRegCheckCircle />
                    <p>유효합니다.</p>
                  </>
                ) : (
                  <>
                    <FaRegTimesCircle />
                    <p>유효하지 않습니다.</p>
                  </>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    );
  }

  return <></>;
}

export default Result;
