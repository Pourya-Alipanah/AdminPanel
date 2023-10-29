import { httpService } from "@core/http-service";


export const registerAction = async ({ request }) => {

    
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const res = await httpService.post('/Users',data)

    return res.status === 200 

};
