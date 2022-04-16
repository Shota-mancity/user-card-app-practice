import React, { VFC, memo, useEffect, useCallback, useState } from "react";
import {
  Wrap,
  WrapItem,
  Spinner,
  Center,
  useDisclosure
} from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";
// import { User } from "../../types/api/user";

export const UserManagement: VFC = memo(() => {
  const { fetchUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUser();
  // const [selectedUser, setSelectedUser]=useState<User | null >(null);
  const {loginUser}=useLoginUser()

  useEffect(() => {
    fetchUsers();
  }, []);

  const onClickCard = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen });
  }, [users]);
  // const onClickCard = useCallback((user) => {
  //   console.log(user);
  //   setSelectedUser(user)
  //   onOpen();
  // }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map(user => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                name={user.username}
                fullName={user.name}
                imageUrl="https://source.unsplash.com/random"
                onClick={onClickCard}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin} />
    </>
  );
});
