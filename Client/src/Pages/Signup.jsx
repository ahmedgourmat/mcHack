import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import AuthSideBar from '../Components/AuthSideBar';
import axios from 'axios';

function Signup() {

  const [values ,setValues] = useState({
    name :'',
    email : '', 
    password : '',
    confirmPassword : ''
  })

  const submitHandler = async()=>{


    await axios.post('http://localhost:8080/api/user/signup' , values)
    .then((res)=>{
      toast.success('Welcome Again !!')
      localStorage.setItem('user', JSON.stringify(res.data))
      setValues({
        name :'',
        email : '', 
        password : '',
        confirmPassword : ''
      })
      navigate('/Home')
    })
    .catch((err)=>{
      toast.error(err.response.data.error)
    })

  }

  const changeHandler = (e)=>{
    setValues({...values , [e.target.name] : e.target.value})
  }

  return (
    <Box
      display='flex'
      flexDir={{ base: 'column-reverse', md: 'column-reverse', lg: 'row' }}
      justifyItems={{ base: 'flex-start', md: 'center', lg: 'center' }}
      h={{ base: '100%', md: '100vh', lg: '100vh' }}
    >
      <AuthSideBar />
      <Box
        display='flex'
        flex='1'
        flexDir='column'
        minHeight='100vh' 
        width={{ base: '100%', md: '50%', lg: '50%' }} 
        p={{ base: '5px', md: '5px 50px', lg: '5px 200px' }}
        justifyContent='center' 
      >
        <Box
          mb='5px'
        >
          <Text fontSize='2em' fontWeight='500' color='#0E0E0E'>Sign up</Text>
          <Text color='grey'>Create your account</Text>
        </Box>
        <Box
          display='flex'
          flexDir='column'
          alignItems='center'
          gap='5px'
          width='100%' 
        >
          <FormControl isRequired>
            <FormLabel>UserName</FormLabel>
            <Input type='text' placeholder='UserName'  name='name' value={values.name} onChange={changeHandler} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input type='email' placeholder='E-mail' name='email' value={values.email} onChange={changeHandler}  />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='Password' name='password' value={values.password} onChange={changeHandler} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Confirm password</FormLabel>
            <Input type='password' placeholder='Confirm password'  name='confirmPassword' value={values.confirmPassword} onChange={changeHandler} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Company code</FormLabel>
            <Input placeholder='Company code' />
          </FormControl>
          <Button
            colorScheme='blue'
            w='100%'
            onClick={submitHandler}
          >Sign up</Button>
          <Text
            color='grey'
            fontSize='0.9em'
          >by signing up, you acknowledge and agree to Docuvault General terms of use and Privacy Policy.</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
