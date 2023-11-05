import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import imgPlaceHolder from "@assets/images/courseDetailsPlaceHolder.png";

const CourseDetailsSkeleton = () => {
  const { colorMode } = useColorMode();
  return (
    <Container maxW={"90%"}>
      <Card
        align="center"
        h={"100%"}
        bg={colorMode === "dark" ? "siteTheme.black" : "siteTheme.grey"}
      >
        <CardHeader display={"flex"} justifyContent={"center"}>
          <Skeleton rounded={"lg"} maxW={{ xl: "57%",lg: '70%', base: "100%" }}>
            <Image src={imgPlaceHolder} />
          </Skeleton>
        </CardHeader>
        <CardBody
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
        >
          <Skeleton rounded={"sm"} mb={2}>
            <Badge
              display={"flex"}
              variant="outline"
              colorScheme="messenger"
              rounded={"sm"}
            >
              Front-End
            </Badge>
          </Skeleton>
          <SkeletonText noOfLines={1} mb={2}>
            <Heading textAlign={"center"} size="md" color={"siteTheme.white"}>
              {" "}
              آموزش پیشرفته ری اکت پروژه پنل ادمین
            </Heading>
          </SkeletonText>
          <SkeletonText noOfLines={2}>
            <Text
              color={colorMode === "dark" ? "#959595" : "siteTheme.white"}
              textAlign={"center"}
            >
              دوره پیشرفته معماری پروژه های Large-Scale در ری‌اکت با استفاده از
              Next.js - React Query - Zustand - Typescript - Tailwind Css - Mock
              Service Worker - Storybook - Jest - React Testing Library -
              Cypress - CI/CD
            </Text>
          </SkeletonText>
        </CardBody>
        <CardFooter
          w={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Card
            size={"md"}
            align={"center"}
            bg={colorMode === "dark" ? "siteTheme.grey" : "siteTheme.black"}
            color={"siteTheme.white"}
            w={{md:'140px',sm:'130px',base:'100%'}}
          >
            <CardBody
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={3}
            >
              <Skeleton>
                <Text fontSize={{md:'md',sm:'sm'}}>زمان آموزش</Text>
              </Skeleton>
              <Skeleton>
                <Text fontSize={{md:'md',sm:'sm'}} textAlign={"center"} color={"siteTheme.blue"}>
                  6 ساعت
                </Text>
              </Skeleton>
            </CardBody>
          </Card>
          <Card
            size={"md"}
            align={"center"}
            bg={colorMode === "dark" ? "siteTheme.grey" : "siteTheme.black"}
            color={"siteTheme.white"}
            w={{md:'140px',sm:'130px',base:'100%'}}
          >
            <CardBody
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={3}
            >
              <Skeleton>
                <Text fontSize={{md:'md',sm:'sm'}}>زمان آموزش</Text>
              </Skeleton>
              <Skeleton>
                <Text fontSize={{md:'md',sm:'sm'}} textAlign={"center"} color={"siteTheme.blue"}>
                  6 ساعت
                </Text>
              </Skeleton>
            </CardBody>
          </Card>
          <Card
            size={"md"}
            align={"center"}
            bg={colorMode === "dark" ? "siteTheme.grey" : "siteTheme.black"}
            color={"siteTheme.white"}
            w={{md:'140px',sm:'130px',base:'100%'}}
          >
            <CardBody
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={3}
            >
              <Skeleton>
                <Text fontSize={{md:'md',sm:'sm'}}>زمان آموزش</Text>
              </Skeleton>
              <Skeleton>
                <Text fontSize={{md:'md',sm:'sm'}} textAlign={"center"} color={"siteTheme.blue"}>
                  6 ساعت
                </Text>
              </Skeleton>
            </CardBody>
          </Card>
          <Card
            size={"md"}
            align={"center"}
            bg={colorMode === "dark" ? "siteTheme.grey" : "siteTheme.black"}
            color={"siteTheme.white"}
            w={{md:'140px',sm:'130px',base:'100%'}}
          >
            <CardBody
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={3}
            >
              <Skeleton>
                <Text fontSize={{md:'md',sm:'sm'}}>زمان آموزش</Text>
              </Skeleton>
              <Skeleton>
                <Text fontSize={{md:'md',sm:'sm'}} textAlign={"center"} color={"siteTheme.blue"}>
                  6 ساعت
                </Text>
              </Skeleton>
            </CardBody>
          </Card>
          <Card
            size={"md"}
            align={"center"}
            bg={colorMode === "dark" ? "siteTheme.grey" : "siteTheme.black"}
            color={"siteTheme.white"}
            w={{md:'140px',sm:'130px',base:'100%'}}
          >
            <CardBody
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={3}
            >
              <Skeleton>
                <Text fontSize={{md:'md',sm:'sm'}}>زمان آموزش</Text>
              </Skeleton>
              <Skeleton>
                <Text fontSize={{md:'md',sm:'sm'}} textAlign={"center"} color={"siteTheme.blue"}>
                  6 ساعت
                </Text>
              </Skeleton>
            </CardBody>
          </Card>
          <Card
            size={"md"}
            align={"center"}
            bg={colorMode === "dark" ? "siteTheme.grey" : "siteTheme.black"}
            color={"siteTheme.white"}
            w={{md:'140px',sm:'130px',base:'100%'}}
          >
            <CardBody
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={3}
            >
              <Skeleton>
                <Text fontSize={{md:'md',sm:'sm'}}>زمان آموزش</Text>
              </Skeleton>
              <Skeleton>
                <Text fontSize={{md:'md',sm:'sm'}} textAlign={"center"} color={"siteTheme.blue"}>
                  6 ساعت
                </Text>
              </Skeleton>
            </CardBody>
          </Card>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default CourseDetailsSkeleton;
