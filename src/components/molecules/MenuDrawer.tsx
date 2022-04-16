import React, { VFC, memo } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onCLickUserManagement: () => void;
  onClickSetting: () => void;
  onClickLogout: () => void;
};

export const MenuDrawer: VFC<Props> = memo(props => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onCLickUserManagement,
    onClickSetting,
    onClickLogout
  } = props;
  
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button onClick={onClickHome} w="100%">
              TOP
            </Button>
            <Button onClick={onCLickUserManagement} w="100%">
              User List
            </Button>
            <Button onClick={onClickSetting} w="100%">
              Setting
            </Button>
            <Button onClick={onClickLogout} w="100%">
              Logout
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
