import { Box, Flex, Img, Text } from "@chakra-ui/react";

export function Banner() {

    return(
        <Flex 
            as={'section'}
            backgroundImage={'/imgs/bg-star.png'}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
            padding={['28px 16px', '28px 16px', '80px 140px 70px']}
            position={'relative'}
            marginBottom={['0px', '0px', '114px']}
        >
            <Box maxWidth={'524px'} >
                <Text
                    color={'gray.100'}
                    fontWeight={'500'}
                    fontSize={['20px', '20px', '36px']}
                    lineHeight={['30px', '30px', '54px']}
                    marginBottom={['8px', '8px', '20px']}
                    maxWidth={'524px'}
                >5 Continentes, <br />infinitas possibilidades.</Text>
                <Text
                    fontWeight={'400'}
                    fontSize={['14px', '14px', '20px']}
                    lineHeight={['21px', '21px', '30px']}
                    color={'gray.300'}
                >Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
            </Box>
            
            <Img 
                src='/icons/icon-air-plane.svg' 
                position={'absolute'}
                right={'140px'}
                bottom={'-35px'}
                display={['none', 'none', 'block']}
            />
        </Flex>
    )
}