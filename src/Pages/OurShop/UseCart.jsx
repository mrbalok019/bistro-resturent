import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../Axios/UseAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const UseCart = () => {
    const axiosSecure =UseAxiosSecure();
    const {user}=useContext(AuthContext);
   const {refetch,data:cart =[]} = useQuery({

    queryKey: ['cart',user?.email],
    queryFn:  async()=>{
        const res = await axiosSecure.get(`/cart?cartUserEmail=${user.email}`);
        return res.data;
    }

   })

   return [cart,refetch];
};

export default UseCart;