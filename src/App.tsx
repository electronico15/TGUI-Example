import React from "react";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { Banner, AppRoot } from "@telegram-apps/telegram-ui";

export const App = () => {
  const [initDataUnsafe] = useInitData();
  const user = initDataUnsafe?.user;
  const chat = initDataUnsafe?.chat;

  return (
    <AppRoot>
      <Banner title="Información del Usuario">
        <p>ID del Usuario: {user?.id}</p>
        <p>Nombre: {user?.first_name}</p>

        <p>ID del Chat: {chat?.id}</p>
      </Banner>
    </AppRoot>
  );
};
