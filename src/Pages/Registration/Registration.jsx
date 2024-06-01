import { useContext, useEffect, useRef, useState } from 'react';
import loginBG from '../../assets/others/loginBG.png'
import loginSide from '../../assets/others/loginSide.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import UseAxiosPublic from '../../Axios/UseAxiosPublic';
const Registration = () => {
    // useEffect(()=>{
    //     loadCaptchaEnginge(6); 
    // },[])

    const navigate = useNavigate();
    
    const axiosPublic = UseAxiosPublic()

    const {createUser,signOutUser} =useContext(AuthContext);
    const [disableBtn,setDisableBtn] = useState(true);
    
        // check password for retype 
    const passwordRef = useRef(null);
    const rePasswordRef = useRef(null);
        const retypeValidation = ()=>{
            const passwordValue = passwordRef.current.value;
            const rePasswordValue = rePasswordRef.current.value;

            if( passwordValue=== rePasswordValue)
                setDisableBtn(false);
            else
                setDisableBtn(true);

        }


        // submit form 

    const {
        register, formState: { errors }, handleSubmit,reset}= useForm();
        
      const onSubmit = (data, e) => {
        console.log(data);

        createUser(data.email,e.target.password.value)
        .then(result=>{
            const newUser= result.user;
            Swal.fire({
                    
                text: 'Successfuly registered',
                icon: 'success',
                
              })

              updateProfile(result.user, {
                displayName: data.name, 
                
              })
              .then(() => {
                const name=data.name;
                const email= data.email;
                const newUser= {name,email};

                axiosPublic.post('/users',newUser)
                .then(data=>{
                    if(data.data.insertedId)
                        console.log('user added to database')

                })
              })
              .catch((error) => {
                Swal.fire({
                    
                    text: error.message,
                    icon: 'error',
                    
                  })
              });


              signOutUser()
              .then(()=>{
                navigate('/login');
              })
            


        })
    };


    // const loginHandler = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     createUser(email,password)
    //     .then(result=>{
    //         const user= result.user;
    //     })

    // }
    return (
        <div>
             <div className="w-full h-full bg-cover" style={{ backgroundImage: `url(${loginBG})` }} >
            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col md:flex-row w-3/4 mt-20
                                 border-4 border-slate-300 shadow-slate-600 shadow-2xl">
                    <div className="">
                        <img src={loginSide} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm ">

                        <form className="card-body"  onSubmit={handleSubmit(onSubmit)}>
                            <p className='text-3xl font-semibold text-center'> Register Now</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",{ pattern: /^[A-Za-z0-9]+$/i , minLength:6 })} 
                                placeholder="password" ref={passwordRef} className="input input-bordered mb-6" required />
                                 {errors.password?.type === "pattern" && (
                                 <p role="alert">Capital and small letter is required</p>
                                  )}
                                  {errors.password?.type === "minLength" && (
                                 <p role="alert">Min 6 characters are required</p>
                                  )}


                            </div>
                            
                            {/* retype password  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Retype Password</span>
                                </label>
                                <input type="repassword" ref={rePasswordRef} onChange={retypeValidation} placeholder="retype password" className="input input-bordered mb-6" required />
                                


                            </div>

                            {/* show captcha  */}
                            {/* <div className="form-control">

                                <LoadCanvasTemplate />
                            
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type the Captcha Code</span>
                                </label>
                                <input type="text" placeholder="captcha" name='captcha' ref={captchaRef} className="input input-bordered" required />
                                <button onClick={validateHandler}  className='btn btn-outline'> validate</button>
                            </div> */}
                            <div className="form-control">
                                <button type='submit' className="btn  bg-orange-300 text-white font-semibold" disabled={disableBtn}>
                                    Register</button>

                            </div>
                            
                            <h1 className='text-base font-semibold'> Already registered ? 
                                <Link to='/login' className='text-blue-800'> Login Now </Link>
                            </h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Registration;