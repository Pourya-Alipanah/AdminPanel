import { httpInterceptedServices } from "@core/http-service"
import { defer } from "react-router-dom"

const loadDetails = async (params) => {
    const res = await httpInterceptedServices.get(`/Course/by-id/${params.id}`)
    return res.data
}

const courseDetailsLoader = async ({params}) => {
    return defer({
        courseDetails: loadDetails(params)
    })
}

export default courseDetailsLoader