import { Box, Text } from "@chakra-ui/react";

export function BenefitItem({ text, children }) {
    return (
        <Box
            display={'flex'}
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            paddingBottom={'80px'}
            _hover={{
                borderBottomWidth: '2px',
                borderBottomStyle: 'solid',
                borderBottomColor: 'gray.600'
            }}
        >
            {children}
            <Text
                mt={'24px'}
                fontWeight={'600'}
                color={'gray.500'}
            >{text}</Text>
        </Box>
    )
}