import { VStack, Text, Flex, useColorMode } from "@chakra-ui/react"

const Landing_Title = () => {
    return (
        <VStack gap={{base:'30px', md:'45px'}}>
            <Header_Title />
            <SubHeader_Title />
        </VStack>
    )
}

const Header_Title = () => {

    const { colorMode } = useColorMode()

    return (
        <Flex alignItems='center' flexDir='column' gap='0'>    
            <Header_Text text={'Make gains'} color={colorMode === 'light' ? 'gray.700' : 'gray.300'} font={'rubik-bold'} />
            <Header_Text text={'you can track'} color='blue.400' font={'rubik-extrabold'}/>
        </Flex>
    )
}

const Header_Text = ({text, color, font}) => {
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

const SubHeader_Title = () => {

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

export default Landing_Title;
