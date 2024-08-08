import { VStack, HStack, Flex, Text, Box, useColorMode, Button, Divider, AbsoluteCenter, FormControl, FormLabel, Input, InputRightElement, InputGroup  } from "@chakra-ui/react"

import { useState } from "react";
import { IoSend, IoEyeOutline, IoEyeOffOutline  } from "react-icons/io5";
import { GrFormNextLink } from "react-icons/gr";
import { login } from "../../api/endpoints";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth_context";


const Sign_In_Form = () => {


    return (
        <Flex 
            w='100%' 
            justifyContent='center'
            >
            <Form_Box />
        </Flex>
    )   
}

const Form_Box = () => {

    const { colorMode } = useColorMode();

    return (
        <Flex 
            w='92%' 
            maxW='600px' 
            p='40px 0'
            minH='500px' 
            bg={colorMode === 'light' ? 'white' : 'rgba(66,66,83,26.67)' }
            transition="background-color 0.3s ease-in-out"
            borderRadius='10px'
            mt='18px'
            boxShadow={colorMode === 'light' ? '0px 2px 25px 0px #F1F1F1' : '0px' }
            justifyContent='center'
            
            >
                <VStack w='80%' gap='40px'>
                    <Google_Sign_In />
                    <Form_Divider />
                    <Form />
                </VStack>
            
        </Flex>
    )
}

const Form_Divider = () => {

    const { colorMode } = useColorMode();

    return (
        <Box w='100%' position='relative' color={colorMode === 'light' ? 'gray.700' : 'gray.400'}  >
            <Divider />
            <AbsoluteCenter 
                className='rubik'
                fontSize='15px'
                bg={colorMode === 'light' ? 'white' : 'rgba(66,66,83,26.67)' } 
                px='4'
                
                >
                OR
            </AbsoluteCenter>
      </Box>
    );
  };

const Google_Sign_In = () => {
    return (
        <VStack w='100%'>
            <Google_Button />
        </VStack>
    )
}

const Google_Button = () => {

    const { colorMode } = useColorMode();

    return (
        <Button
            bg={'white'}
            _hover={{bg: '#F1F1F1'}}
            border={ colorMode === 'light' ? '1px solid' : 'none'}
            borderColor='gray.400'
            w='100%'
            h='46px'
            borderRadius='8px'
        >
            <HStack gap='20px'>
               
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
 
                <Text
                    className="rubik"
                    fontSize={{base: '13px',md:'14px'}}
                    color={'gray.700'}
                >
                    SIGN IN WITH GOOGLE
                </Text>
            </HStack>
        </Button>
    )
}

const Form = () => {

    const nav = useNavigate();
    const { colorMode } = useColorMode();

    const {login_client} = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        
        const login_response = await login(email, password);

        if (login_response['status'] == 200) {
            await login_client()
            nav('/menu')
        } else {
            alert('error')
        }
        
    }

    return (
        <VStack w='100%' gap='30px'>
            <FormControl color={colorMode === 'light' ? 'gray.700' : 'gray.400'} >
                <FormLabel
                    fontSize='14px'
                >
                    Email
                </FormLabel>
                <Input onChange={(e) => setEmail(e.target.value)} value={email} h='46px' borderColor='gray.400' type='email' placeholder='gym@bro.com' />
            </FormControl>

            <Password_Field password={password} setPassword={setPassword} />

            <Button
            onClick={handleSignIn}
            mt='20px'
            _hover={{bg:'blue.300'}}
            bg='blue.400'
            w='100%'
            h='46px'
        >
            <Text
                color='white'
                className="rubik"
                fontSize='14px'
                sx={{ wordSpacing: '3px' }}
            >
                
                <HStack gap='6px'>
                    <Text>
                        SIGN IN
                    </Text>
                    <GrFormNextLink size='22px' />
                </HStack>
            </Text>
        </Button>
            
        </VStack>
    )
}

const Password_Field = ({setPassword, password}) => {

    const { colorMode } = useColorMode();

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
       

        <FormControl color={colorMode === 'light' ? 'gray.700' : 'gray.400'} >

            <FormLabel
                fontSize='14px'
            >
                Password
            </FormLabel>
            
            <InputGroup >
                <Input
                    onChange={(e) => setPassword(e.target.value)} value={password}
                    pr='60px'
                    type={show ? 'text' : 'password'}
                    borderColor='gray.400'
                    h='46px'
                />
                <InputRightElement h='100%' pr='20px'>
                    <Box color={colorMode === 'light' ? 'gray.700' : 'gray.400'} onClick={handleClick} cursor='pointer'>
                    { 
                        show ?

                        <IoEyeOutline size='22px'/>

                     : 
                     
                        <IoEyeOffOutline size='22px' />
                     
                     }
                    </Box>
                </InputRightElement>
            </InputGroup>

        </FormControl>
    )
}

export default Sign_In_Form;