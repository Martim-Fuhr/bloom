import styled from "styled-components";
import theme from "@/app/theme";

export const CardList = styled.ul`
  display: flex;
  margin: 0 auto;
  max-width: 1520px;
  width: 100%;

  &.list {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  &.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
    padding: 16px 0;
    justify-items: center;
  }
`;

export const CardItem = styled.li`
  border-radius: 8px;
  background: ${theme.colors.backgroundWhite};
  color: ${theme.colors.textPrimary};
  overflow: hidden;

  .item-title {
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.medium};
    font-weight: ${theme.fontWeights.bold};
    text-overflow: ellipsis;
    display: -webkit-box; 
    overflow: hidden;
    -webkit-box-orient: vertical;

    @media screen and (max-width: 768px) {
      font-size: ${theme.fontSizes.default};
    }
  }

  &.list {
    box-shadow: -4px 3px 10px -6px gray;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 160px;
    gap: 10px;

    .item-title {
      -webkit-line-clamp: 2;
    }

    .item-price {
      color: ${theme.colors.black};
      font-size: ${theme.fontSizes.xxLarge};
      font-weight: ${theme.fontWeights.normal};

      span {
        font-weight: ${theme.fontWeights.bold};
      }

      @media screen and (max-width: 768px) {
        font-size: ${theme.fontSizes.xLarge};
      }
    }

    .item-category {
      color: ${theme.colors.colorCategory};
      font-size: ${theme.fontSizes.small};
      font-weight: ${theme.fontWeights.bold};
    }

    .item-description {
      color: ${theme.colors.colorDescription};
      font-size: ${theme.fontSizes.small};
      font-weight: ${theme.fontWeights.bold};
      overflow: hidden; 
      text-overflow: ellipsis;
      display: -webkit-box; 
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      max-width: 90%;
    }

    button {
      width: 35px;
    }
  }

  &.grid {
    box-shadow: 5px 0 8px -6px rgba(0, 0, 0, 0.3), -5px 0 8px -6px rgba(0, 0, 0, 0.3);
    display: flex;
    color: ${theme.colors.black};
    flex-direction: column;
    width: 100%;
    max-width: 370px;

    .item-title {
      -webkit-line-clamp: 4;
    }


    .grid-top {
      display: flex;
      width: 100%;
      gap: 12px;
      padding: 0 8px;
    }

    img {
      object-fit: contain;
      height: 120px;
      width: 50%;
    }

    .items-name {
      display: flex;
      flex-direction: column;
      justify-content: start;
      width: 50%;
    }

    .item-category {
      font-weight: ${theme.fontWeights.bold};
      font-size: ${theme.fontSizes.small};
      color: #434141;
      text-transform: uppercase;

      @media screen and (max-width: 768px) {
        font-size: ${theme.fontSizes.xSmall};
      }
    }

    .grid-bottom {
      display: flex;
      flex-direction: column;
      margin-top: -5px;
      width: 100%;
      padding: 0 8px;
    }

    .item-price {
      font-size: ${theme.fontSizes.xxLarge};
      display: flex;
      justify-content: end;
      align-items: end;

      span {
        font-weight: ${theme.fontWeights.bold};
      }
    }

    .item-description {
      font-weight: ${theme.fontWeights.bold};
      font-size: ${theme.fontSizes.small};
      color: #434141;
      overflow: hidden; 
      text-overflow: ellipsis;
      display: -webkit-box; 
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      min-height: 54px;
    }

    button {
      align-self: center;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 54px;
      margin-top: 8px;
    }
  }
`;
