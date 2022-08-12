import { Flex, Text } from "@chakra-ui/react";

export function ChooseOrigin() {

    return (
        <Flex 
            justifyContent={'center'}
            alignItems={'center'}
            marginBottom={'52px'}
        >

            <Text
                fontSize={'36px'}
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