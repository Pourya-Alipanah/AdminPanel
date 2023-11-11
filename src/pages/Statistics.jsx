import { Flex, useColorMode } from "@chakra-ui/react";
import StatisticsCharts from "./Statistics/StatisticsCharts";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import StatisticsLoading from "./Statistics/StatisticsLoading";


const Statistics = () => {
  const coursesData = useLoaderData();
  const {colorMode} = useColorMode()
  return (
    <Flex
      bg={colorMode==='dark'?"siteTheme.black":"siteTheme.grey"}
      maxW={"100%"}
      minH={"500px"}
      py={5}
      alignItems={"center"}
      justifyContent={"center"}
      gap={10}
      rounded={'xl'}
      flexDir={'column'}
      overflowX={'hidden'}
    >
      <Suspense fallback={<StatisticsLoading/>}>

        <Await resolve={coursesData.courseList}>
          {
            (loadedCourseList) => <StatisticsCharts courseStatistics={loadedCourseList} />
          }
        </Await>

      </Suspense>
    </Flex>
  );
};

export default Statistics;
