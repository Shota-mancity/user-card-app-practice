import React, { VFC, memo } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
  id: number;
  name: string;
  fullName: string;
  imageUrl: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo(props => {
  const { id, name, fullName, imageUrl, onClick } = props;
  return (
    <Box
      onClick={() => onClick(id)}
      bg="white"
      w="260px"
      h="260px"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image
          src={imageUrl}
          alt="user image"
          boxSize="160px"
          borderRadius="full"
          mx="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
