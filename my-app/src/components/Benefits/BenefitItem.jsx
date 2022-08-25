import { Box, Text } from "@chakra-ui/react";

export function BenefitItem({ text, children }) {
    return (
        <Box
            display={'flex'}
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            paddingBottom={['27px', '27px', '80px']}
            border={['1px solid transparent', '1px solid transparent', '2px solid transparent']}
            _hover={[
                { borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'gray.600' },
                { borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'gray.600' },
                { borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: 'gray.600' }
            ]}
        >
            <Box
                display={['none', 'none', 'block']} 
                marginBottom={'24px'}
            >
                {children}         
            </Box>

            <Text
                fontWeight={'600'}
                color={'gray.500'}
                position='relative'
                _after={[
                    { content: `""`, position: 'absolute', left: '-16px', top: '25%', height: '10px', width: '10px', background: 'yellow.500', borderRadius: '50%' },
                    { content: `""`, position: 'absolute', left: '-16px', top: '25%', height: '10px', width: '10px', background: 'yellow.500', borderRadius: '50%' },
                    { background: 'transparent' }
                ]}
            >{text}</Text>

        </Box>
    )
}