import { useForm } from "react-hook-form";
import img from '../../assets/login.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";



const Register = () => {

    const {createUser,user,setUser,setLoading}=useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        const {email,displayName,photoURL}=data 
         const userData={email,displayName,photoURL,userStatus}      
        
        createUser(data?.email,data?.password)
        .then(result=>{
            
            console.log(result.user)
            console.log('user---',user)
            // if(result.user){
                
            //       axios.post("https://electra-server-chi.vercel.app/users",userData)
            //       .then(res=>{
            //         console.log(res.data)
            //         if(res.data.insertedId){
            //             Swal.fire({
            //                 position: "top-center",
            //                 icon: "success",
            //                 title: "Register is successful",
            //                 showConfirmButton: false,
            //                 timer: 3500
            //               });

            //         }
            //       })

            // }
            setLoading(false)

        })
        
        
      }

    return (
        <div>
         <div className="hero min-h-screen bg-base-200">
            <div>
                <h2 className="text-center text-6xl font-bold pb-10">Register Now</h2>
            <div className="hero-content flex-col lg:flex-row-reverse gap-8">
<div className="text-center lg:text-left w-full lg:w-1/2">
<img className="lg:max-w-[550px] rounded-lg object-cover" src={img} alt="" />
</div>
<div className="card shrink-0  shadow-2xl bg-base-100 w-full lg:w-1/2 ">
<form onSubmit={handleSubmit(onSubmit)} className="card-body">
  <div className="form-control">
    <label className="label">
      <span className="label-text">Name</span>
    </label>
    <input type="text" placeholder="Your name" {...register("displayName")} className="input input-bordered"  />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Photo</span>
    </label>
    <input type="text" placeholder="Photo URL" {...register("photoURL")} className="input input-bordered"  />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Email</span>
    </label>
    <input type="email" placeholder="Enter email" {...register("email", { required: true })} className="input input-bordered"  />
    {errors.email && <span className="text-red-500">Email is required</span>}
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


    {errors.password?.type==="minLength" && <span className="text-red-500">Password must be at least 6 character</span>}
    {errors.password?.type==="pattern" && <span className="text-red-500">Password must contains at least one uppercase, one lowercase and one special character</span>}


    <label className="label">
      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
    </label>
  </div>
  <div className="form-control mt-6">
    <button className="btn btn-primary">Register</button>
  </div>
</form>
</div>
</div>
            </div>

         </div>
      
  </div>
    );
};

export default Register;