import styled from "styled-components";

export const CartTotalSection = styled.section`
  background-color: var(--gray-4);
  padding: 16px 14px;
  border-radius: 0 0 8px 8px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    font-weight: 600;
    color: var(--gray-1);
  }

  span {
    font-size: 16px;
    font-weight: 600;
    color: var(--gray-2);
  }

  button {
    width: 100%;
    height: 52px;
    background-color: var(--gray-3);
    color: var(--gray-2);
  }

  button:hover {
    background-color: var(--color-primary);
    color: white;
    transition: 600ms;
  }

  button:not(:hover) {
    transition: 600ms;
  }
`;
