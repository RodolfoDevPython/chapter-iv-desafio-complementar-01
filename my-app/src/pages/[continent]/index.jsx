import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CardInfo } from "../../components/CardInfo";
import { Header } from "../../components/Header";

export default function PageContinent({ continent }) {

    const [continents, setContinents] = useState([]);

    useEffect( () => {

        if (continent) {
            async function fetchData() {
                const resp = await fetch(`http://localhost:3000/api/continents/${continent}`);
                const data = await resp.json();
    
                if (data?.continents) {
                    setContinents(data.continents)
                }
            }
    
            fetchData()
        }
        
    }, [ continent ])

    if (continents.length == 0) return 
    
    return (
        <div>
            <Header />

            <Flex 
                as={'main'}
                flexDir={'column'}
                backgroundColor={'gray.100'}
            >

                <Box
                    position={'relative'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Img src={continents?.bannerMain} w={'100vw'} h />
                    <Text
                        position={'absolute'}
                        bottom={['', '', '59px']}
                        left={['', '', '140px']}
                        color={'#fff'}
                        fontWeight={'600'}
                        fontSize={['28px', '28px', '48px']}
                        lineHeight={['42px', '42px', '72px']}
                        textTransform={'capitalize'}
                    >{continent}</Text>
                </Box>            
                
                <Flex
                    padding={['24px 16px 16px', '24px 16px 16px', '80px 140px']}
                    flexDir={'row'}
                    flexWrap={['wrap', 'wrap', 'no-wrap']}
                    gap={['16px', '16px', '70px']}
                    justifyContent={'space-between'}
                    flexDirection={['column', 'column', 'row']}
                >
                    
                    <Box maxWidth={['100%', '100%', '50%']}>
                        <Text
                            fontWeight={'400'}
                            fontSize={['14px', '14px', '24px']}
                            lineHeight={['21px', '21px', '36px']}
                            color={'gray.800'}
                            textAlign={'justify'}
                        >{ continents?.content }</Text>
                    </Box>
                    
                    <Box
                        display={'flex'}
                        gap={'42px'}
                    >
                        <Text
                            fontWeight={['400', '400', '600']}
                            fontSize={['18px', '18px', '24px']}
                            lineHeight={['27px', '27px', '36px']}
                            color={'gray.800'}
                            align={'center'}
                        >
                            <Text
                                fontWeight={'600'}
                                fontSize={['24px', '24px', '48px']}
                                lineHeight={['36px', '36px', '72px']}
                                color={'#FFBA08'}
                            >
                                { continents.infoBase?.country_tot }
                            </Text>
                            pa??ses
                        </Text>
                        <Text
                            fontWeight={['400', '400', '600']}
                            fontSize={['18px', '18px', '24px']}
                            lineHeight={['27px', '27px', '36px']}
                            color={'gray.800'}
                            align={'center'}
                        >
                            <Text
                                fontWeight={'600'}
                                fontSize={['24px', '24px', '48px']}
                                lineHeight={['36px', '36px', '72px']}
                                color={'#FFBA08'}
                            >
                            { continents?.infoBase?.languages }
                            </Text>
                            l??nguas
                        </Text>
                        <Text
                            fontWeight={['400', '400', '600']}
                            fontSize={['18px', '18px', '24px']}
                            lineHeight={['27px', '27px', '36px']}
                            color={'gray.800'}
                            align={'center'}
                        >
                            <Text
                                fontWeight={'600'}
                                fontSize={['24px', '24px', '48px']}
                                lineHeight={['36px', '36px', '72px']}
                                color={'#FFBA08'}
                            >
                            { continents?.infoBase?.city_tot }
                            </Text>
                            cidades +100 
                        </Text>

                    </Box>
                    
                </Flex>

                <Flex
                    justifyContent={'center'}
                    padding={['16px', '16px', '0px 140px']}
                >
                    <Flex
                        flexDir={'column'}
                        w={'100%'}
                    >
                        <Text
                            fontSize={['24px', '24px', '36px']}
                            lineHeight={['36px', '36px', '54px']}
                            fontWeight={'500'}
                            color={'gray.800'}
                            marginBottom={['20px', '20px', '40px']}
                        >Cidades +100</Text>

                        <Flex
                            gap={'0px 45px'}
                            flexWrap={'wrap'}
                            justifyContent={['center', 'center', 'space-between']}
                            flexDirection={['column', 'column', 'row']}   
                            alignItems={'center'}
                        >
                            {
                                continents?.city?.map( ({ name, countryRef, img, icon }) => (
                                        <CardInfo key={name} city={name} country={countryRef} bgImg={img} icon={icon} />
                                    ) 
                                )
                            }
                        </Flex>
                        
                    </Flex>
                </Flex>
            </Flex>
            
        </div>
    )


}

export const getStaticPaths = () => {
    return {
        paths: [], //-> Serve para indicar quais p??ginas ser??o geradas de forma est??tica durante o build
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {

    const { continent } = params;
    
    return {
        props: {
            continent
        },
        revalidate: 20, //20 seconds
    }
   
}  