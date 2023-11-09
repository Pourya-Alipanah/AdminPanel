import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UnhandledException = () => {
  return (
    <Container maxW={"100%"} h={"100vh"} bg={"siteTheme.black"}>
      <Flex
        w={"100%"}
        h={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={5}
      >
        <Heading as={"h1"} fontSize={"100px"} color={"siteTheme.blue"}>
          500
        </Heading>
        <Text as={"h2"} fontSize={"40px"}>
          خطای سرور
        </Text>
        <Text as={"h4"} fontSize={"20px"}>
          امکان پردازش درخواست شما وجود ندارد .
        </Text>
        <Button as={Link} color={"siteTheme.blue"} fontSize={"15px"}>
          بازگشت به صفحه اصلی
        </Button>
      </Flex>
    </Container>
  );
};

export default UnhandledException;
