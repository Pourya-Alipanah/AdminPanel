import { Flex } from "@chakra-ui/react";
import CardSkeleton from "@components/CardSkeleton";


const CoursesSkeleton = () => {
  return (
    <Flex justifyContent={"space-evenly"} wrap={"wrap"} gap={5}>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
    </Flex>
  );
};

export default CoursesSkeleton;
