import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import placeHolder from "@assets/images/placeHolder.png";

const CardSkeleton = () => {
  const { colorMode } = useColorMode();
  return (
    <Card
      maxW={{ md: "xs", base: "280px" }}
      bg={colorMode === "dark" ? "siteTheme.black" : "siteTheme.grey"}
      color={"siteTheme.white"}
      rounded={"xl"}
      overflow={"hidden"}
    >
      <CardBody>
        <Skeleton>
          <Image src={placeHolder} borderRadius="lg" />
        </Skeleton>
        <Flex w={"100%"} alignItems={"center"} mt="6">
          <Skeleton>
            <Badge
              rounded={3}
              fontSize={{ md: "sm", base: "xs" }}
              fontStyle={"italic"}
            >
              مقدماتی
            </Badge>
          </Skeleton>
        </Flex>
        <Stack mt="3" spacing="5">
          <SkeletonText noOfLines={2} />
          <SkeletonText noOfLines={{ md: 3, base: 2 }} />
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
          <Skeleton>
            <Text
              fontSize={{ md: "sm", base: "xs" }}
              display={"flex"}
              alignItems={"center"}
              gap={2}
            >
              <BsClock />6 ساعت
            </Text>
          </Skeleton>
          <Skeleton>
            <Text
              fontSize={{ md: "sm", base: "xs" }}
              display={"flex"}
              alignItems={"center"}
              gap={2}
            >
              <FaRegComment />
              100 نظر
            </Text>
          </Skeleton>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default CardSkeleton;
