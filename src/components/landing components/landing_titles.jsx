import { VStack, Text, Flex, useColorMode } from "@chakra-ui/react"

const LandingTitle = () => {
    return (
        <VStack gap={{base:'30px', md:'45px'}}>
            <HeaderTitle />
            <SubHeaderTitle />
        </VStack>
    )
}

const HeaderTitle = () => {

    const { colorMode } = useColorMode()

    return (
        <Flex alignItems='center' flexDir='column' gap='0'>    
            <HeaderText text={'Make gains'} color={colorMode === 'light' ? 'gray.700' : 'gray.300'} font={'rubik-bold'} />
            <HeaderText text={'you can track'} color='blue.400' font={'rubik-extrabold'}/>
        </Flex>
    )
}

const HeaderText = ({text, color, font}) => {
    return (
    <Text 
        className={font}
        color={color}
        fontSize={{base:'44px', md:'58px'}}
        h={{base:'48px', md:'60px'}}
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
                color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
                fontWeight='normal'
                textAlign='center'
                lineHeight='28px'
                fontSize={{base:'17px', md:'19px'}}
            >
                Log your lifting to track your strength & muscle gains. Join 5,000+ users!
            </Text>
        </Flex>
    )
}

export default LandingTitle;
