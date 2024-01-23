import React, { useState } from 'react'

export const RegisterViewModel = () => {
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        confirPassword: '',
      });
    
      const onChange = (property: string, value: any) =>{
        //destructurando valores
        setValues({...values, [property]: value})
      }

      const register  = () =>{
        console.log(JSON.stringify(values));
      }
    
      return {
        ...values,
        onChange,
        register
      }
}

export default RegisterViewModel;
