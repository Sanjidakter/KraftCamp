import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect, useState } from 'react';
import useAuth from './useAuth';
import { AuthContext } from '../providers/AuthProvider';

const useCart = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://kraftcamp-server.vercel.app/carts?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]
};

export default useCart;