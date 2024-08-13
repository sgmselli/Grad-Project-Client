import { Button, useColorMode, VStack, Text, Box} from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'

import { useState, useEffect } from "react";

import Navbar from "../components/navbar"
import Workout_Body from "../components/workout components/workout_body";
import { useSubscribe } from "../contexts/subscribed_context";
import { cancel_unsubscribe, check_cancellation, unsubscribe } from "../api/stripe_endpoints";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth_context";
import { logout } from "../api/endpoints";

const Settings = () => {

    const { colorMode } = useColorMode();

    return (
        <VStack 
            w='100vw'
            minH='100vh' 
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            <Navbar />
            <SettingsBody />

        </VStack>
    )
}

const SubHeading = ({title}) => {

    const { colorMode } = useColorMode();

    return (
        <Text
            className="rubik-medium"
            color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
            fontSize={{base:'24px', md:'26px'}}
        >
            {title}
        </Text>
    )
}

const SettingsBody = () => {

    const [loading, setLoading] = useState(true)
    const [cancelling, setCancelling] = useState(false);
    const [date, setDate] = useState();

    useEffect(() => {

        const formatUnixTimestamp = (timestamp) => {
            if (!timestamp) return '';
            const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
            const options = { day: '2-digit', month: 'long', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-GB', options); // Use 'en-GB' to get day first
            return formattedDate.replace(/, /g, ' '); // Replace the comma and space with just a space
        };

        const fetchBilling = async () => {
            const subscription = await check_cancellation();
            if (subscription.cancel_at !== null) {
                setCancelling(true)
                setDate(formatUnixTimestamp(subscription.cancel_at))
            } else {
                setDate(formatUnixTimestamp(subscription.current_period_end))
            }
            setLoading(false)
        }
        fetchBilling();

    }, [])

    return (
        <VStack mt='30px' w='92%' maxW='600px'>
            <Box w='100%'>
                <NextBilling loading={loading} cancelling={cancelling} date={date}/>
            </Box>
            <VStack gap='20px' mt='50px' alignItems={{base:'center', md:'start' }} w='100%'>
                <SubHeading title={'Logout'} />
                <Logout />
            </VStack>
            <VStack gap='20px' mt='40px' alignItems={{base:'center', md:'start' }} w='100%'>
                <SubHeading title={'Subscription'} />
                <Unsubscribe setCancelling={setCancelling} cancelling={cancelling} />
            </VStack>
        </VStack>
    )
}

const NextBilling =  ({loading, cancelling, date}) => {
    if (loading) {
        return (<></>)
    }

    if (cancelling) {
        return (
            <VStack w='100%' bg='red.400' color='white' textAlign='center' className="rubik-medium" p='20px 0' borderRadius='8px'>
                <Text fontSize={{base: '15px', md: '16px'}}>Subscription ending</Text>
                <Text fontSize={{base: '19px', md: '22px'}}>{date}</Text>
            </VStack>
        )
    } else {
        return (
            <VStack w='100%' bg='blue.400' color='white' textAlign='center' className="rubik-medium" p='20px 0' borderRadius='8px'>
                <Text fontSize={{base: '15px', md: '16px'}}>Next billing</Text>
                <Text fontSize={{base: '19px', md: '22px'}}>{date}</Text>
            </VStack>
        )
    }

}

const Unsubscribe = ({cancelling, setCancelling}) => {

    const { unsubscribe_client, subscribe_client } = useSubscribe();

    const handleUnsubscribe = async () => {
        const unsubscribe_response = await unsubscribe();
        if (unsubscribe_response.ok) {
            unsubscribe_client();
        } 
        setCancelling(!cancelling)
    }

    const handleCancel = async () => {
        const cancel_response = await cancel_unsubscribe();
        subscribe_client();
        setCancelling(!cancelling)
    }

    return (
        <VStack>

            {cancelling ?
                <SettingsModal settingsFunction={handleCancel} title={'Undo Cancellation'} color='blue.400' focusColor='blue.300' text={"We're thrilled to have you back! Undo your subscription cancellation"} />
            :
                <SettingsModal settingsFunction={handleUnsubscribe} title={'Cancel Subscription'} color='red.400' focusColor='red.300' text={"Are you sure you want to cancel your subscription?"}/>
            }
            
        </VStack>
    )
}

const Logout = () => {
    const nav = useNavigate();
    const { logout_client } = useAuth();

    const handleLogout = async () => {
        await logout();
        logout_client();
        nav('/')
    }

    return (
        <VStack>
            <SettingsModal settingsFunction={handleLogout} title={'Logout'} color='red.400' focusColor='red.300' text={"Are you sure you want to logout your account?"} />
        </VStack>
    )
}

const SettingsModal = ({settingsFunction, title, color, focusColor, text}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        settingsFunction();
        onClose();
    }

    return (
        <>
        <Button color='white' bg={color} _hover={{bg:focusColor}} onClick={onOpen}>
            {title}
        </Button>
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text>{text}</Text>
            </ModalBody>
            <ModalFooter>
                <Button mr={3} onClick={onClose}>
                Close
                </Button>
                <Button color='white' onClick={handleClick} bg={color} _hover={{bg:focusColor}}>{title}</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
          
}

export default Settings;