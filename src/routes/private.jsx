import React from 'react';
import { Navigate } from 'react-router-dom';
import { useColorMode, VStack } from "@chakra-ui/react"

import { useAuth } from '../contexts/auth_context';
import Sign_In from './sign_in';
import Navbar from '../components/navbar';


const PrivateRoute = ({ children }) => {

    const { isAuthenticated, loading } = useAuth();

    return (
        <>
            { !loading ?
            
                isAuthenticated ?
                    children
                :
                    <Navigate to='/sign_in' replace />
            
            :

            <Loading />

        }
        </>

    );
};

const Loading = () => {

    const { colorMode } = useColorMode();

    return (
        <VStack 
            w='100vw'
            h='100vh' 
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            
            <Navbar />
        </VStack>
    )
}

export default PrivateRoute;
