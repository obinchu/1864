// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import FormInput from '../components/forms/FormInput'

const UserAccess = () => {
const [signUp, setSignUp] = useState(true)
const [isFormValid, setIsFormValid] = useState(false);
const initialState = {
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    age:"",
    password:"",
    confirmpassword:"",
  }
  const [values,setValues] = useState(initialState)

  const logInputs = [
      {
            id:1,
            name:'email',
            type:"email",
            placeholder:"Email",
            erroMessage:"Invalid email address",
            label:"Email"
          
        },
          {
            id:2,
            name:'password',
            type:"password",
            placeholder:"Password",
            erroMessage:"Password should be 8-12 characters and should include atleast 1 letter, 1 number and a special character!",
            label:"Password",
            pattern:"^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$",
          
        },
  ]

      const inputs = [
     
       
         {
            id:4,
            name:'firstname',
            type:"text",
            placeholder:"First Name",
            label:"First Name",
            pattern:"^[A-Za-z0-9]*$",
            erroMessage:"Invalid Input",
          
        },
         {
            id:5,
            name:'lastname',
            type:"text",
            placeholder:"Last Name",
            label:"Last Name",            
            pattern:"^[A-Za-z0-9]*$",
            erroMessage:"Invalid Input",
          
        },
         {
            id:6,
            name:'email',
            type:"email",
            placeholder:"Email",
            erroMessage:"Invalid email address",
            label:"Email"
          
        },
         {
            id:7,
            name:'phone',
            type:"number",
            placeholder:"Phone Number",
            label:"Phone Number",
            erroMessage:"Invalid number",
            pattern:"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$",
          
        },
         {
            id:8,
            name:'age',
            type:"number",
            placeholder:"Date of Birth",
            erroMessage:"User should be less than 75 years of age!",
            label:"Date of Birth",
            pattern:'\b\d{4}\b',
            
          
        },
          {
            id:2,
            name:'password',
            type:"password",
            placeholder:"Password",
            erroMessage:"Password should be 8-12 characters and should include atleast 1 letter, 1 number and a special character!",
            label:"Password",
            pattern:"^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$",
          
        },
         {
            id:3,
            name:'confirmpassword',
            type:"password",
            placeholder:"Confirm Password",
            erroMessage:"Passwords don't match!",
            pattern:values.password,
            label:"Confirm Password"
          
        },
    ]

useEffect(() => {
    const allFieldsFilled = Object.values(values).every(value => String(value).trim() !== "");
    setIsFormValid(allFieldsFilled);
}, [values]);


  

const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
};
const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8000/add-user/', {
            first_name: values.firstname,
            last_name: values.lastname,
            email: values.email,
            phone: values.phone,
            age: values.age,
            password: values.password,
            confirm_password: values.confirmpassword,
        });

        console.log(response.data);

        setValues(initialState);
    } catch (error) {
        console.error(error);
    }
}


  return (
    <>
    {signUp ?
         <div className='flex flex-col  w-full h-[100vh] bg-[#0F0F0F] '>
        <div className="flex flex-col w-full justify-center h-full">
         <div className="flex my-[5px] w-full max-w-4xl mx-auto overflow-hidden rounded-md h-[410px] p-[24px ] bg-white/90">
            <form action="" method="post" className='w-full h-full p-[32px] flex text-primary flex-col justify-between'>
                <h1 className='my-[15px] text-primary text-[32px] font-normal'>Sign In</h1> 
                  {
                logInputs.map((input)=>{
                    return(
                        
                        <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange} />
                    )
                })
               }
                <div className="flex my-[5px] items-center">
                    <input className='me-[10px] p-[10px] w-[20px] h-[20px]'type="checkbox" name="kmli" id="" />
                    <p>Keep me logged in</p>
                </div>
                <div className="flex items-center my-[5px]">
                    <button className='bg-primary font-normal hover:bg-secondary rounded-sm text-other py-[5px]  me-[10px] px-[25px]'>Sign In</button>
                    <button className='bg-primary font-normal hover:bg-secondary rounded-sm text-other py-[5px]  me-[10px] px-[25px]'onClick={()=>setSignUp(false)}>Create Account</button>
                    <Link className='text-red-500' >Forgot Password?</Link>

                </div>
                <div className="flex my-[5px]">
                    <p className='text-[16px]'>
                        By signing in, I agree to 1864s <Link className='text-red-500'> Terms of Use</Link> and <Link className='text-red-500'>Privacy Policy</Link>
                    </p>
                </div>
            </form>
        </div>
      </div>
      </div>
      :
        <div className='flex flex-col  w-full h-[100vh] bg-[#0F0F0F] '>
        <div className="flex flex-col w-full justify-center py-[24px] h-full">
         <div className="flex my-[5px] w-full max-w-2xl mx-auto h-[900px] rounded-md  mt-[24px] bg-white/90">
            <form action="" method="post" className='w-full h-full p-[24px] flex text-primary flex-col justify-between'>
                <div className="flex flex-col justify-between my-[10px]">
                <h1 className='my-[5px] text-primary text-[42px] font-thin text-center'>Sign Up To Get Started!</h1> 
                <span className='text-[22px] font-thin flex'>Enter your information below to get started</span>

                </div>
               {
                inputs.map((input)=>{
                    return(
                        
                        <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange} />
                    )
                })
               }
                <div className="flex items-center my-[5px]">
                    <button className='bg-primary font-normal hover:bg-secondary rounded-sm text-other disabled py-[5px]  me-[10px] px-[25px] 'type='submit'onClick={handleFormSubmit}  disabled={!isFormValid}>Submit</button>
                    <button className='text-red-500'onClick={()=>setSignUp(true)}>Have an Account ?</button>

                </div>
                <div className="flex my-[5px]">
                    <p className='text-[16px]'>
                        By registering, you agree to 1864's <Link className='text-red-500'> Terms of Use</Link> and <Link className='text-red-500'>Privacy Policy</Link>
                    </p>
                </div>
            </form>
        </div>
      </div>
      </div>
}
</>
  )
}

export default UserAccess