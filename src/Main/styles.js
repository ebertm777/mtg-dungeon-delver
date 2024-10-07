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
  width: 362px;
  height: 85px;
  margin-left: 40px;
  margin-top: 93px;
  background-color: red;
  opacity: 0.4;
`;
