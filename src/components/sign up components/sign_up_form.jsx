import { VStack, HStack, Flex, Text, Box, useColorMode, Button, FormControl, FormLabel, Input, InputRightElement, InputGroup  } from "@chakra-ui/react"

import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline  } from "react-icons/io5";
import { GrFormNextLink } from "react-icons/gr";
import { register } from "../../api/endpoints";
import { useNavigate } from "react-router-dom";

import { useToast } from '@chakra-ui/react'


const SignUpForm = () => {
    return (
        <Flex 
            w='100%' 
            justifyContent='center'
            >
            <FormBox />
        </Flex>
    )   
}

const FormBox = () => {

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
            boxShadow={colorMode === 'light' ? '0px 2px 25px 0px #F1F1F1' : '0px' }
            justifyContent='center'
            
            >
                <VStack w='80%' gap='40px'>
                    <Form />
                </VStack>
            
        </Flex>
    )
}



const Form = () => {

    const nav = useNavigate();
    const { colorMode } = useColorMode();

    const toast = useToast();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validate = () => {
        return name.trim() !== '' && email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '';
    }

    const handleSignUp = async () => {

        if (validate()) {
            if (password === confirmPassword) {
                const register_response = await register(name, email, password, confirmPassword);
                if (register_response['status'] === 201) {
                    await nav('/sign_in')
                    toast({
                        position:'top',
                        color:'white',
                        title: 'Registration success.',
                        description: "Your account was successfully created",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                      })
                }

            } else {
                toast({
                    position:'top',
                    color:'white',
                    title: 'Registration error.',
                    description: "Make sure password & confirmation password match.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
          
            }
        } else {
            toast({
                position:'top',
                color:'white',
                title: 'Registration error.',
                description: "Make sure all fields are not blank",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        
    }

    return (
        <VStack w='100%' gap='30px'>

            <FormControl color={colorMode === 'light' ? 'gray.700' : 'gray.300'} >
                <FormLabel
                    fontSize='14px'
                >
                    Name
                </FormLabel>
                <Input onChange={(e) => setName(e.target.value)} value={name} h='46px' borderColor='gray.400' type='email' placeholder='Gym Bro' />
            </FormControl>

            <FormControl color={colorMode === 'light' ? 'gray.700' : 'gray.300'} >
                <FormLabel
                    fontSize='14px'
                >
                    Email
                </FormLabel>
                <Input onChange={(e) => setEmail(e.target.value)} value={email} h='46px' borderColor='gray.400' type='email' placeholder='gym@bro.com' />
            </FormControl>

            <PasswordField password={password} setPassword={setPassword} title={'Password'} />

            <PasswordField password={confirmPassword} setPassword={setConfirmPassword} title={'Confirm Password'}/>

            <Button
            onClick={handleSignUp}
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
                        SIGN UP
                    </Text>
                    <GrFormNextLink size='22px' />
                </HStack>
            </Text>
        </Button>
            
        </VStack>
    )
}

const PasswordField = ({setPassword, password, title}) => {

    const { colorMode } = useColorMode();

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
       

        <FormControl color={colorMode === 'light' ? 'gray.700' : 'gray.300'} >

            <FormLabel
                fontSize='14px'
            >
                {title}
            </FormLabel>
            
            <InputGroup >
                <Input
                    onChange={(e) => setPassword(e.target.value)} value={password}
                    pr='60px'
                    type={show ? 'text' : 'password'}
                    borderColor='gray.400'
                    h='46px'
                />

                {
                    title === 'Password' && (
                        <InputRightElement h='100%' pr='20px'>
                            <Box color={colorMode === 'light' ? 'gray.700' : 'gray.300'} onClick={handleClick} cursor='pointer'>
                            { 
                                show ?

                                <IoEyeOutline size='22px'/>

                            : 
                            
                                <IoEyeOffOutline size='22px' />
                            
                            }
                            </Box>
                        </InputRightElement>
                    )

                }
                
            </InputGroup>

        </FormControl>
    )
}

export default SignUpForm;