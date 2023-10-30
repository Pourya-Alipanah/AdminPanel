import { Container, Box, Grid, VStack, useColorMode } from "@chakra-ui/react";
import ChangeTheme from "@components/ChangeTheme";
import { Outlet } from "react-router-dom";

const IdentityLayout = () => {
  const { colorMode } = useColorMode();

  return (
    <Container
      maxW={"full"}
      p={0}
      bg={colorMode === "dark" ? "siteTheme.grey" : "siteTheme.white"}
      w={"100vw"}
      h={"full"}
    >
      <Box
        as="nav"
        px={"40px"}
        display={"flex"}
        alignItems={"center"}
        w={"100%"}
        h={'60px'}
        justifyContent={"start"}
        gap={10}
      >
        <ChangeTheme />
      </Box>

      <Grid
        as={"main"}
        placeItems={"center"}
        alignItems={{ md: "center", base: "start" }}
        h={`calc(100vh - 60px)`}
      >
        <VStack
          spacing={6}
          rounded={"20px"}
          alignItems={"center"}
          justifyContent={"center"}
          w={{ md: "600px", base: "100%" }}
          minHeight={{ md: "400px", base: "500px" }}
          py={"20px"}
          bg={colorMode === "dark" ? "siteTheme.black" : "siteTheme.grey"}
        >
          <Outlet />
        </VStack>
      </Grid>
    </Container>
  );
};

export default IdentityLayout;
