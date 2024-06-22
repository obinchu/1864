import React, { useState } from 'react'
import Formcss from './forms.module.css'
const FormInput = (props) => {
    const {label,id,erroMessage,onChange, ...inputprops}= props
    const [focused,setFocused] = useState(false)
  const handlefocus = (e)=>{
    setFocused(true)
  }

  return (
     <div className="flex flex-col w-full justify-between">
        <label className='text-[16px]' htmlFor="name" >{label}</label>
        <input className='p-[7px] my-[5px] bg-primary/10 rounded-sm outline-none'
        {...Formcss.input} {...inputprops} onChange={onChange} onBlur={handlefocus} focused={focused.toString()} onFocus={()=>inputprops=="confirmpassword" && setFocused(true)}/>
        <span className='text-[14px] text-red-600 '{...Formcss.span}>{erroMessage}</span>
    </div>
  )
}

export default FormInput