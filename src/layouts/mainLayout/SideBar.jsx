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
} from "@chakra-ui/react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiCategory, BiLineChart } from "react-icons/bi";
import { useState } from "react";

import avatarPic from "@assets/images/pourya-alipanah.jpg";
import NavItem from "./NavItem";
import { useAppContext } from "@context/appContext";

// don't forget children props for outlet //
const SideBar = () => {
  const { showSideBar: isOpen, toggleSideBar: onToggle } = useAppContext();
  const { sideBarSize, setSideBarSize } = useAppContext();

  const [isOnline, setIsOnline] = useState(false);
  const { colorMode } = useColorMode();

  const sideBarSizeHandler = () => {
    setSideBarSize();
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
          base: sideBarSize === "large" ? "250px" : "0",
        }}
        bg={colorMode === "dark" ? "siteTheme.black" : "siteTheme.grey"}
        pos={"sticky"}
        right={0}
        top={0}
        gap={{ md: 6, sm: 5, base: 2 }}
      >
        <Flex w={"100%"} justifyContent={"end"}>
          <LightMode>
            <Button
              display={{ md: "block", base: "none" }}
              background={"unset"}
              colorScheme="messenger"
              onClick={sideBarSizeHandler}
            >
              <HiBars3BottomRight size={"30px"} color="siteTheme.white" />
            </Button>
          </LightMode>
        </Flex>
        <NavItem
          title={"همه دوره ها"}
          icon={FaChalkboardTeacher}
          linkTo={"/"}
        />
        <NavItem
          title={"دسته بندی دوره ها"}
          icon={BiCategory}
          linkTo={"/category"}
        />
        <NavItem
          title={"آمار ها"}
          icon={BiLineChart}
          linkTo={"/statistics"}
        />
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
              <Avatar
                src={avatarPic}
                loading="lazy"
                size={{ md: "md", base: "sm" }}
                display={{ md: "block", base: isOpen ? "block" : "none" }}
              >
                <AvatarBadge
                  placement="bottom-start"
                  boxSize="1em"
                  bg={isOnline ? "siteTheme.blue" : "tomato"}
                  borderColor={
                    colorMode === "dark" ? "siteTheme.black" : "siteTheme.grey"
                  }
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
            <Text
              fontSize={{ md: "md", sm: "sm", base: "xs" }}
              color="siteTheme.white"
            >
              Pourya Alipanah
            </Text>
          </ScaleFade>
        </Flex>
      </Flex>
    </>
  );
};

export default SideBar;
