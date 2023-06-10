import React from 'react';
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
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
};

export default useRole;