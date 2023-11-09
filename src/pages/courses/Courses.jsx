import { Button, Container, Flex, useColorMode } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CourseList from "@features/courses/components/CourseList";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import CoursesSkeleton from "./CoursesSkeleton";
import { toast } from "react-toastify";

const Courses = () => {
  const coursesData = useLoaderData();
  const {colorMode} = useColorMode()

  const addCourseHandler = ()=>{
    toast.info('متاسفانه این قابلیت رو نداریم :(',{
      position: 'top-center',
      autoClose:2000,
      theme: colorMode==='dark' ? 'dark':'light'
    })
  }

  return (
    <Container maxW={"full"} h={"100%"} p={0}>
      <Flex w={"100%"} mb={"40px"} ps={10}>
        <Button
          colorScheme="messenger"
          size={"sm"}
          rightIcon={<AiOutlinePlus />}
          display={{md:'flex' , base:'none'}}
          onClick={addCourseHandler}
        >
          {" "}
          افزودن دوره جدید{" "}
        </Button>
        <Button
          colorScheme="messenger"
          size={"sm"}
          rightIcon={<AiOutlinePlus />}
          display={{md:'none' , base:'flex'}}
          onClick={addCourseHandler}
        >
          {" "}
          دوره جدید{" "}
        </Button>
      </Flex>

      <Suspense fallback={<CoursesSkeleton/>}>

        <Await resolve={coursesData.courseList}>
          {
            (loadedCourseList) => <CourseList courseList={loadedCourseList} />
          }
        </Await>

      </Suspense>

        
    </Container>
  );
};

export default Courses;
