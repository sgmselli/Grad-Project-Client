import { HStack, Text, useColorMode } from "@chakra-ui/react";

import Logo from "../logo";


const Menu_Title = () => {

    const { colorMode } = useColorMode();

    const getGreeting = () => {
        const now = new Date();
        const hour = now.getHours(); // Get the current hour (0-23)
    
        if (hour >= 4 && hour < 12) {
            return "Good Morning";
        } else if (hour >= 12 && hour < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    }

    return (
        <HStack gap='16px'>
            <HStack  color={colorMode === 'light' ? 'gray.600' : 'gray.300'} fontSize={{base: '20px', md:'28px'}}>
                <Text className="rubik-bold" whiteSpace='nowrap'>{getGreeting()},</Text>
                <Text className="rubik-extrabold">Matthew! </Text>
            </HStack>
            <Logo pixels={28} />
        </HStack>
    )
}
 
export default Menu_Title;