import styled from "styled-components";

export const CartSection = styled.section`
  width: 90%;
  margin: 20px 0 20px 20px;
  background-color: var(--gray-4);
  border-radius: 8px;

  .welcomeDiv {
    height: 65px;
    width: 100%;
    border-radius: 8px 8px 0 0;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  ul {
    width: 100%;
    padding: 16px 14px;
    border-bottom: 2px solid var(--gray-3);
  }

  .welcomeDiv span {
    font-size: 22px;
    color: white;
  }

  .NoItens {
    padding: 60px 0;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    max-width: 500px;
  }
`;
