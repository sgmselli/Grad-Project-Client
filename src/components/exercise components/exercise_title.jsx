import { HStack, Text, useColorMode } from "@chakra-ui/react";
import Logo from "../logo";
import { replaceUnderscoresWithSpaces } from "../../useful_functions/functions";

const Exercise_Title = ({workout_title, exercise_title}) => {

    const { colorMode } = useColorMode();

    return (
        <HStack gap='16px' justifyContent='start'>
            <HStack alignItems='end' gap='14px' justifyContent='center' className="rubik-bold"  color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                <Text fontSize={{base: '32px', md:'34px'}} color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>{replaceUnderscoresWithSpaces(exercise_title)}</Text>
                <Text pb='6px' fontSize={{base: '18px', md:'22px'}} color='blue.400'>({replaceUnderscoresWithSpaces(workout_title)})</Text>
            </HStack>
            {/* <Logo pixels={30} /> */}
        </HStack>
    )
}
 
export default Exercise_Title;