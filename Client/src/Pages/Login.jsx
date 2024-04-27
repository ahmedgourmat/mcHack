import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import AuthSideBar from '../Components/AuthSideBar'
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

function Login() {

  const navigate = useNavigate()

  const [values, setValues] = useState({
    email: '',
    password: ''
  })


  const submitHandler = async () => {


    await axios.post('http://localhost:8080/api/user/login', values)
      .then((res) => {
        toast.success('Welcome Again !!')
        localStorage.setItem('user', JSON.stringify(res.data))
        setValues({
          email: '',
          password: ''
        })
        navigate('/Home')
      })
      .catch((err) => {
        toast.error(err.response.data.error)
      })

  }

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <Box
      display='flex'
      flexDir={{ base: 'column-reverse', md: 'column-reverse', lg: 'row' }}
      h={{ base: '100vh' }}
    >
      <AuthSideBar />
      <Box
        display='flex'
        flexDir='column'
        height='100vh'
        gap={{ base: '10px', md: '10px', lg: '50px' }}
        p={{ base: '50px', md: '50px 200px', lg: '100px 200px' }}
        flex='1'
      >
        <Box>
          <Text
            fontSize='2.5em'
            fontWeight='500'
            color='#0E0E0E'
          >Login</Text>
          <Text
            color='grey'
          >Connect to your account</Text>
        </Box>
        <Box
          display='flex'
          flexDir='column'
          alignItems='center'
          gap='20px'

        >
          <FormControl isRequired>
            <FormLabel>E-mail : </FormLabel>
            <Input type='email' placeholder='E-mail' name='email' value={values.email} onChange={changeHandler} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password : </FormLabel>
            <Input type='password' placeholder='Password' name='password' value={values.password} onChange={changeHandler} />
          </FormControl>
          <Button
            colorScheme='blue'
            w='100%'
            onClick={submitHandler}
          >Login</Button>
        </Box>
        <ChakraLink as={ReactRouterLink} to='/signup'>
          <Text
            color='grey'
          >Create account</Text>
        </ChakraLink>
      </Box>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </Box>
  )
}

export default Login
