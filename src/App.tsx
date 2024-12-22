import React from "react";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { Banner } from "@telegram-apps/telegram-ui";
import { AppRoot } from "@telegram-apps/telegram-ui";

export const App = () => {
  const [initDataUnsafe] = useInitData();
  const user = initDataUnsafe?.user;
  const chat = initDataUnsafe?.chat;

  return (
    <AppRoot>
      <Banner title="Información del Usuario">
        {" "}
        <p>ID del Usuario: {user}</p> <p>chat: {chat}</p>{" "}
      </Banner>
    </AppRoot>
  );
};
