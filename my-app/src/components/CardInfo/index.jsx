import { Box, Flex, Img, Text } from "@chakra-ui/react";

export function CardInfo({ bgImg, icon, city, country }) {
    return (
        <Box  
            marginBottom={['20px', '20px', '35px']}
            backgroundColor={'#fff'}
            borderRadius={'8px'} 
        >
            <Img 
                borderLeft={'1px solid'}
                borderRight={'1px solid'}
                borderColor={'gray.300'}
                src={bgImg} 
                maxW={'256px'}
                height={'173px'}
            />

            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
                border={'1px solid rgba(255, 186, 8, 0.5)'}
                borderRadius={'0px 0px 8px 8px'}
                padding={'18px 24px'}
            >
                <Flex
                flexDir={'column'}>
                    <Text
                        fontWeight={'600'}
                        fontSize={'20px'}
                        lineHeight={'25px'}
                        color={'gray.800'}
                    >
                        {city}
                    </Text>
                    <Text
                        fontWeight={'500'}
                        fontSize={'16px'}
                        lineHeight={'26px'}
                        color={'gray.400'}
                    >
                        {country}
                    </Text>

                </Flex>
                

                <Img src={icon} maxW={'30px'} maxH={'30px'} />
            </Flex>

            
        </Box>
    )
}