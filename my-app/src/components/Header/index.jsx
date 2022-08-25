import { Button, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMediaQuery } from "@chakra-ui/media-query";


export function Header() {

    const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

    const router = useRouter();

    const pathName = router.asPath;

    const isHome = pathName == '/';

    return (
        <Flex
            bg={`${isHome ? '#fff' : 'gray.100' }`}
            h={['50', '50', "100"]}
            as="header"
            align="center" 
            justify="center"
            position={'relative'}
        >

            {
                !isHome && (
                    <Button
                        position={'absolute'}
                        left={['16px', '16px', '140px']}
                        padding={'0px'}
                        minW={['10px', '10px', '']}
                        onClick={() => router.push('/')}
                        backgroundColor={'transparent'}
                        border={'0px'}
                        _hover={{
                            backgroundColor: 'transparent'
                        }}
                    >
                    { 
                        !isSmallScreen 
                        ? (
                            <Image 
                                src='/icons/arrow-out/icon-arrow-out-desktop.svg'
                            />
                        )
                        : (
                            <Image 
                                src='/icons/arrow-out/icon-arrow-out-mobile.svg'
                            />
                        )
                    }
                        
                    </Button>
                )
            }
            
            <Image 
                display={['none', 'none', 'block']}
                src='/icons/logo/logo-desktop.svg'
            />

            <Image
                display={['block', 'block', 'none']}
                src='/icons/logo/logo-mobile.svg'
            />

        </Flex>
    )
}