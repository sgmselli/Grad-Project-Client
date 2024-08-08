import { Image, Flex } from "@chakra-ui/react";

const Logo = ({pixels}) => {
    return (
        <Flex
            w={`${pixels}px`}
            h={`${pixels}px`}
            overflow='hidden'
        >
            <Image 
                src='/images/logo.png'
                boxSize={`${pixels+2}px`}
                objectFit='cover'
            />
        </Flex>
    )
    
}

export default Logo;