import styled from "styled-components";
import theme from "@/app/theme";

export const SectionCartEmpty = styled.section`
  align-items: center;
  background-color: ${theme.colors.backgroundWhite};
  border-radius: 4px;
  padding-top: 88px;
  min-height: 97vh;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1084px;
  width: 90%;

  h3 {
    color: ${theme.colors.blackPrice};
    font-size: ${theme.fontSizes.semiLarge};
    font-weight: ${theme.fontWeights.bold};
    text-align: center;

    @media screen and (max-width: 768px) {
      padding: 0 40px;
    }
  }
`;

export const SectionCartItems = styled.section`
  align-items: center;
  background-color: ${theme.colors.backgroundWhite};
  border-radius: 4px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 88px;
  max-width: 1084px;
  width: 90%;

  h3 {
    color: ${theme.colors.blackPrice};
    font-size: ${theme.fontSizes.semiLarge};
    font-weight: ${theme.fontWeights.bold};
    text-align: center;
  }
`;

export const SectionWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 24px;
  width: 100%;

  .names-control {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .product {
    width: 35%;
  }
  .quantity,
  .subtotal {
    width: 33%;
  }

  .product-section {
    display: flex;
    flex-direction: row;
    width: 35%;

    .name-price {
      color: ${theme.colors.blackPrice};
      display: flex;
      align-items: center;
      padding: 0 0 0 16px;
      justify-content: center;
      flex-direction: column;
      font-weight: ${theme.fontWeights.bold};

      @media screen and (max-width: 768px) {
        justify-content: start;
      }
    }

    .item-name {
      font-size: ${theme.fontSizes.default};
    }

    .item-price {
      font-size: ${theme.fontSizes.medium};

      @media screen and (max-width: 768px) {
        position: absolute;
        right: 17%;
        top: 17%;
      }
    }
  }

  .quantity-controls {
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      height: 40px;
      align-self: end;
    }
  }

  .span-controls {
    text-align: center;
    margin: 0 8px;
    font-size: ${theme.fontSizes.default};
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.blackPrice};
    border: 1px solid #999;
    border-radius: 4px;
    width: 62px;
    height: 26px;
  }

  .subtotal-section {
    display: flex;
    align-items: center;
    color: ${theme.colors.blackPrice};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.medium};

    @media screen and (max-width: 768px) {
      flex-direction: column;
      height: 30px;
      align-self: end;
    }
  }

  .total {
    color: ${theme.colors.blackPrice};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.large};
  }

  .cart-item {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 16px 16px 24px 0;
    border-bottom: 1px solid #999;
  }

  .delete-storage-item {
    button {
      position: absolute;
      right: 6%;
      width: 3%;
      top: 40%;

      @media screen and (max-width: 768px) {
        right: 12%;
        top: 20%;
      }
    }
  }

  .subtotal-mobile {
    display: none;

    @media screen and (max-width: 768px) {
      display: flex;
      color: ${theme.colors.textSecondary};
      font-weight: ${theme.fontWeights.bold};
      font-size: ${theme.fontSizes.small};
      text-transform: uppercase;
    }
  }
  .name-title {
    color: ${theme.colors.textSecondary};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.default};
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .footer-section {
    padding: 24px 0 0 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 768px) {
      flex-direction: column;

      button {
        width: 100%;
        max-width: 296px;
      }

      .name-title {
        display: flex;
      }
    }

    .total {
      flex-direction: row;
      display: flex;
      align-items: center;
      gap: 16px;

      @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 296px;
        justify-content: space-between;
      }
    }
  }
`;
