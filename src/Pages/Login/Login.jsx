
import { useContext, useEffect, useRef, useState } from 'react';
import loginBG from '../../assets/others/loginBG.png'
import loginSide from '../../assets/others/loginSide.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../../Axios/UseAxiosPublic';


const Login = () => {

    const navigate = useNavigate();
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const axiosPublic = UseAxiosPublic();

    const {signInUser,signInWithGoogle} =useContext(AuthContext);
    const [disableBtn,setDisableBtn] = useState(true);
    const captchaRef = useRef(null);
    const validateHandler=()=>{
        const captcha = captchaRef.current.value; 
    if (validateCaptcha(captcha)==true) {
                                                 setDisableBtn(false);
           
        }
    }


    const loginHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email,password)
        .then(result=>{
            Swal.fire({

                text: 'Successful login',
                icon: 'success',

            })
            const user= result.user;
            navigate('/')
        })
        .catch((error) => {
            Swal.fire({

                text: error.message,
                icon: 'error',

            })
        })

    }

    const googleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            Swal.fire({

                text: 'Successful login',
                icon: 'success',

            })

            const name=result.user.displayName;
            const email= result.user?.email;
            const newUser= {name,email};

            axiosPublic.post('/users',newUser)
            .then(data=>{
                if(data.data.insertedId)
                    console.log('user added to database')

            })
            navigate('/');
        })
        .catch((error) => {
            Swal.fire({

                text: error.message,
                icon: 'error',

            })
        })
    }

    return (
        <div className="w-full h-full bg-cover" style={{ backgroundImage: `url(${loginBG})` }} >
            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col md:flex-row w-3/4 mt-20
                                 border-4 border-slate-300 shadow-slate-600 shadow-2xl">
                    <div className="">
                        <img src={loginSide} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm ">

                        <form className="card-body" onSubmit={loginHandler}>
                            <p className='text-3xl font-semibold text-center'> Login</p>
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered mb-6" required />

                            </div>

                            {/* show captcha  */}
                            <div className="form-control">

                                <LoadCanvasTemplate />
                            
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type the Captcha Code</span>
                                </label>
                                  
                                <input type="text" onBlur={validateHandler} placeholder="captcha" name='captcha' ref={captchaRef} className="input input-bordered"  />
                                {/* <button onClick={validateHandler}  className='btn btn-outline'> validate</button> */}
                            </div>
                            <div className="form-control">
                            {/* turn on captcha disabled={disableBtn}  */}
                                <button type='submit' className="btn  bg-orange-300 text-white font-semibold" >Login</button>

                            </div>

                            <h1 className='text-base font-semibold'> Are You New Here ? 
                                <Link to='/registration' className='text-blue-800'> Register Now </Link>
                            </h1>
                        </form>

                        <div>
                            <p className='text-center'>--------- OR ----------</p>
                            <p className='text-center text-lg   '>
                                Sign in with  <button onClick={googleSignIn} className='ml-6 btn btn-circle btn-outline'> <FaGoogle /></button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;