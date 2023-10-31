import {
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  ScaleFade,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { useAppContext } from "@context/appContext";

// eslint-disable-next-line react/prop-types
const NavItem = ({ title, icon, linkTo }) => {
  const { showSideBar: isOpen } = useAppContext();

  const { colorMode } = useColorMode();

  return (
    <Flex
      flexDir={"column"}
      alignItems={isOpen ? "start" : "center"}
      textAlign={"start"}
      px={4}
      w={"100%"}
    >
      <Menu placement="right">
        <Link
          as={NavLink}
          to={linkTo}
          color={colorMode === "dark" ? "#777" : "siteTheme.white"}
          _activeLink={{ color: "siteTheme.blue" }}
        >
          <MenuButton>
            <Flex
              alignItems={"center"}
              justifyContent={"start"}
              gap={3}
              h={"29px"}
            >
              <Icon
                as={icon}
                fontSize={18}
                display={{ md: "block", base: isOpen ? "block" : "none" }}
              />
              <ScaleFade
                initialScale={0.5}
                in={isOpen}
                unmountOnExit
                transition={{
                  enter: { delay: 0.5, duration: 0.2 },
                  exit: { delay: 0 },
                }}
              >
                <Text fontSize={{ md: "md", sm: "sm", base: "9.9px" }}>
                  {title}
                </Text>
              </ScaleFade>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default NavItem;
