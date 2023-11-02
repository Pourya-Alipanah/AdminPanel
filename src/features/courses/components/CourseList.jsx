/* eslint-disable react/prop-types */

import CourseCard from "./CourseCard";
import { Flex } from "@chakra-ui/react";

const CourseList = ({courseList}) => {

  return (
    <>
      <Flex justifyContent={'space-evenly'} wrap={'wrap'} gap={5}>
        {
            courseList.map((course)=>(
                <CourseCard key={course.id} {...course}/>
            ))
        }
      </Flex>
    </>
  );
};

export default CourseList;
