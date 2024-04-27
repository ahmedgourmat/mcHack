import React from 'react'
import { Button,Select, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Input, Stack, Text } from '@chakra-ui/react'

function Filter() {
    return (
        <div>
            <Card maxW='sm' width='500px'>
                <CardBody>

                    <Stack spacing='3'>
                        <Heading size='md' color='#707070'>Filter</Heading>
                        <Text color='#A2B5B3'>
                            Filter the schedules
                        </Text>

                        <div className='p-12'>
                            <p className='mb-2'>Sessions</p>
                            <Select placeholder='Select option' mb='8'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                            <p className='mb-2'>Title</p>
                            <Select placeholder='Select option' mb='8'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                            <p className='mb-2'>Creation date</p>
                            <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
                        </div>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button variant='solid' colorScheme='blue' mr='4'>
                        Apply      </Button>
                    <Button variant='ghost' colorScheme='blue' color='#A2B5B3'>
                        Reset      </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Filter
