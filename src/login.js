import React from 'react'
import {useForm} from 'react-hook-form'

function Login(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log(errors);
    


    return(
        <div>
            <div className='container'>
                <div className="login">
                    <div className="cont-log">
                            <h2>Login</h2>
                        <form onSubmit={handleSubmit((e)=>{
                            console.log(e);
                        })}>
                            <input type="text" {...register("name",{required:"Name  is requied"})} id="add" placeholder="Email address or phone number" /><br />
                             {errors.name && <span>{errors.name.message}</span>}

                            <input type="password" {...register("psw",{required:"Password is required",minLength:{value:8,message:"length should be 8 character"}})} id="pass" placeholder="password" /><br/>
                            {errors.psw && <span>{errors.psw.message}</span>}

                            <br/>
                            <button id="btn">Log in</button>
                        </form>
                        
                        </div>
                    </div>
            </div>
        </div>
    
    )
}
export default Login