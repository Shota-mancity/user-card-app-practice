import React, { VFC, memo, useCallback } from "react";
import { Heading, Flex, Link, Box, useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";
import { useMessage } from "../../../hooks/useMessage";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const onClickHome = useCallback(() => {
    navigate("/home");
  }, []);
  const onCLickUserManagement = useCallback(() => {
    navigate("/home/user_management");
  }, []);
  const onClickSetting = useCallback(() => {
    navigate("/home/setting");
  }, []);
  const onClickLogout = useCallback(() => {
    showMessage({ title: "Logged out", status: "success" });
    navigate("/");
  }, []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
      >
        <Flex as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            p={{ base: 3, md: 5 }}
            onClick={onClickHome}
          >
            User management App
          </Heading>
        </Flex>
        <Flex fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link onClick={onCLickUserManagement} p={2}>
              User List
            </Link>
            <Link onClick={onClickSetting} p={2}>
              Setting
            </Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onCLickUserManagement={onCLickUserManagement}
        onClickSetting={onClickSetting}
        onClickLogout={onClickLogout}
      />
    </>
  );
});
