import { Flex, HStack, VStack, Box, Text, Image, useColorMode } from '@chakra-ui/react';
import { TiTick } from "react-icons/ti";

import { useState, useEffect } from 'react'
import { update_workout } from '../../api/endpoints';
import { useNavigate } from 'react-router-dom';
import { replaceSpacesWithUnderscores } from '../../useful_functions/functions';

const Workout_Box = ({workout_id, workout_name, workout_complete}) => {

    const { colorMode } = useColorMode()
    const nav = useNavigate();

    const [animate, setAnimate] = useState(false)
    const [clicked, setClicked] = useState(workout_complete);

    const handleNavigate = () => {
        nav(`${replaceSpacesWithUnderscores(workout_name)}/${workout_id}`)
    }

    /**
     * Prevents the click bubbling up to the workout box so when we check complete workout we don't get navigated
     * 
     * @param {*} e 
     */
    const handlePropagation = (e) => {
        e.stopPropagation();
    }

    /**
     *  When you click the checkbox, start an aninmation for .3 seconds and set clicked to the opposite of what it was
     * 
     */
    const complete_workout = () => {
        setAnimate(true)
        setClicked(!clicked);

        setTimeout(() => {
            setAnimate(false);
        }, 300); 
    }

    return (
        <Flex w='100%' justifyContent='center' alignItems='center'>

        <Flex 
            onClick={handleNavigate}
            w='92%' 
            maxW='600px' 
            h='84px' 
            bg={colorMode === 'light' ? animate ? '#ECECEC' : 'white' : animate ? '' : 'rgba(66,66,83,26.67)' }
            transition="background-color 0.3s ease-in-out"
            _hover={ colorMode === 'light' ? { 'bg':'gray.50'} : {'bg':'rgba(76,76,93,26.67)'} }
            cursor='pointer'
            transform={animate ? 'scale(0.99)' : 'scale(1)'}
            borderRadius='10px'
            mt='18px'
            p='50px 0'
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
                        <Text
                            color={colorMode === 'light' ? 'gray.700' : 'white'}
                            className='rubik-medium'
                            fontSize='19px'
                            textDecoration={clicked ?  'line-through' : 'normal'}
                        >
                            {workout_name}
                        </Text>
                    </Box>

                    <Flex justifyContent='end' flex='1' w='100%' zIndex='99' onClick={(e)=>handlePropagation(e)}>
                        <CheckBox clicked={clicked} animate={animate} workout_id={workout_id} complete_workout={complete_workout} />
                    </Flex>
                </HStack>
        </Flex>
        </Flex>

    )
}

const CheckBox = ({clicked, animate, workout_id, complete_workout}) => {

    const handleCompleteUpdate = async () => {
        await update_workout(workout_id, {'completed': !clicked ? 1 : 0});
        complete_workout();
    }


    return (
        <Flex 
            
            w='26px' 
            h='26px' 
            border='2px solid' 
            borderColor={clicked ? 'blue.400' : 'gray.400'}
            transform={animate ? 'scale(0.95)' : 'scale(1)'} // Bouncing effect
            transition="border-color 0.3s ease-in-out"
            borderRadius='4px'
            onClick={handleCompleteUpdate}
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

export default Workout_Box;