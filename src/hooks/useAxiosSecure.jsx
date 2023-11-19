import axios from "axios";
// import { useNavigate } from "react-router-dom";


// export const axiosSecure = axios.create({
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    // const navigate = useNavigate();
    // request interceptor to add authorization 
    
    axiosSecure.interceptors.request.use(function (config) {
        // const token = localStorage.getItems('access-token')
        console.log('request stopped by inceptors');
        // console.log('request stopped by inceptors', token);


        // config.headers.authorization = `Bearer ${token}`
        return config;
    },
    function(error){
        return Promise.reject(error);
    })

    // interceptor 401 and 403 status
    //=================================
    // axiosSecure.interceptors.response.use(function(response){
    //     return response;
    // }, function(error){
    //     const status = error.response.status;
    //     console.log('status error in the interceptor', status)
    //     console.log('status error in the interceptor', error)
    //     if(status === 401 || status === 403){
    //         navigate('/login')
    //     }
    //     return Promise.reject(error);
    // })

    return axiosSecure;
};

export default useAxiosSecure;