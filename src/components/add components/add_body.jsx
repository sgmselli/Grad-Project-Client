import { VStack, Flex, Box, useColorMode, Text } from "@chakra-ui/react";
import { useState } from "react";
import Back_Button from "../back_button";
import AddInputSection from "./add_input";
import { getNumToLastElementFromUrl } from "../../useful_functions/functions";

const Add_Body = () => {

    const add_type = getNumToLastElementFromUrl(1)

    const [title, setTitle] = useState(add_type === 'add_exercise' ? 'Exercise Name' : 'Workout Name')

    const handleTitleChange = (changedTitle) => {
        if (changedTitle.trim() !== '') {
            setTitle(changedTitle)
        } else {
            if (add_type === 'add_exercise') {
                setTitle('Exercise Name')
            } else if (add_type === 'add_workout') {
                setTitle('Workout Name')
            }
        }
    }

    return (
        <VStack maxW='600px' w='92%' pb='50px'>

            <Box w='100%' mt='20px'>
                <Back_Button />
            </Box>

            <VStack position='absolute'  bottom='55%' top='45%' w='92%' maxW='600px' justifyContent='center' alignItems='center' gap={{base:'20px', md:'30px'}}>
                <Title title={title} />
                <AddInputSection add_type={add_type} handleTitleChange={handleTitleChange} changedTitle={title} />
            </VStack>

        </VStack>
    )
}

const Title = ({title}) => {

    const { colorMode } = useColorMode();

    return (
        <Text justifyContent='center' className="rubik-bold"  color={colorMode === 'light' ? 'gray.700' : 'gray.300'} fontSize={{base: '32px', md:'52px'}} >{title}</Text>
    )
}

export default Add_Body;