import { HStack, VStack, Box, Avatar, Flex, Text, useColorMode } from '@chakra-ui/react';

import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Landing_Rating = () => {
    return (
        <VStack w='100%' gap='22px'>
            <Flex w='100%' h='50px' justifyContent='center' alignItems='center'>
                <Avatar_List />
            </Flex>
            <Box w='100%'>
                <Star_Rating />
            </Box>
        </VStack>
    )
}

const Avatar_List = () => {

    const avatars = [
        { name: 'User 1', src: '/images/profile-picture1.jpg' },
        { name: 'User 2', src: '/images/profile-picture2.jpg' },
        { name: 'User 3', src: '/images/profile-picture3.jpg' },
        { name: 'User 4', src: '/images/profile-picture4.jpg' },
        { name: 'User 5', src: '/images/profile-picture5.jpg' },
    ];

    return (
        <Flex w='fit-content' justifyContent="center" alignItems='center' position='relative' left='40px'>
                {avatars.map((avatar, index) => (
                    <Avatar_Item
                        key={index}
                        name={avatar.name}
                        src={avatar.src}
                        index={index}
                    />
                ))}
        </Flex>
    )
}

const Avatar_Item = ({name, src, index}) => {

    const { colorMode } = useColorMode()

    return (
        <Flex 
            w='55px' 
            h='55px' 
            bg={colorMode === 'light' ? 'white' : 'rgba(66,66,83,26.67)' }
            borderRadius={500}
            justifyContent='center'
            alignItems='center'
            position="relative"
            left={`-${index * 20}px`} 
            display='flex'     /* Center the text inside */
            justify-content= 'center'/* Center text horizontally */
            align-items= 'center'
        >
            <Avatar
                name={name}
                src={src}
                h="45px"
                w='45px' 
            />
        </Flex>
    )
}

const Star_Rating = () => {
    return (
        <VStack w='100%' gap='16px'>
            <Star_List />
            <Rating_Text />
        </VStack>
    )
}

const Rating_Text = () => {

    const { colorMode } = useColorMode()

    return (
        <HStack fontSize='14px' gap='4px' color={colorMode === 'light' ? 'gray.700' : 'gray.300'} sx={{ wordSpacing: '1px' }}>
            <Text fontWeight='bold'>
                4.5/5 stars
            </Text>
            <Text fontWeight='medium'>
                from 36 lifters!
            </Text>
        </HStack>
    )
}

const Star_List = () => {

    const stars = ['full', 'full', 'full', 'full', 'half']

    return (
        <HStack gap='5px'>
            {stars.map((star) => {
                return (
                    <Box color='#FFD700'>
                        <Star_Factory star={star} />
                    </Box>
            )
            })}
            
        </HStack>
    )
}

const Star_Factory = ({star}) => {
    if (star == 'full') {
        return <Full_Star />
    } else if (star == 'half') {
        return <Half_Star />
    } else if (star == 'empty') {
        return <Empty_Star />
    }
}

const Full_Star = () => {
    return <FaStar size='24px' />
}

const Half_Star = () => {
    return <FaRegStarHalfStroke size='24px' />
}

const Empty_Star = () => {
    return <FaRegStar size='24px' />
}

export default Landing_Rating;