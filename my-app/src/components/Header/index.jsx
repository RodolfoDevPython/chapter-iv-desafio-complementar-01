import { Button, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Header() {

    const router = useRouter();

    const pathName = router.asPath;

    const isHome = pathName == '/';

    return (
        <Flex
            bg='#fff'
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
                        left={'140px'}
                        onClick={() => router.push('/')}
                        backgroundColor={'transparent'}
                        border={'0px'}
                        _hover={{
                            backgroundColor: 'transparent'
                        }}
                    >
                        <Image 
                            display={['none', 'none', 'block']}
                            src='/icons/arrow-out/icon-arrow-out-desktop.svg'
                        />

                        <Image 
                            display={['block', 'block', 'none']}
                            src='/icons/arrow-out/icon-arrow-out-mobile.svg'
                        />
                        
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