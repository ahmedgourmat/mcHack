import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import axios from 'axios'

function DocsTable() {

    const [data , setData] = useState([])

    useEffect(()=>{
        const fetchingData = async()=>{
            await axios.get('http://localhost:8080/api/docs')
            .then((res)=>{
                setData(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        fetchingData()
    },[])


    return (
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Type</Th>
                        <Th>Size</Th>
                        <Th>Adding date</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {
                    data.map((elem)=>(
                        <Tr>
                            <Td>{elem.originalname}</Td>
                            <Td>{elem.type}</Td>
                            <Td>{elem.size}</Td>
                            <Td>{elem.createdAt.split('T')[0]}</Td>
                        </Tr>
                    ))
                } 
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default DocsTable
