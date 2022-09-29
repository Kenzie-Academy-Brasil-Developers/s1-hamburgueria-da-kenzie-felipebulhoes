import styled from "styled-components";

export const WelcomeInfo = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--gray-4);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 10px;
    animation: h2Move 2s;
  }

  p {
    animation: pMove 2s;
  }

  img {
    width: 85%;
    animation: hamburguerMove 2s;
  }

  button {
    width: 85%;
    background-color: var(--color-primary);
    padding: 14px 10px;
    border-radius: 24px;
    margin-top: 16px;
    animation: buttonMove 2s;
  }

  button:hover {
    background-color: var(--gray-3);
    color: var(--color-primary);
    transition: 700ms;
  }

  button:not(:hover) {
    transition: 700ms;
  }

  @keyframes hamburguerMove {
    0% {
      transform: translateX(-400%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes h2Move {
    0% {
      transform: translateY(-500%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes pMove {
    0% {
      transform: translateX(400%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes buttonMove {
    0% {
      transform: translateY(500%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media screen and (max-width: 758px) {
    div {
      padding: 14px;
    }

    h2 {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`;
