/* eslint-disable react/prop-types */
import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  LightMode,
  ScaleFade,
  Text,
  Tooltip,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { HiBars3BottomRight } from "react-icons/hi2";
import avatarPic from "@assets/images/pourya-alipanah.jpg";
import { useState } from "react";

// don't forget children props for outlet //
const SideBar = ({ sideBarSize, setSideBarSize }) => {
  const [isOnline, setIsOnline] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();

  const sideBarSizeHandler = () => {
    setSideBarSize((prevState) => (prevState === "large" ? "small" : "large"));
    onToggle();
  };

  const onlineClickHandler = () => {
    setIsOnline((prevState) => !prevState);
  };

  return (
    <>
      <Flex
        pt={2}
        flexDir={"column"}
        h={"100vh"}
        transition={"cubic-bezier(0.5, 1, 0.89, 1)"}
        transitionDuration={"600ms"}
        w={{
          md: sideBarSize === "large" ? "250px" : "70px",
          base: sideBarSize === "large" ? "100vw" : "0",
        }}
        bg={colorMode === "dark" ? "siteTheme.black" : "siteTheme.grey"}
        pos={"sticky"}
        right={0}
        top={0}
        gap={5}
      >
        <Flex w={"100%"} justifyContent={"end"}>
          <LightMode>
            <Button
              background={"unset"}
              colorScheme="messenger"
              onClick={sideBarSizeHandler}
            >
              <HiBars3BottomRight size={"30px"} color="siteTheme.white" />
            </Button>
          </LightMode>
        </Flex>
        <Flex
          flexDir={"row-reverse"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
        >
            <Tooltip
              hasArrow
              label={
                isOnline
                  ? "برای آفلاین شدن کلیک کنید"
                  : "برای آنلاین شدن کلیک کنید"
              }
              bg={isOnline ? "tomato" : "siteTheme.blue"}
              color="black"
              placement="top-start"
            >
              <button onClick={onlineClickHandler}>
                <Avatar src={avatarPic} loading="lazy">
                  <AvatarBadge
                    boxSize="1em"
                    bg={isOnline ? "siteTheme.blue" : "tomato"}
                    borderColor={colorMode === "dark" ? "siteTheme.black" : "siteTheme.grey"}
                  />
                </Avatar>
              </button>
            </Tooltip>
          <ScaleFade
            initialScale={0.5}
            in={isOpen}
            unmountOnExit
            transition={{
              enter: { delay: 0.5, duration: 0.2 },
              exit: { delay: 0 },
            }}
          >
            <Text color="siteTheme.white">Pourya Alipanah</Text>
          </ScaleFade>
        </Flex>
      </Flex>
    </>
  );
};

export default SideBar;
