import { Flex, HStack, VStack, Box, Text, Button, useColorMode } from '@chakra-ui/react';

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { TbGridDots } from "react-icons/tb";
import { TiDelete } from "react-icons/ti";
import { getNumToLastElementFromUrl, replaceSpacesWithUnderscores } from '../../useful_functions/functions';
import { delete_exercise } from '../../api/endpoints';

const Exercise_Box = ({handleClick, exercise_id, exercise_name, set_count}) => {

    const { colorMode } = useColorMode()
    const nav = useNavigate();

    const workout_id = getNumToLastElementFromUrl(1)

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
                    p='0 26px 0 30px' 
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
                    <Exercise_Delete handleClick={handleClick} exercise_id={exercise_id} workout_id={workout_id} />
                </HStack>
        </Flex>
        </Flex>

    )
}

const Exercise_Delete = ({handleClick, exercise_id, workout_id}) => {

    const { colorMode } = useColorMode();

    const handleDelete = (e) => {
        delete_exercise(workout_id, exercise_id)
        handleClick();

        e.stopPropagation();
    }

    return (
       
                <Button
                onClick={(e) => handleDelete(e)}
                _hover={ colorMode === 'light' ? {bg:'rgba(200, 200, 200, 0.3)'} : {bg:'rgba(160, 160, 160, 0.2)'}}
                bg='none'
                w='44px'
                h='44px'
                p='0'
                color='red.300'
            >
                    <TiDelete size='24px'/>
        

            </Button>
    )
}

export default Exercise_Box;