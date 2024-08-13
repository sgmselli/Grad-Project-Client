import { VStack, Text, useColorMode, Flex } from "@chakra-ui/react";

const SignInTitles = () => {

    return (    
        <VStack gap={{base:'20px', md:'22px'}}>
            <HeaderTitle />
            <SubHeaderTitle />
        </VStack>
    )
}

const HeaderTitle = () => {

    const { colorMode } = useColorMode()

    return (
        <Flex alignItems='center' flexDir='column' gap='0'>    
            <HeaderText text={'Welcome back 👋'} color={colorMode === 'light' ? 'gray.700' : 'gray.300'} font={'rubik-bold'} />
        </Flex>
    )
}

const HeaderText = ({text, color, font}) => {
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

const SubHeaderTitle = () => {

    const { colorMode } = useColorMode();

    return (
        <Flex w='90%' alignItems='center' justifyContent='center'>
            <Text
                color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
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

export default SignInTitles;