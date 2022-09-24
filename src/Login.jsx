import { Button } from 'bootstrap';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './Usercontext';

function Login() {
   let context=useContext(UserContext);
   const [use,setUse]=useState("");
     
    let navigate= useNavigate();

    let username="abc";
    let pass="123"
    let login=()=>{
      if(username=="abc" && pass=="123"){
      navigate("/portal");
      context.setUsername(use)
      }else{
        alert("wrong Creadentials")
      }
   }
  return (
    
   <>

{/* <!-- Outer Row --> */}
<div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <form class="user">
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user"
                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                       value={use} onChange={(e)=>{setUse(e.target.value)}} placeholder="Enter Email Address..."/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-user"
                                       id="exampleInputPassword" placeholder="Password"/>
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox small">
                                        <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                        <label class="custom-control-label" for="customCheck">Remember
                                            Me</label>
                                    </div>
                                </div>
                                <button onClick={()=>login()} class="btn btn-primary btn-user btn-block">
                                    Login
                                </button>
                                <hr/>
                                <Link to="/portal" class="btn btn-google btn-user btn-block">
                                    <i class="fab fa-google fa-fw"></i> Login with Google
                                </Link>
                                <Link to="/portal" class="btn btn-facebook btn-user btn-block">
                                    <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                </Link>
                            </form>
                            <hr/>
                            <div class="text-center">
                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                            <div class="text-center">
                                <a class="small" href="register.html">Create an Account!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
    </>
  )
}

export default Login;