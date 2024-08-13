import { Button, VStack, useColorMode, Text } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

import Navbar from "../components/navbar";
import { Loading } from "./private";

import { createCheckoutSession } from "../api/stripe_endpoints";
import { useAuth } from '../contexts/auth_context';
import { useSubscribe } from '../contexts/subscribed_context';

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
   
    const handleSubscription = async () => {

        const checkout_session = await createCheckoutSession();
        window.location.href = checkout_session;
    }

    return (
        <Button onClick={handleSubscription}>
            Subscribe
        </Button>
    );
};

export default Subscribe;