import { Box, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logoauth from '../assets/logoauth.png'

function AuthSideBar() {
  return (
    <Box
      bg='#2870C5'
      h={{base : '300px' , md : '300px' , lg : '100vh'}}
      w={{base : '100%' , md : '100%' , lg : '500px'}}
      display='flex'
      flexDir='column'
      alignItems='center'
      gap={{base : '10px' , md : '10px' , lg:'50px'}}
      p='40px'
      pt={{base : '10px' , md : '20px' , lg:'150px'}}
      position='relative'
      overflow='hidden'
      justifyContent={{base : 'center' , md : 'center' , lg:'flex-start'}}
    >

      <Box
        width='150%'
        position='absolute'
        top='30%'
        left='-30%'
        bg='#2C6BBC'
        h='480px'
        borderRadius='120% 90% 120% 90%'
      >
      </Box>
      <Image
        width={{base : '100px' , md:'200px' , lg : '300cd ..px'}}
        height={{base : '50px' , md:'100px' , lg : '150px'}}
        src={logoauth}
        alt='Dan Abramov'
        zIndex='999'
      />
      <Text
        textAlign='center'
        fontSize='1.1em'
        color='#FDFDFD'
        zIndex='999'
      >
        Discover the future of document management. Effortless organization, seamless collaboration
      </Text>
    </Box>
  )
}

export default AuthSideBar
