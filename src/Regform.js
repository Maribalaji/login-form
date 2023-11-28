import React from "react"
import { useForm } from "react-hook-form"


function Regform(){
    const test=useForm();
    console.log(test);
    const {register,handleSubmit,formState:{errors}}=useForm()

    return(
        <div>
            <div className="reg-container">
                <div className="reg-form">
                    <h1>Create An Account</h1>
                    <form className="reg-cont" onSubmit={handleSubmit((data)=>{
                            console.log(data);
                            
                        
                    })}>
                        <input type="text" {...register("fname",{required:'Please Enter first Name'})}placeholder="First Name" />
                            {errors.fname && <span>{errors.fname.message}</span>}

                        <input type="text" {...register("lname",{required:'please enter Last Name'})} placeholder="last Name" />
                        {errors.lname && <span>{errors.lname.message}</span>}

                        <input type="email" {...register("email",{required:'Email is required'})}  placeholder="Email" />
                        {errors.email && <span>{errors.email.message}</span>}

                        <input type="text"  {...register('psw',{required:"password is required",minLength:{value:8,message:"length should be 8 character"}})}placeholder="Password" />
                        {errors.psw && <span>{errors.psw.message}</span>}

                        <input type="text" {...register('conpsw',{required:"please confirm password",minLength:{value:8,message:"length should be 8 character"}})}placeholder="confirm Password" /><br />
                        {errors.conpsw && <span>{errors.conpsw.message}</span>}
                        <br/>
                        <button className="reg-btn">Create Account</button>
                    </form>
                </div>
           </div>
        </div>
    )
}
export default Regform