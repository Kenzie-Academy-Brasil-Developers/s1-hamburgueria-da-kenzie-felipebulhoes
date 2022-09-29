import styled from "styled-components";

export const ProductListSection = styled.section`
  height: 360px;
  width: 80%;
  margin-top: 20px;

  ul {
    display: flex;
    height: 360px;
    gap: 18px;
    overflow-x: scroll;
    margin-left: 20px;
  }

  @media screen and (min-width: 768px) {
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      overflow-x: unset;
      gap: 18px;
      margin-left: 20px;
    }
  }
`;
