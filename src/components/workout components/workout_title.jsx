import { HStack, Text, useColorMode, Input } from "@chakra-ui/react";
import { useState } from 'react';
import { replaceUnderscoresWithSpaces } from "../../useful_functions/functions";
import { update_workout } from "../../api/endpoints";

const Workout_Title = ({title, workout_id}) => {

    const { colorMode } = useColorMode();

    const [ workoutTitle, setWorkoutTitle ] = useState(title);

    const handleChange = (changed_title) => {
        setWorkoutTitle(changed_title);
    }

    const handleUpdate = () => {
        if (title != workoutTitle) {
            update_workout( workout_id, {'name': workoutTitle})
        }
    }

    return (
        <HStack gap='16px' justifyContent='start'>
            <HStack justifyContent='center'   color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                <Dynamic_Title title={replaceUnderscoresWithSpaces(workoutTitle)} changeTitle={handleChange} updateTitle={handleUpdate}  />
            </HStack>
        </HStack>
    )
}

const Dynamic_Title = ({title, changeTitle, updateTitle}) => {

    const { colorMode } = useColorMode();

    return (
        <Input variant='unstyled'
            _focus={{border:'1.5px solid black', borderColor: 'blue.400', p:'5px 0 5px 20px' }}
            value={title} 
            onChange={(e) => changeTitle(e.target.value)} 
            onBlur={updateTitle}
            color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
            className="rubik-bold"
            fontSize={{base: '32px', md:'34px'}}
        />
    )
}
 
export default Workout_Title;