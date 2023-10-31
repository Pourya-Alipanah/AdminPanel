import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";

import SideBar from "./SideBar";
import TopNav from "./TopNav";

const MainLayout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Flex w={"100vw"} h={"100vh"} flexDir={"row"}>
      <SideBar/>
      <Flex as={"main"} flexDir={"column"} w={"100%"}>
        <TopNav />
        <Container p={5} maxW={"full"} w={"full"} h={"full"}>
          <Outlet />
        </Container>
        <Divider borderColor={"#777"} />
        <Flex
          as={"footer"}
          alignItems={"center"}
          justifyContent={"center"}
          py={2}
        >
          <Text fontSize={{ md: "sm", sm: "sm", base: "9.9px" }} color={"#777"}>
            Pourya-Alipanah @2023
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MainLayout;
