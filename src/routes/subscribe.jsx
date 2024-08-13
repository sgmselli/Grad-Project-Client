import { Button, VStack, useColorMode, Text, Flex, Box, HStack } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

import Navbar from "../components/navbar";
import { Loading } from "./private";

import { createCheckoutSession } from "../api/stripe_endpoints";
import { useAuth } from '../contexts/auth_context';
import { useSubscribe } from '../contexts/subscribed_context';
import { SiTicktick } from "react-icons/si";

import { logout } from "../api/endpoints";

const Subscribe = () => {

    const { colorMode } = useColorMode();

    const { isAuthenticated, loading } = useAuth();
    const { isSubscribed, loadingSubscribed} = useSubscribe();

    return (

        <>
            { (!loading & !loadingSubscribed) ?

                (isAuthenticated) ?
                    isSubscribed ?
                        <Navigate to='/menu' replace />
                    :
                        <VStack 
                        w='100vw'
                        minH='100vh' 
                        bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
                        >
                            <Navbar />
                            <SubscribeBody />
                        </VStack>
                :

                    <Navigate to='/' replace />
            
            :

            <Loading />

        }
        </>

        
    )
}

const SubscribeBody = () => {

    return (
        <VStack w='92%' maxW='600px' pb='50px'>
            <Box mt={{base:'16px', md:'30px'}} w='100%'>
                <SubscribeTitle />
            </Box>
            <Box mt={{base:'30px', md:'45px'}} w='100%'>
                <SubscribeCard />
            </Box>
            <Box mt={{base:'5px', md:'20px'}} w='100%'>
                <BackHome />
            </Box>
        </VStack>
    );
};

const SubscribeTitle = () => {

    const { colorMode } = useColorMode();

    return (
        <Flex flexDir={{base:'column', md:'row'}} textAlign='center' lineHeight='34px' w='100%' justifyContent='center' className="rubik-bold" fontSize={{base:'32px', md:'36px'}} gap={{base:'4px', md:'6px'}}>
            <Text whiteSpace='nowrap' color={colorMode === 'light' ? 'gray.700' : 'gray.300'}>
                Unlock new
            </Text>
            <Text whiteSpace='nowrap' color='blue.400'>
                strength gains
            </Text>
        </Flex>
    )
}

const SubscribeCard = () => {

    const { colorMode } = useColorMode();

    return (
        <Flex 
            w='100%' 
            maxW='600px' 
            p='40px 40px 60px 40px'
            minH='500px' 
            bg={colorMode === 'light' ? 'white' : 'rgba(66,66,83,26.67)' }
            transition="background-color 0.3s ease-in-out"
            borderRadius='10px'
            boxShadow={colorMode === 'light' ? '0px 2px 25px 0px #F1F1F1' : '0px' }
            justifyContent='center'
            
            >
                <VStack w='100%'>
                    <HStack w='100%' className="rubik-medium" justifyContent='center' alignItems='end' color={colorMode === 'light' ? 'gray.700' : 'gray.300'}>
                        <Text fontSize={{base:'36px', md:'48px'}} >£4.99</Text>
                        <Text fontSize={{base:'14px', md:'16px'}} pb={{base: '8px',md:'12px'}}>/month</Text>
                    </HStack>
                    <Box mt='15px' w='100%'>
                        <SubscribeButton />
                    </Box>
                    <Box w='100%' mt={{base:'30px', md:'45px'}}>
                        <Points />
                    </Box>
                </VStack>
        </Flex>
    )
}

const SubscribeButton = () => {
    const handleSubscription = async () => {

        const checkout_session = await createCheckoutSession();
        window.location.href = checkout_session;
    }

    return (
        <VStack w='100%' textAlign='center'>
            <Button w='100%' color='white' bg='blue.400' h='48px' _hover={{bg:'blue.300'}} onClick={handleSubscription} className="rubik" fontSize={{base:'13px', md:'15px'}}>
                Start Subscription
            </Button>
            <Text color='gray.400' fontSize={{base:'10px', md:'11px'}}>Powered By Stripe</Text>
            
        </VStack>
        
    );
}

const Points = () => {

    const points = ['Full access to the Lift&Log application', 
        'Create unlimited custom workouts', 
        'Create unlimited custom exercises', 
        'Plan future workouts', 
        'Keep track of all your planned & completed workouts',
        'Join 5000+ happy users'
    
    ]

    return (
        <VStack w='100%' gap='24px'>
            {points.map((point) => {
                return (
                    <HStack fontSize={{base:'14px', md:'16px'}} w='100%' gap='15px'>
                        <SiTicktick />
                        <Text>{point}</Text>
                    </HStack>
                )
            })}
        </VStack>
    )
}

const BackHome = () => {

    const nav = useNavigate();

    const { colorMode } = useColorMode();

    const {logout_client} = useAuth()

    const handleLogout = async () => {
        await logout()
        await logout_client();
        nav('/');
    }

    return (
        <HStack w='100%' justifyContent='center' color={colorMode === 'light' ? 'gray.700' : 'gray.400'} fontSize={{base:'14px', md:'16px'}}>
            <Text>
                Want to change account?
            </Text>
            <Button fontSize={{base:'14px', md:'16px'}} _hover={{'bg':'none'}} color={colorMode === 'light' ? 'gray.700' : 'gray.400'} fontWeight='normal' p='0' variant='ghost' tabIndex={0} textDecoration='underline' pointer='cursor' onClick={handleLogout} cursor='pointer'>
                Logout
            </Button>
        </HStack>
    )
}

export default Subscribe;