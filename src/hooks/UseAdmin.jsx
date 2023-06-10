import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: role, isLoading:isRoleLoading} = useQuery({
        queryKey: ['users', user?.email],
        // enabled:!loading,
        queryFn: async () => {
            
               if(user?.email && !loading){
                const res = await axiosSecure.get(`/users-role/${user?.email}`);
                console.log('is admin response', res)
                return res.data.role;
               }else{
                return "loading";
               }
            
           
        }
    })
    return [role, isRoleLoading]
}
export default useAdmin;









