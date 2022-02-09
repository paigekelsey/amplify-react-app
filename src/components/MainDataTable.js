import React, { useEffect, useState,useContext } from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"

  
  import Api from '@aws-amplify/api-rest'

  import CreatedCntxt from '../contexts/createdContext'

  


const MainDataTable=(props)=>{

    const [userData,setUsers]=useState([])
    const createCntxt=useContext(CreatedCntxt)

    useEffect(()=>{
      async function fetchUsers() {
        const userData = await Api.get('usersapi', '/users');
        return userData.data.Items
      }

      fetchUsers().then((out)=>{
        console.log(out)
        setUsers(out)
        createCntxt[1](false)
      })
      
    },[createCntxt[0]])

    // useEffe
    return <Table variant="striped" colorScheme="facebook" bg="#A7BBC7">
    <TableCaption>User List</TableCaption>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>UserName</Th>
        <Th>First Name</Th>
        <Th>Last Name</Th>
        <Th>Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      {userData.map((row)=><Tr>
        <Td>{row.id}</Td>
        <Td>{row.uname}</Td>
        <Td>{row.fname}</Td>
        <Td>{row.lname}</Td>
        <Td>{row.status}</Td>
      </Tr>)}
    </Tbody>
   
  </Table>
}

export default MainDataTable