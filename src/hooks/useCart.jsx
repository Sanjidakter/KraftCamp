import React, { useContext, useEffect, useState } from 'react';
import useAuth from './useAuth';

const useCart = () => {
    const { user, loading } = useAuth();
    const [carts,setCarts] = useState([]);
    
    useEffect(() => {
        fetch(`/carts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCarts(data);
                setLoading(false);
            });
    }, [])
    return [carts, loading]
};

export default useCart;