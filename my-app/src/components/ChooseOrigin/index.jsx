import { Flex, Text } from "@chakra-ui/react";

export function ChooseOrigin() {

    return (
        <Flex 
            justifyContent={'center'}
            alignItems={'center'}
            marginBottom={['20px', '20px', '52px']}
        >

            <Text
                fontSize={['20px', '20px', '36px']}
                lineHeight={['30px', '30px', '54px']}
                color={'gray.500'}
                fontWeight={'500'}
                align={'center'}
            >
                Vamos nessa ? <br/>
                Então escolha seu continente 
            </Text>


        </Flex>
    )

}