import styled from "styled-components";

export const Button = styled.button`
  background: #94c53f;
  border-radius: 12px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`;
