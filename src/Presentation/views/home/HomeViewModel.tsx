import React, { useState } from 'react'

export const HomeViewModel = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = (property: string, value: any) =>{
    //destructurando valores
    setValues({...values, [property]: value})
  }

  return {
    ...values,
    onChange
  }
}

export default HomeViewModel

