import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Select } from '@chakra-ui/react'

const FilterClient = () => {
  return (
    <div>
        <Card maxW='sm' width='500px' height='100hv'>
  <CardBody>

    <Stack  spacing='3'>
      <Heading size='md' color='#707070'>Filter</Heading>
      <Text color='#A2B5B3'>
      Filter the schedules 
      </Text>

    <div className='p-12'>
    <p className='mb-2'>Clients</p>
      <Select placeholder='Select option' mb='8'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
<p className='mb-2'>Description</p>
<Input placeholder='PDf' size='md' mb='8'/>
<p className='mb-2'>Duration</p>
<Input placeholder='1 day' size='md' mb='8'/>
<p className='mb-2'>Title</p>
<Input placeholder='Only iif you choose to send a form' size='md' />
</div>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
      <Button variant='solid' colorScheme='blue' width='400%' >
Send      </Button>
  </CardFooter>
</Card>
    </div>
  )
}

export default FilterClient
