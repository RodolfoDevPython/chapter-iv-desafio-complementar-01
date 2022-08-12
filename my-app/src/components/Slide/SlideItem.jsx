import { Box, Text } from "@chakra-ui/react";

export function SlideItem({ img, title, subTitle }) {

    return (
        <Box
          backgroundImage={img}
          backgroundPosition="center"
          backgroundRepeat="no-repeat" 
          backgroundSize={'cover'}
          height={'420px'} 
          justifyContent={'center'}
          alignItems={'center'} 
          display={'flex'}
          flexDirection={'column'}
        >
            <Text
                fontSize={'48px'}
                fontWeight={'700'}
                color={'#F5F8FA'}
            >{title}</Text>

            <Text
                fontSize={'24px'}
                fontWeight={'700'}
                color={'#DADADA'}
            >{subTitle}</Text>

        </Box>
    )
}