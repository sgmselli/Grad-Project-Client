import { VStack, Text, useColorMode, Flex } from "@chakra-ui/react";

const Sign_In_Titles = () => {

    return (    
        <VStack gap={{base:'20px', md:'22px'}}>
            <Header_Title />
            <SubHeader_Title />
        </VStack>
    )
}

const Header_Title = () => {

    const { colorMode } = useColorMode()

    return (
        <Flex alignItems='center' flexDir='column' gap='0'>    
            <Header_Text text={'Welcome back 👋'} color={colorMode === 'light' ? 'gray.700' : 'gray.400'} font={'rubik-bold'} />
        </Flex>
    )
}

const Header_Text = ({text, color, font}) => {
    return (
    <Text 
        className={font}
        color={color}
        fontSize={{base:'35px', md:'38px'}}
        h={{base:'32px', md:'44px'}}
    >
        {text}
    </Text>
    )
}

const SubHeader_Title = () => {

    const { colorMode } = useColorMode();

    return (
        <Flex w='90%' alignItems='center' justifyContent='center'>
            <Text
                color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
                fontWeight='normal'
                textAlign='center'
                lineHeight='28px'
                fontSize={{base:'17px', md:'17px'}}
            >
                Ready to log your lifts?
            </Text>
        </Flex>
    )
}

export default Sign_In_Titles;