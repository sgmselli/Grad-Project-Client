import { Flex, HStack, Box, Text, useColorMode, Input, InputRightElement, InputGroup, Button } from '@chakra-ui/react';
import { useState } from 'react';

import { TbGridDots } from "react-icons/tb";
import { getFifthToLastElementFromUrl, getNumToLastElementFromUrl } from '../../useful_functions/functions';
import { delete_set, update_set } from '../../api/endpoints';
import { TiDelete } from "react-icons/ti";

const Set_Box = ({handleClick, set_num, set_id, exercise_id, set_weight, set_reps}) => {

    const { colorMode } = useColorMode()

    const [weight, setWeight] = useState(set_weight);
    const [reps, setReps] = useState(set_reps);

    const workout_id = getNumToLastElementFromUrl(4);

    const updateWeight = () => {
        if (weight !== set_weight) {
            update_set(workout_id, exercise_id, set_id, {'weight': weight})
        }
    }

    const updateReps = () => {
        if (reps !== set_reps) {
            update_set(workout_id, exercise_id, set_id, {'reps': reps})
        }
    }

    return (
        <Flex w='100%' justifyContent='center' alignItems='center'>

        <Flex 
            w='100%' 
            maxW='600px' 
            h='64px' 
            bg={colorMode === 'light' ? 'white' : 'rgba(66,66,83,26.67)' }
            transition="background-color 0.3s ease-in-out"
            cursor='pointer'
            borderRadius='10px'
            p='44px 0'
            boxShadow={colorMode === 'light' ? '0px 2px 25px 0px #F1F1F1' : '0px' }
            justifyContent='center'
            alignItems='center'
            >
                <HStack 
                    p='0 35px 0 30px' 
                    justifyContent='space-between'
                    w='100%'
                    >
                    <Box flex='2' w='100%'>
                        <Text
                            color={colorMode === 'light' ? 'gray.700' : 'white'}
                            className='rubik-medium'
                            fontSize='18px'
                        >
                            {set_num}
                        </Text>
                    </Box>
                    <Box flex='15' w='100%'>
                        <HStack gap='15px'>
                            <Set_Input metric='Kg' set_value={weight} change_set_value={setWeight} update_value={updateWeight} />
                            <Text
                                className='rubik-medium'
                            >
                                x
                            </Text>
                            <Set_Input metric='Reps' set_value={reps} change_set_value={setReps} update_value={updateReps}/>
                        </HStack>
                    </Box>
                    <Flex flex='3' justifyContent='end' w='100%'>
                        <Set_Delete handleClick={handleClick} set_id={set_id} exercise_id={exercise_id} workout_id={workout_id} />
                    </Flex>
                </HStack>
        </Flex>
        </Flex>

    )
}

const Set_Input = ({metric, set_value, change_set_value, update_value}) => {

    const { colorMode } = useColorMode()

    return (
        <InputGroup>
            <Input 
                bg='white'
                className='rubik-medium'
                border='2px solid'
                borderColor={colorMode === 'light' ? 'gray.300' : 'gray.400'}
                color='gray.700'
                fontSize='14px'
                value={set_value}
                onBlur={update_value}
                onChange={(e) => change_set_value(e.target.value)}
            />
            <InputRightElement w='fit-content' pl='15px' pr='12px'>
                <Text 
                    className='rubik-medium'
                    color='gray.700'
                    fontSize='13px'
                >
                    {metric}
                </Text>
            </InputRightElement>
        </InputGroup>
    )
}

const Set_Delete = ({handleClick, set_id, exercise_id, workout_id}) => {

    const { colorMode } = useColorMode();

    const handleDelete = () => {
        delete_set(workout_id, exercise_id, set_id)
        handleClick();
    }

    return (
       
                <Button
                onClick={handleDelete}
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

export default Set_Box;