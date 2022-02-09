import React, { useState } from 'react'

import {  
    Box  
    ,Icon,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,FormControl,FormLabel,Input,Button,useDisclosure
} from "@chakra-ui/react"; 

import { FcAddDatabase } from "react-icons/fc";
import Api from '@aws-amplify/api-rest'


const AddButtonPanel=(props)=>{
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()

    const [fname,setFname]=useState("")
    function changeFname(event){
      const val=event.target.value
      setFname(val)
    }
    const [lname,setlname]=useState("")
    function changeLname(event){
      const val=event.target.value
      setlname(val)
    }
    const [uname,setuname]=useState("")
    function changeUname(event){
      const val=event.target.value
      setuname(val)
    }
    const [password,setpassword]=useState("")
    function changepassword(event){
      const val=event.target.value
      setpassword(val)
    }

    const saveUser=async ()=>{
      const data = {
        body: {
          fname: fname,
          lname: lname,
          uname: uname,
          password: password,
          status:"Active"
        }
      };
      const apiData = await Api.post('usersapi', '/users', data);
      console.log({ apiData });
      setFname("")
      setlname("")
      setuname("")
      setpassword("")
      props.setCreateFlag(true)
      onClose()
    }
    return <>
        

        <Box as="button"  bg="transparent" border='0' onClick={onOpen}><Icon as={FcAddDatabase}  h={30} w={30}  /></Box>
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" value={fname} onChange={changeFname} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" value={lname} onChange={changeLname} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>UserName</FormLabel>
              <Input placeholder="UserName" value={uname} onChange={changeUname} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type='password' placeholder="Password" value={password} onChange={changepassword} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="#2B2B2B" mr={3} bg="#2B2B2B" textColor='white' onClick={saveUser} >
              Save
            </Button>
            <Button onClick={onClose} colorScheme="#2B2B2B" bg="#2B2B2B" textColor='white' >Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
}

export default AddButtonPanel