import React, { useState } from "react";
import * as S from "./styles";

const Main = () => {
  const [activeRoom, setActiveRoom] = useState("");

  const handleRoomClick = (room) => {
    setActiveRoom((prevRoom) => (prevRoom === room ? "" : room));
  };

  const getRoomStyle = (room) => {
    return room === activeRoom
      ? {
          backgroundColor: "rgba(73, 235, 50, 0.4)",
          border: "3px solid black",
          animation: "borderAnimation 1s infinite",
        }
      : {};
  };

  return (
    <S.Container>
      <S.Dungeon>
        <S.Entrance
          style={getRoomStyle("entrance")}
          onClick={() => handleRoomClick("entrance")}
        />
        <S.SecondFloor>
          <S.GoblinLair
            style={getRoomStyle("goblinLair")}
            onClick={() => handleRoomClick("goblinLair")}
          />
          <S.MineTunnels
            style={getRoomStyle("mineTunnels")}
            onClick={() => handleRoomClick("mineTunnels")}
          />
        </S.SecondFloor>
        <S.ThirdFloor>
          <S.Storeroom
            style={getRoomStyle("storeroom")}
            onClick={() => handleRoomClick("storeroom")}
          />
          <S.DarkPool
            style={getRoomStyle("darkPool")}
            onClick={() => handleRoomClick("darkPool")}
          />
          <S.FungiCavern
            style={getRoomStyle("fungiCavern")}
            onClick={() => handleRoomClick("fungiCavern")}
          />
        </S.ThirdFloor>
        <S.TempleOfDumathoin
          style={getRoomStyle("templeOfDumathoin")}
          onClick={() => handleRoomClick("templeOfDumathoin")}
        />
      </S.Dungeon>
    </S.Container>
  );
};

export default Main;
