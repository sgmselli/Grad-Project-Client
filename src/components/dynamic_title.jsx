import { useColorMode, Input } from "@chakra-ui/react";

export const Dynamic_Title = ({title, changeTitle, updateTitle}) => {

    const { colorMode } = useColorMode();

    return (
        <Input variant='unstyled'
            _focus={{border:'1.5px solid black', borderColor: 'blue.400', p:'5px 0 5px 20px' }}
            value={title} 
            onChange={(e) => changeTitle(e.target.value)} 
            onBlur={updateTitle}
            color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
            className="rubik-bold"
            fontSize={{base: '32px', md:'34px'}}
        />
    )
}