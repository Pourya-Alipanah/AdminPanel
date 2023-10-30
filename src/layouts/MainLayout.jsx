import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../features/sideBar/components/SideBar";
import ChangeTheme from "@components/ChangeTheme";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { HiBars3BottomRight } from "react-icons/hi2";

const MainLayout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpen2, onToggle } = useDisclosure();
  const [sideBarSize, setSideBarSize] = useState("small");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const logOut = () => {
    toast.error("در حال خروج از حساب کاربری", {
      position: "bottom-center",
      autoClose: 1600,
      pauseOnHover: false,
      draggable: true,
      theme: colorMode === "dark" ? "dark" : "light",
    });
    setTimeout(() => {
      localStorage.removeItem("token");
      navigate("/login");
    }, 2000);
  };

  const sideBarSizeHandler = () => {
    setSideBarSize((prevState) => (prevState === "large" ? "small" : "large"));
    onToggle();
  };

  return (
    <Flex w={"100vw"} h={"100vh"} flexDir={"row"}>
      <SideBar
        sideBarSize={sideBarSize}
        setSideBarSize={setSideBarSize}
        isOpen={isOpen2}
        onToggle={onToggle}
      />
      <Flex as={"main"} flexDir={"column"} w={"100%"}>
        <Flex
          as={"nav"}
          h={"60px"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={5}
        >
          <Flex alignItems={"center"} gap={3}>
            <Button
              display={{ md: "none", base: "flex" }}
              background={"unset"}
              p={0}
              color={
                colorMode === "dark" ? "siteTheme.white" : "siteTheme.grey"
              }
              onClick={sideBarSizeHandler}
            >
              <HiBars3BottomRight size={"30px"} />
            </Button>
            <ChangeTheme />
          </Flex>
          <Button size={"sm"} colorScheme="red" onClick={onOpen}>
            خروج
          </Button>
          <Modal
            blockScrollOnMount={false}
            closeOnEsc
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent
              bg={colorMode === "dark" ? "siteTheme.black" : "siteTheme.grey"}
              color="siteTheme.white"
            >
              <ModalCloseButton left={3} right={"unset"} />
              <ModalHeader>خروج از حساب کاربری</ModalHeader>
              <ModalBody>
                <Text fontWeight="bold" mb="1rem">
                  آیا از خروج مطمئنید؟
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="red" onClick={logOut}>
                  خروج
                </Button>
                <Button colorScheme="messenger" mr={3} onClick={onClose}>
                  انصراف
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
        <Flex p={5}>
          <Outlet />
        </Flex>
        <Flex as={"footer"}></Flex>
      </Flex>
    </Flex>
  );
};

export default MainLayout;
