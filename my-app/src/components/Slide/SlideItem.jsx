import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export function SlideItem({ img, title, subTitle, slug }) {

   
    return (
        <Link href={`/${slug}`} >
            <a>
                <Box
                    backgroundImage={img}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat" 
                    backgroundSize={'cover'}
                    height={['250px', '250px', '420px']} 
                    justifyContent={'center'}
                    alignItems={'center'} 
                    display={'flex'}
                    flexDirection={'column'}
                >
                    <Text
                        fontSize={['24px', '24px', '48px']}
                        lineHeight={['36px', '36px', '72px']}
                        fontWeight={'700'}
                        color={'#F5F8FA'}
                    >{title}</Text>

                    <Text
                        fontSize={['14px', '14px', '24px']}
                        lineHeight={['21px', '21px', '36px']}
                        fontWeight={'700'}
                        color={'#DADADA'}
                    >{subTitle}</Text>

                </Box>
            </a>
            
        </Link>
    )
}