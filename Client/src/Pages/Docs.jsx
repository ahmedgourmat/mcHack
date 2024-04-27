import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import DocsTable from '../Components/DocsTable'
import FilterDocs from '../Components/FilterDocs'
import DragDrop from '../Components/DragDrop'

function Docs() {
    return (
        <Box
            display='flex'
            w='100%'
        >
            <Box
                minH='100vh'
                flex='2'
                p='50px'   
                borderLeft='2px solid grey' 
                borderRight='2px solid grey' 
            >
                <Box>
                    <Text>
                        Upload files
                    </Text>
                    <DragDrop/>
                </Box>
                <Box>
                    <Text
                        fontSize='2xl'
                    >
                        Document history
                    </Text>
                    <DocsTable />
                </Box>
            </Box>
            <FilterDocs/>
        </Box >
    )
}

export default Docs
