import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Button = styled.button`
  padding: 8px 12px;
  background-color: ${colors.primary};
  border: 0;
  border-radius: 10px;
  color: #FFF;
  
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  outline: none;

  &:active {
    background-color: ${colors.primaryDark};
  }
`;
