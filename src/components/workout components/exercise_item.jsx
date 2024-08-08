import { Flex, HStack, VStack, Box, Text, Image, useColorMode } from '@chakra-ui/react';

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { TbGridDots } from "react-icons/tb";
import { replaceSpacesWithUnderscores } from '../../useful_functions/functions';

const Exercise_Box = ({exercise_id, exercise_name, set_count}) => {

    const { colorMode } = useColorMode()
    const nav = useNavigate();

    const handleNavigate = () => {
        nav(`exercise/${replaceSpacesWithUnderscores(exercise_name)}/${exercise_id}`)
    }

    /**
     * Prevents the click bubbling up to the workout box so when we check complete workout we don't get navigated
     * 
     * @param {*} e 
     */
    // const handlePropagation = (e) => {
    //     e.stopPropagation();
    // }

    /**
     *  When you click the checkbox, start an aninmation for .3 seconds and set clicked to the opposite of what it was
     * 
     */
    // const complete_workout = () => {
    //     setAnimate(true)
    //     setClicked(!clicked);

    //     setTimeout(() => {
    //         setAnimate(false);
    //     }, 300); 
    // }

    return (
        <Flex w='100%' justifyContent='center' alignItems='center'>

        <Flex 
            onClick={handleNavigate}
            w='100%' 
            maxW='600px' 
            h='64px' 
            bg={colorMode === 'light' ? 'white' : 'rgba(66,66,83,26.67)' }
            transition="background-color 0.3s ease-in-out"
            _hover={ colorMode === 'light' ? { 'transform':'scale(0.99)', 'bg':'gray.50'} : { 'transform':'scale(0.99)', 'bg':'rgba(76,76,93,26.67)'} }
            cursor='pointer'
            borderRadius='10px'
            p='44px 0'
            boxShadow={colorMode === 'light' ? '0px 2px 25px 0px #F1F1F1' : '0px' }
            position='relative'
            justifyContent='center'
            alignItems='center'
            >
                <HStack 
                    p='0 35px 0 30px' 
                    justifyContent='space-between'
                    w='100%'
                    >
                    <Box flex='3' w='100%'>
                    <VStack alignItems='start' w='100%' gap='0'>
                        <Text
                                color={colorMode === 'light' ? 'gray.700' : 'white'}
                                className='rubik-medium'
                                fontSize='17px'
                            >
                            {exercise_name}
                        </Text>
                        <Text
                            color={colorMode === 'light' ? 'gray.700' : 'gray.300'}
                            className='rubik'
                            fontSize='14px'
                        >
                            {set_count} 
                            {
                                set_count === 1
                                ?
                                <> set</>
                                :
                                <> sets</>
                            }
                        </Text>
                    </VStack>
                    </Box>

                    
                    <TbGridDots size='20px' />

                    {/* <Flex justifyContent='end' flex='1' w='100%' zIndex='99' onClick={(e)=>handlePropagation(e)}>
                        <CheckBox clicked={clicked} animate={animate} workout_id={workout_id} complete_workout={complete_workout} />
                    </Flex> */}
                </HStack>
        </Flex>
        </Flex>

    )
}

export default Exercise_Box;