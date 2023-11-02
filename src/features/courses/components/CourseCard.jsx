import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import placeHolder from "@assets/images/placeHolder.png";


// eslint-disable-next-line react/prop-types
const CourseCard = ({courseLevel , coverImageUrl , title , description , duration , numOfReviews}) => {
    
  const { colorMode } = useColorMode();

  const checkCourseLevel = (level) => {
    let badgeTheme = "";

    switch (level) {
      case "متوسط":
        badgeTheme = "yellow";
        break;
      case "پیشرفته":
        badgeTheme = "red";
        break;

      default:
        badgeTheme = "messenger";
        break;
    }

    return badgeTheme;
  };

  return (
    <Card
      maxW={{ md: "xs", base: "280px" }}
      bg={colorMode === "dark" ? "siteTheme.black" : "siteTheme.grey"}
      color={"siteTheme.white"}
      rounded={"xl"}
      overflow={"hidden"}
    >
      <CardBody>
        <Image
          src={coverImageUrl}
          borderRadius="lg"
          fallbackSrc={placeHolder}
          fallbackStrategy={"beforeLoadOrError"}
        />
        <Flex w={"100%"} alignItems={"center"} mt="6">
          <Badge
            rounded={3}
            fontSize={{ md: "sm", base: "xs" }}
            fontStyle={"italic"}
            colorScheme={checkCourseLevel(courseLevel)}
          >
            {courseLevel}
          </Badge>
        </Flex>
        <Stack mt="3" spacing="5">
          <Heading size={{ md: "sm", base: "xs" }}>{title}</Heading>
          <Text noOfLines={{ md: 3, base: 2 }} fontSize={"xs"}>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter p={{ md: "5", base: "4" }}>
        <Flex
          w={"100%"}
          wrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
            fontSize={{ md: "sm", base: "xs" }}
            color={colorMode === "dark" ? "#959595" : "#777"}
            display={"flex"}
            alignItems={"center"}
            gap={2}
          >
            <BsClock />
            {duration} ساعت
          </Text>
          <Text
            fontSize={{ md: "sm", base: "xs" }}
            color={colorMode === "dark" ? "#959595" : "#777"}
            display={"flex"}
            alignItems={"center"}
            gap={2}
          >
            <FaRegComment />
            {numOfReviews} نظر
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
