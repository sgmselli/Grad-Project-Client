import { VStack, Text, useColorMode, Flex } from "@chakra-ui/react";

const SignUpTitles = () => {

    return (    
        <VStack w='100%' gap={{base:'10px', md:'22px'}}>
            <HeaderTitle />
            <SubHeaderTitle />
        </VStack>
    )
}

const HeaderTitle = () => {

    const { colorMode } = useColorMode()

    return (
        <Flex alignItems='center' flexDir='column' gap='0'>    
            <HeaderText text={'Make gains you can track'} color={colorMode === 'light' ? 'gray.700' : 'gray.300'} font={'rubik-bold'} />
        </Flex>
    )
}

const HeaderText = ({text, color, font}) => {
    return (
    <Text 
        textAlign='center'
        className={font}
        color={color}
        fontSize={{base:'28px', md:'38px'}}
        h='fit-content'
        lineHeight='42px'
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
                fontSize={{base:'15px', md:'17px'}}
            >
                Ready to log your lifts?
            </Text>
        </Flex>
    )
}

export default SignUpTitles;