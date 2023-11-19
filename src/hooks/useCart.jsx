import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
// import  { axiosSecure } from "./useAxiosSecure";


const useCart = () => {
    //Tan Stack Query
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;


/**
 * 1. API, 
 * 2. axios(no difference between axios and axios Secure the only difference is base URL), 
 * 3. Tan stack query 
*/

