import styled from "styled-components";

export const ProductCardLi = styled.li`
  background-color: var(--gray-4);
  min-width: 300px;
  height: 346px;
  border: 1px solid var(--gray-3);
  border-radius: 8px;

  .cardImgDiv {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
  }

  .cardInfoDiv {
    width: 100%;
    height: 196px;
    background-color: white;
    padding: 26px 20px 23px 20px;
    border-bottom: 1px solid var(--gray-3);
    border-radius: 0 0 8px 8px;
  }

  .cardInfoDiv h3 {
    size: 18px;
    font-family: "Inter", sans-serif;
    margin-bottom: 18px;
  }

  .cardInfoDiv p {
    size: 10px;
    font-family: "Inter", sans-serif;
    margin-bottom: 14px;
    color: var(--gray-2);
  }

  .cardInfoDiv span {
    display: block;
    size: 14px;
    font-family: "Inter", sans-serif;
    margin-bottom: 14px;
    font-weight: 600;
    color: var(--color-primary);
  }

  .cardInfoDiv button {
    width: 106px;
    height: 40px;
    border-radius: 8px;
    background-color: var(--color-primary);
    font-size: 14px;
    font-weight: 600;
  }

  .cardInfoDiv button:hover {
    background-color: var(--gray-4);
    color: var(--color-primary);
    transition: 600ms;
  }

  .cardInfoDiv button:not(:hover) {
    transition: 600ms;
  }
`;
