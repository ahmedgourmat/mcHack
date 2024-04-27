import { Box, Button, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'

function FilterDocs() {
    return (
        <Box
            h='100vh'
            flex='1'
            p='50px'
            display='flex'
            flexDir='column'
            gap='30px'
        >
            <Box>
                <Text
                    fontSize='2xl'
                    color='grey'
                    fontWeight='500'
                >
                    Filter
                </Text>
                <Text color='grey'>
                    Filter the documents
                </Text>
                </Box>
            <Box
                display='flex'
                flexDir='column'
                alignItems='center'
                gap='10px'
            >
                <FormControl>
                    <FormLabel>Docs Format</FormLabel>
                    <Select>
                        <option value='option1'>All</option>
                        <option value='option1'>Pdf</option>
                        <option value='option2'>Word</option>
                        <option value='option3'>Excel</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input type='text' />
                </FormControl>
                <FormControl>
                    <FormLabel>Adding date</FormLabel>
                    <Input type='date' />
                </FormControl>
                <FormControl>
                    <FormLabel>File size</FormLabel>
                    <Input type='number' />
                </FormControl>
                <Button
                    w='100%'
                    colorScheme='blue'
                >
                    Search
                </Button>
            </Box>
        </Box>
    )
}

export default FilterDocs
