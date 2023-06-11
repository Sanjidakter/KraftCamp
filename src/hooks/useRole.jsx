import React from 'react';
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const {user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: role, isLoading: isRoleLoading } = useQuery(
        ['users', user?.email],
        async () => {
          if (user?.email && !loading) {
            const res = await axiosSecure.get(`/users-role/${user?.email}`);
            return res.data.role;
          } else {
            return null;
          }
        }
      );
    return [role, isRoleLoading]
};

export default useRole;