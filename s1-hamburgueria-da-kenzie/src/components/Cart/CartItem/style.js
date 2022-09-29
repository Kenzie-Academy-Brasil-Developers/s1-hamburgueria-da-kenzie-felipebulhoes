import styled from "styled-components";

export const CartItemLi = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  margin: 12px 0;
  background-color: var(--gray-3);
  border-radius: 8px;

  .cartItemMain {
    background-color: white;
    width: 75%;
    border-radius: 0 8px 8px 0;
    padding-left: 10px;
  }

  img {
    margin-right: 10px;
    width: 25%;
  }

  .cartItemInfo {
    height: 22px;
    display: flex;
    align-items: center;
    margin: 8px 0 16px 0;
  }

  .cartItemInfo span {
    font-size: 12px;
    margin-left: 12px;
  }

  .removeItem {
    font-size: 14px;
    cursor: pointer;
  }
`;
