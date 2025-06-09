import theme from "@/app/theme";
import styled from "styled-components";

interface ButtonAddToCartProps {
  hasItems: boolean;
}

export const ButtonAddToCart = styled.button<ButtonAddToCartProps>`
  align-items: center;
  border-radius: 4px;
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  padding: 8px;
  color: ${theme.colors.textPrimary};
  background-color: ${({ hasItems }) => (hasItems ? "#5062F0" : "#0B1A8E")};

  &:hover {
    background-color: ${({ hasItems }) =>
      hasItems ? "#D9D9D9" : "#5062F0"};
  }
`;

export default ButtonAddToCart;
