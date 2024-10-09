import styled from "styled-components";

import Phandelver from "../Assets/Images/phandelver.jpg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;

  @keyframes borderAnimation {
    0% {
      border-color: #008040; /* Initial color */
    }
    5% {
      border-color: #ac3939; /* Initial color */
    }
    10% {
      border-color: #9966ff; /* Initial color */
    }
    15% {
      border-color: #4dd2ff; /* Initial color */
    }
    20% {
      border-color: #9999ff; /* Initial color */
    }
    25% {
      border-color: #ffff00; /* Initial color */
    }
    30% {
      border-color: #248f24; /* Initial color */
    }
    35% {
      border-color: #b3ff1a; /* Initial color */
    }
    40% {
      border-color: #666600; /* Initial color */
    }
    45% {
      border-color: #b30000; /* Initial color */
    }
    50% {
      border-color: #ff3300; /* Middle color */
    }
    55% {
      border-color: #4d004d; /* Middle color */
    }
    60% {
      border-color: #800000; /* Middle color */
    }
    65% {
      border-color: #ff9900; /* Middle color */
    }
    70% {
      border-color: #264d00; /* Middle color */
    }
    75% {
      border-color: #d11aff; /* Middle color */
    }
    80% {
      border-color: #4d004d; /* Middle color */
    }
    85% {
      border-color: #ff4d94; /* Middle color */
    }
    90% {
      border-color:  #990033; /* Middle color */
    }
    95% {
      border-color: #0000ff; /* Middle color */
    }
    100% {
      border-color: #1a53ff; /* Final color */
    }
  }

  .animatedBorder {
    animation: borderAnimation 10s infinite; /* Duration and infinite loop */
  }
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
