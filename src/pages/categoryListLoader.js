import { httpInterceptedServices } from "@core/http-service"
import { defer } from "react-router-dom";

const categoryLoader = async (request) => {

  const page = new URL(request.url).searchParams.get('page') || 1

  const pageSize = import.meta.env.VITE_PAGE_SIZE

  const url = `/CourseCategory/sieve?page=${page}&pageSize=${pageSize}`

  const res = await httpInterceptedServices.get(url);

  return res.data;
};

export const categoryListLoader = async ({request})=>{
    return defer({
        categories: categoryLoader(request)
    })
}