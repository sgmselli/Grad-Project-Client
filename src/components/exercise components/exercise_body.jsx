import { VStack, Box } from "@chakra-ui/react";
import { useState } from "react";
import BackButton from "../back_button";
import ExerciseTitle from "./exercise_title";
import { getNumToLastElementFromUrl } from "../../useful_functions/functions";
import AddSetButton from "./set_add";
import SetList from "./set_list";

const ExerciseBody = () => {

    const [clicked, setClicked] = useState(false)

    const workout_title = getNumToLastElementFromUrl(5);
    const exercise_title = getNumToLastElementFromUrl(2);
    const workout_id = getNumToLastElementFromUrl(4);
    const exercise_id = getNumToLastElementFromUrl(1);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <VStack maxW='600px' w='92%' pb='50px'>

            <Box w='100%' mt='20px'>
                <BackButton />
            </Box>

            <Box w='100%' mt='10px' pl='2px' >
                <ExerciseTitle workout_id={workout_id} exercise_id={exercise_id} workout_title={workout_title} exercise_title={exercise_title}/>
            </Box>

            <Box w='100%' mt='30px' >
                <AddSetButton handleClick={handleClick} workout_id={workout_id} exercise_id={exercise_id} />
            </Box>
            
            <Box w='100%' mt='20px'>
                <SetList handleClick={handleClick} clicked={clicked} workout_id={workout_id} exercise_id={exercise_id} />
            </Box>

        </VStack>
    )
}


export default ExerciseBody;