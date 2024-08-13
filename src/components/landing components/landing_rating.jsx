import { HStack, VStack, Box, Avatar, Flex, Text, useColorMode } from '@chakra-ui/react';

import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const LandingRating = () => {
    return (
        <VStack w='100%' gap='22px'>
            <Flex w='100%' h='50px' justifyContent='center' alignItems='center'>
                <AvatarList />
            </Flex>
            <Box w='100%'>
                <StarRating />
            </Box>
        </VStack>
    )
}

const AvatarList = () => {

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
                    <AvatarItem
                        key={index}
                        name={avatar.name}
                        src={avatar.src}
                        index={index}
                    />
                ))}
        </Flex>
    )
}

const AvatarItem = ({name, src, index}) => {

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

const StarRating = () => {
    return (
        <VStack w='100%' gap='16px'>
            <StarList />
            <RatingText />
        </VStack>
    )
}

const RatingText = () => {

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

const StarList = () => {

    const stars = ['full', 'full', 'full', 'full', 'half']

    return (
        <HStack gap='5px'>
            {stars.map((star) => {
                return (
                    <Box color='#FFD700'>
                        <StarFactory star={star} />
                    </Box>
            )
            })}
            
        </HStack>
    )
}

const StarFactory = ({star}) => {
    if (star === 'full') {
        return <FullStar />
    } else if (star === 'half') {
        return <HalfStar />
    } else if (star === 'empty') {
        return <EmptyStar />
    }
}

const FullStar = () => {
    return <FaStar size='24px' />
}

const HalfStar = () => {
    return <FaRegStarHalfStroke size='24px' />
}

const EmptyStar = () => {
    return <FaRegStar size='24px' />
}

export default LandingRating;