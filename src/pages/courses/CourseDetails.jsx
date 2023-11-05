import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import CourseDetailsSkeleton from "./CourseDetailsSkeleton";
import CourseDetailsCard from "./CourseDetailsCard";

const CourseDetails = () => {
  const courseDetailData = useLoaderData();

  return (
    <Suspense fallback={<CourseDetailsSkeleton />}>
      <Await resolve={courseDetailData.courseDetails}>
        {
            (loadedCourseDetails) => <CourseDetailsCard courseDetails={loadedCourseDetails} />
        }
      </Await>
    </Suspense>
  );
};

export default CourseDetails;
