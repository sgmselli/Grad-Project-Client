import { Flex, HStack, VStack, Box, Text, Image, useColorMode } from '@chakra-ui/react';
import { TiTick } from "react-icons/ti";

import { useState, useEffect } from 'react'
import { update_workout } from '../../api/endpoints';
import { useNavigate } from 'react-router-dom';
import { replaceSpacesWithUnderscores } from '../../useful_functions/functions';

const Workout_Box = ({workout_id, workout_name, workout_complete, workout_date}) => {

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
                        <VStack alignItems='start' w='100%' gap='0'>
                            <Text
                                    color={colorMode === 'light' ? 'gray.700' : 'white'}
                                    className='rubik-medium'
                                    fontSize='19px'
                                >
                                {workout_name}
                            </Text>
                            <DateFormat date={workout_date} />
                        </VStack>
                    </Box>

                    <Flex justifyContent='end' flex='1' w='100%' zIndex='99' onClick={(e)=>handlePropagation(e)}>
                        <CheckBox clicked={clicked} animate={animate} workout_id={workout_id} complete_workout={complete_workout} />
                    </Flex>
                </HStack>
        </Flex>
        </Flex>

    )
}

const DateFormat = ({date}) => {

    const { colorMode } = useColorMode();

    const convertMonth = (month) => {
        const monthDict = {
            '01': 'Jan',
            '02': 'Feb',
            '03': 'Mar',
            '04': 'Apr',
            '05': 'May',
            '06': 'Jun',
            '07': 'Jul',
            '08': 'Aug',
            '09': 'Sep',
            '10': 'Oct',
            '11': 'Nov',
            '12': 'Dec'
        };
        // Check if the input is a valid two-digit string
        if (typeof month === 'string' && /^\d{2}$/.test(month)) {
            return monthDict[month] || "Invalid month"; // Return month name or invalid message
        } else {
            return "Invalid input"; // For invalid input
        }
    }

    const date_split = date.split('-')
    const month = convertMonth(date_split[1])
    const day = date_split[2]

    
    return (
        <HStack 
            w='100%'
            gap='4px'
            color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
            className='rubik'
            fontSize='14px'
        >
            <Text>
                {day}
            </Text>
            <Text>
                {month}
            </Text>
        </HStack>
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