import { HStack, Text, useColorMode } from "@chakra-ui/react";

const WorkoutsTitle = ({title}) => {

    const { colorMode } = useColorMode();

    return (
        

        <HStack gap='16px' justifyContent='center'>
            <HStack w='100%' justifyContent={{base:'center', md:'start'}} className="rubik-bold"  color={colorMode === 'light' ? 'gray.600' : 'gray.400'} fontSize={{base: '30px', md:'34px'}}>
                <Text color='blue.400'>{title}</Text>
                <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>workouts</Text>
            </HStack>
        </HStack>
    )
}
 
export default WorkoutsTitle;