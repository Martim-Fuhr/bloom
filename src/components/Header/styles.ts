import styled from "styled-components";
import theme from "@/app/theme";

export const HeaderSection = styled.header`
  background-color: ${theme.colors.background};
  color: ${theme.colors.textPrimary};
  display: flex;
  justify-content: center;
  max-width: 2590px;
  width: 100%;
  padding: 0 80px;
  height: 60px;
  position: fixed;

  @media screen and (max-width: 768px) {
    padding: 12px;
    height: 100px;
  }

  .align-header {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1084px;
    width: 100%;

    @media screen and (max-width: 768px) {
      gap: 8px;
      flex-wrap: wrap;

      .input-order {
        order: 2;
        flex-basis: 100%;
        width: 100%;
      }
    }
  }

  input {
    border: none;
    border-radius: 999px;
    padding: 0.25rem 1rem;
    height: 32px;
    color: gray;
    width: 368px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  h1 {
    font-size: ${theme.fontSizes.semiLarge};
    font-weight: ${theme.fontWeights.semiBold};
  }
`;
