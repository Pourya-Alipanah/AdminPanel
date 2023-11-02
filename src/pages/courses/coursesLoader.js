import { httpInterceptedServices } from "@core/http-service"
import { defer } from "react-router-dom"

const loadCourses = async () => {
    const res = await httpInterceptedServices.get('/Course/list')
    return res.data
}

const coursesLoader = async () => {
    return defer({
        courseList: loadCourses()
    })
}

export default coursesLoader