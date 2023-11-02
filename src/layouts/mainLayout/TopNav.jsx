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
import { HiBars3BottomRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import ChangeTheme from "@components/ChangeTheme";
import { useAppContext } from "@context/appContext";

// eslint-disable-next-line react/prop-types
const TopNav = () => {
  const { toggleSideBar: onToggle } = useAppContext();
  const { setSideBarSize } = useAppContext();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode } = useColorMode();

  const navigate = useNavigate();

  const sideBarSizeHandler = () => {
    setSideBarSize();
    onToggle();
  };

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

  return (
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
          color={colorMode === "dark" ? "siteTheme.white" : "siteTheme.grey"}
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
      size={{md:'md' , base:'xs'}}
        blockScrollOnMount
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
          <ModalHeader fontSize={{md:'xl' , base:'md'}}>خروج از حساب کاربری</ModalHeader>
          <ModalBody>
            <Text fontWeight="bold" mb="1rem" fontSize={{md:'md' , base:'sm'}}>
              آیا از خروج مطمئنید؟
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" onClick={logOut} size={{md:'md' , base: 'sm'}}>
              خروج
            </Button>
            <Button colorScheme="messenger" mr={3} onClick={onClose} size={{md:'md' , base: 'sm'}}>
              انصراف
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default TopNav;
