import { httpService } from "@core/http-service";

export const loginAction = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const res = await httpService.post('Users/login',data)
    if(res.status === 200){
      localStorage.setItem('token' , res?.data.token )
      return true
    }
}
