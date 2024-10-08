import React, { useState } from "react";
import * as S from "./styles";

const Main = () => {
  // state to track active room
  const [activeRoom, setActiveRoom] = useState("");

  // Function to handle room click
  const handleRoomClick = (room) => {
    setActiveRoom(room);
  };

  // Conditionally apply styles based on activeRoom
  const getRoomStyle = (room) => {
    return room === activeRoom
      ? {
          backgroundColor: "rgb(212,175,55)",
          opacity: 0.4,
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
