import React, { useState,useDisclosure, useContext } from "react";  
import {  
    Box,  
    Heading,  
    Flex,  
    Link,
    Spacer,
    Button  
} from "@chakra-ui/react";  

import { FcConferenceCall,FcDataConfiguration,FcDeleteDatabase } from "react-icons/fc";

import AddButtonPanel from './AddButtonPanel'

import CreatedCntxt from '../contexts/createdContext'
  
const MenuItems = ({ children }) => (  
    <Link mt={{ base: 4, md: 0 }} mr={6} display="block">  
        {children}  
    </Link>  
);  
  
const Navbar = props => {  

    const [toggleLoginBox,setToggleLoginBox]=useState(false)
    const createCntxt=useContext(CreatedCntxt)

    function loginFunction(){
        props.loginToggle(true)
    }

    function logOutFunction(){
        props.loginToggle(false)
    }
    

  
    return (  
        <Flex  
            as="nav"  
            align="center"  
            justify="space-between"  
            wrap="wrap"  
            padding="1rem"  
            bg="#393E46"  
            color="#BBBFCA"  
            borderBottom="1px solid black"  
            {...props}  
        >  
           
            <AddButtonPanel setCreateFlag={createCntxt[1]} />
            
        </Flex>  
    );  
};  
  
export default Navbar;  