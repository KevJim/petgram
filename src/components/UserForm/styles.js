import styled from "styled-components";

export const Form = styled.form`
  padding: 16px 0;
  width: 90%;
  margin: 0 auto;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`;

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

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  text-align: center;
  color: #fff;
`;

export const Error = styled.span`
  width: 90%;
  color: #fff;
  background-color: #ff0062;
  font-size: 12px;
  font-weight: bold;
  border-radius: 12px;
  text-align: center;
  padding: 5px;
`;
