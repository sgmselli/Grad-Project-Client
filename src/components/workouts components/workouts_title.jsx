import { HStack, Text, useColorMode } from "@chakra-ui/react";
import Logo from "../logo";

const Workouts_Title = ({title}) => {

    const { colorMode } = useColorMode();

    return (
        

        <HStack gap='16px' justifyContent='center'>
            <HStack justifyContent='center' className="rubik-bold"  color={colorMode === 'light' ? 'gray.600' : 'gray.400'} fontSize={{base: '27px', md:'34px'}}>
                <Text color='blue.400'>{title}</Text>
                <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>workouts</Text>
            </HStack>
            <Logo pixels={30} />
        </HStack>
    )
}
 
export default Workouts_Title;