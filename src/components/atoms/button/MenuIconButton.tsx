import React, { VFC, memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props={
    onOpen: ()=>void;
}

export const MenuIconButton: VFC<Props> = memo((props) => {
    const {onOpen}=props
  return (
    <IconButton
      aria-label="menu button"
      icon={<HamburgerIcon />}
      variant="unstyled"
      size="sm"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
