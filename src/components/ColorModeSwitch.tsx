import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const textColorMode = isDark ? "Dark Mode" : "Light Mode";

  return (
    <HStack>
      <Switch
        isChecked={isDark}
        colorScheme="green"
        onChange={toggleColorMode}
      />
      <Text>{textColorMode}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
