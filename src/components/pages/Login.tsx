import React, { VFC, memo, useState, useCallback, ChangeEvent } from "react";
import { Box, Input, Stack, Flex, Heading, Divider } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");
  const { login, loading } = useAuth();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const onClickLogin = () => {
    login(userId);
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          User Management App
        </Heading>
        <Divider my={4} />
        <Stack py={4} px={10} spacing={6}>
          <Input
            placeholder="User ID"
            value={userId}
            size="md"
            onChange={onChangeUserId}
          />
          <PrimaryButton
            onClick={onClickLogin}
            disabled={userId === ""}
            loading={loading}
          >
            Login
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
