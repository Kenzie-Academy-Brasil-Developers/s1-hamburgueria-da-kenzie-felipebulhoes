import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: var(--gray-4);
  height: 120px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    height: 45%;
    display: flex;
    align-items: center;
  }

  form {
    width: 100%;
    height: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form input {
    width: 90%;
    height: 52px;
    margin-bottom: 10px;
    background-color: white;
    border: 1px solid var(--gray-3);
    border-radius: 8px;
    padding: 0 12px;
  }
`;
