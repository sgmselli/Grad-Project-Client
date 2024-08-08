import { HStack, Text, useColorMode } from "@chakra-ui/react";
import Logo from "../logo";
import { replaceUnderscoresWithSpaces } from "../../useful_functions/functions";

const Workout_Title = ({title}) => {

    const { colorMode } = useColorMode();

    return (
        <HStack gap='16px' justifyContent='start'>
            <HStack justifyContent='center' className="rubik-bold"  color={colorMode === 'light' ? 'gray.600' : 'gray.400'} fontSize={{base: '32px', md:'34px'}}>
                <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>{replaceUnderscoresWithSpaces(title)}</Text>
                {/* <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>workout</Text> */}
            </HStack>
            {/* <Logo pixels={30} /> */}
        </HStack>
    )
}
 
export default Workout_Title;