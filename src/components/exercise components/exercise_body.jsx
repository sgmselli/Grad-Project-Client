import { VStack, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import Back_Button from "../back_button";
import Exercise_Title from "./exercise_title";
import { getFifthToLastElementFromUrl, getNumToLastElementFromUrl, getSecondToLastElementFromUrl } from "../../useful_functions/functions";
import Add_Set_Button from "./set_add";
import Set_List from "./set_list";

const Exercise_Body = () => {

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
                <Back_Button />
            </Box>

            <Box w='100%' mt='10px' pl='2px' >
                <Exercise_Title workout_title={workout_title} exercise_title={exercise_title}/>
            </Box>

            <Box w='100%' mt='30px' >
                <Add_Set_Button handleClick={handleClick} workout_id={workout_id} exercise_id={exercise_id} />
            </Box>
            
            <Box w='100%' mt='20px'>
                <Set_List handleClick={handleClick} clicked={clicked} workout_id={workout_id} exercise_id={exercise_id} />
            </Box>

        </VStack>
    )
}


export default Exercise_Body;