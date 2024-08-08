import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionBox = motion(Box);

const Motion_Item = ({component, isVisible, idx}) => {
    return (
        <MotionBox
                w='100%'
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.1 }} // stagger the animations
            >
                {component}
        </MotionBox>
    )
}

export default Motion_Item;