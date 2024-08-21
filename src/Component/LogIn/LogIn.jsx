import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../assets/login.jpg'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const LogIn = () => {

  const {loginUser,setLoading,setUser,user,createGoogleUser}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    loginUser(data.email,data.password)
    .then(result=>{
        console.log(result.user)
        setUser(result.user)
        setLoading(false)
        if(result.user){
        
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login successful",
            showConfirmButton: false,
            timer: 3500
          })
        }
    })
  }

  const {refetch, data:allUser}=useQuery({
    queryKey:['allUser'],
    queryFn: async()=>{
        const res=await axios.get('https://electra-server-chi.vercel.app/users')
        setLoading(false)
        return res.data
    }
  })

  

  const handleGoogleSignIn=()=>{

    createGoogleUser()
    .then(result=>{
    setUser(result.user)

    const email=result?.user?.email
  const displayName=result?.user?.displayName
  const photoURL=result?.user?.photoURL
  const userStatus='user'

  const userData={email,displayName,photoURL,userStatus} 
  console.log(userData)

    if(result.user){
            
      axios.post("https://electra-server-chi.vercel.app/users",userData)
      .then(res=>{
        console.log(res.data)
        if(res.data){
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login is successful",
                showConfirmButton: false,
                timer: 3500
              });

        }
      })

}
    setLoading(false)
    })
  }




    return (
        <div>
            
              <div className="hero min-h-screen bg-base-200">
                <div>
                    <h2 className="text-center text-6xl font-bold pb-6">LogIn Now</h2>

                <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-full lg:w-1/2">
      <img className="lg:max-w-[550px] rounded-lg object-cover" src={img} alt="" />
    </div>
    <div className="card shrink-0  shadow-2xl bg-base-100  w-full lg:w-1/2 ">
    
      <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter email" {...register("email", { required: true })} className="input input-bordered"  />

          

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Password</span>
          </label>
          <input type="password" placeholder="Type Password" {...register("password", { required: true, 
          minLength: 6,
          maxLength:20,
          pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])/,
           },   )} className="input input-bordered" required />

          


          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className=" flex gap-2 items-center justify-center pb-6">
        <small>New user? Please</small> 
        <Link to='/register'><p className="text-blue-700 font-bold">Register</p></Link>
      </div>
      <div>
      <div className="flex justify-center gap-4 pb-8">
                        <button onClick={handleGoogleSignIn}  className="pr-4 text-2xl"><FaGoogle /></button>
                        <button className="pl-4 text-2xl"><FaGithub /></button>
                    
                    </div>
      </div>
    </div>
  </div>


                </div>
                
              
  
              </div>
            
        </div>
    );
};

export default LogIn;