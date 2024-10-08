import styled from "styled-components";

import Phandelver from "../Assets/Images/phandelver.jpg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;
`;

export const Dungeon = styled.div`
  max-width: 440px;
  width: 100vw;
  height: 610px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${Phandelver});
  border-radius: 15px;
`;

export const Entrance = styled.div`
  width: 359px;
  height: 81px;
  margin-left: 40px;
  margin-top: 92px;
  cursor: pointer;
`;

export const SecondFloor = styled.div`
  width: 362px;
  height: 110px;
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-top: 15px;
`;

export const GoblinLair = styled.div`
  width: 170px;
  height: 102px;
  cursor: pointer;
`;

export const MineTunnels = styled.div`
  width: 170px;
  height: 102px;
  margin-left: 17px;
  cursor: pointer;
`;

export const ThirdFloor = styled.div`
  width: 362px;
  height: 135px;
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-top: 8px;
`;

export const Storeroom = styled.div`
  width: 100px;
  cursor: pointer;
`;

export const DarkPool = styled.div`
  width: 122px;
  cursor: pointer;
  margin-left: 17px;
`;

export const FungiCavern = styled.div`
  width: 100px;
  cursor: pointer;
  margin-left: 17px;
`;

export const TempleOfDumathoin = styled.div`
  width: 362px;
  height: 76px;
  cursor: pointer;
  margin-left: 40px;
  margin-top: 8px;
`;
