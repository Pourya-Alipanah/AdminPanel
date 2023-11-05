/* eslint-disable react/prop-types */
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import imgPlaceHolder from "@assets/images/courseDetailsPlaceHolder.png";

const CourseDetailsCard = ({ courseDetails }) => {
  const { colorMode } = useColorMode();
  return (
    <Container maxW={"90%"}>
      <Card
        align="center"
        h={"100%"}
        bg={colorMode === "dark" ? "siteTheme.black" : "siteTheme.grey"}
      >
        <CardHeader display={"flex"} justifyContent={"center"}>
          <Image
            maxW={{ xl: "57%",lg: '70%', base: "100%" }}
            src={courseDetails.coverImageUrl}
            fallbackSrc={imgPlaceHolder}
            rounded={"lg"}
          />
        </CardHeader>
        <CardBody
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
        >
          <Badge
            mb={2}
            variant="outline"
            colorScheme="messenger"
            rounded={"sm"}
          >
            {courseDetails.courseCategory}
          </Badge>
          <Heading textAlign={"center"} size="md" color={"siteTheme.white"}>
            {" "}
            {courseDetails.title}
          </Heading>
          <Text
            color={colorMode === "dark" ? "#959595" : "siteTheme.white"}
            textAlign={"center"}
          >
            {courseDetails.description}
          </Text>
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
              <Text fontSize={{md:'md',sm:'sm'}}>زمان آموزش</Text>
              <Text fontSize={{md:'md',sm:'sm'}} textAlign={"center"} color={"siteTheme.blue"}>
                {courseDetails.duration} ساعت
              </Text>
            </CardBody>
          </Card>
          <Card
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
              <Text fontSize={{md:'md',sm:'sm'}}>سطح دوره</Text>
              <Text fontSize={{md:'md',sm:'sm'}} textAlign={"center"} color={"siteTheme.blue"}>
                {courseDetails.courseLevel}
              </Text>
            </CardBody>
          </Card>
          <Card
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
              <Text fontSize={{md:'md',sm:'sm'}}>تعداد فصل ها</Text>
              <Text fontSize={{md:'md',sm:'sm'}} textAlign={"center"} color={"siteTheme.blue"}>
                {courseDetails.numOfChapters} فصل
              </Text>
            </CardBody>
          </Card>
          <Card
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
              <Text fontSize={{md:'md',sm:'sm'}}>تعداد مباحث</Text>
              <Text fontSize={{md:'md',sm:'sm'}} textAlign={"center"} color={"siteTheme.blue"}>
                {courseDetails.numOfLectures} مبحث
              </Text>
            </CardBody>
          </Card>
          <Card
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
              <Text fontSize={{md:'md',sm:'sm'}}>تعداد نظرات</Text>
              <Text fontSize={{md:'md',sm:'sm'}} textAlign={"center"} color={"siteTheme.blue"}>
                {courseDetails.numOfReviews} نظر
              </Text>
            </CardBody>
          </Card>
          <Card
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
              <Text fontSize={{md:'md',sm:'sm'}}>میانگین نظرات</Text>
              <Text fontSize={{md:'md',sm:'sm'}} textAlign={"center"} color={"siteTheme.blue"}>
                {courseDetails.averageReviewRating} از 5
              </Text>
            </CardBody>
          </Card>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default CourseDetailsCard;
