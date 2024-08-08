import { Flex, HStack, VStack, Box, Text, Image, useColorMode } from '@chakra-ui/react';
import { TiTick } from "react-icons/ti";

import { useState, useEffect } from 'react'

const Landing_Workout_Example = () => {
    return (
        <VStack  w='100%' justifyContent='center' gap='0' >
            <Flex w='92%' maxW='600px' justifyContent='end'>
                <Helper_Text/>
            </Flex>
            <Workout_Box />
        </VStack>
    )
}

const Workout_Box = () => {

    const { colorMode } = useColorMode()

    const [workout_id, setWorkoutId] = useState(0);
    const [clicked, setClicked] = useState(false);

    const workouts = ['Push Day 💪', 'Pull Day 🏋️‍♂️', 'Leg Day 🦵', 'Upper Body 😈', 'Full Body 🤮']

    useEffect(() => {

    })

    const complete_workout = () => {
        setClicked(true);

        setTimeout(() => {
            if (workout_id == workouts.length-1)
                setWorkoutId(0);
            else {
                setWorkoutId(workout_id+1);
            }
            setClicked(false);
        }, 300); 
    }

    return (
        <Flex 
            w='92%' 
            maxW='600px' 
            h='84px' 
            bg={colorMode === 'light' ? clicked ? '#ECECEC' : 'white' : clicked ? '' : 'rgba(66,66,83,26.67)' }
            transition="background-color 0.3s ease-in-out"
            // border='1px solid' 
            transform={clicked ? 'scale(0.98)' : 'scale(1)'}
            borderColor='gray.300' 
            borderRadius='10px'
            mt='18px'
            boxShadow={colorMode === 'light' ? '0px 2px 25px 0px #F1F1F1' : '0px' }
            position='relative'
            >
                <HStack 
                    p='0 35px 0 30px' 
                    justifyContent='space-between'
                    w='100%'
                    >
                    <Box flex='1' w='100%'>
                        <Text
                            color={colorMode === 'light' ? 'gray.700' : 'white'}
                            className='rubik-medium'
                            fontSize='19px'
                            textDecoration={clicked ? 'line-through' : 'normal'}
                        >
                            {workouts[workout_id]}
                        </Text>
                    </Box>

                    <Flex justifyContent='end' flex='1' w='100%'>
                        <CheckBox clicked={clicked} complete_workout={complete_workout} />
                    </Flex>
                </HStack>
        </Flex>
    )
}

const CheckBox = ({clicked, complete_workout}) => {
    return (
        <Flex 
            w='26px' 
            h='26px' 
            border='2px solid' 
            borderColor={clicked ? 'blue.400' : 'gray.400'}
            transform={clicked ? 'scale(0.95)' : 'scale(1)'} // Bouncing effect
            transition="border-color 0.3s ease-in-out"
            borderRadius='4px'
            onClick={complete_workout}
            alignItems='center'
            justifyContent='center'
            cursor='pointer'
            >
                {
                    clicked ?
                        <Box color='blue.400'>
                     
                            <TiTick size='20px' />
                            
                            
                        </Box>
                        :
                        <></>
                }
        </Flex>
    )
}

const Helper_Text = () => {
    return (
        <Flex w='fit-content' position='absolute' zIndex='99'>
            <Text
                className='shaking-text'
                color='blue.400'
                fontWeight='semibold'
                fontSize='13px'
                bottom='20px'
                right='70px'
                position='relative'
            >
                Complete workout...</Text>
            <Arrow />
        </Flex>
    )
}

const Arrow = () => {
    return (
        <Flex
            right='60px'
            w='32px'
            h='auto'
            overflow='hidden'
            position='relative'
        >
            <Image src='/images/arrow.png' 
                objectFit='contain'
            />
        </Flex>
    )
}

export default Landing_Workout_Example;