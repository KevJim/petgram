import styled, { css } from "styled-components";
import { slideIn } from "../../styles/animation";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  margin-bottom: 10px;
  ${(props) =>
    props.fixed &&
    css`
       {
        ${slideIn()}
        background: #121f3d;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(0.5);
        z-index: 1;
      }
    `}

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  padding: 0 8px;
`;
