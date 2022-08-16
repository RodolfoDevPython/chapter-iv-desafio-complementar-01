import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { useRouter } from "next/router"
// import fetch from "node-fetch";
import { useEffect, useState } from "react";
import { CardInfo } from "../../components/CardInfo";
import { Header } from "../../components/Header";

export default function PageContinent() {

    const router = useRouter()
    const { continent } = router.query;
    const [continents, setContinents] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const resp = await fetch(`http://localhost:3000/api/continents/${continent}`);
            const data = await resp.json();

            if (data?.continents) {
                setContinents(data.continents)
            }
        }

        fetchData()
    }, [])

    console.log(continents)
    
    return (
        <div>
            <Header />

            <Flex 
                as={'main'}
                flexDir={'column'}
                backgroundColor={'#DADADA'}
            >

                <Box
                    position={'relative'}
                >
                    <Img src={continents?.bannerMain} w={'100vw'} />
                    <Text
                        position={'absolute'}
                        bottom={'59px'}
                        left={'140px'}
                        color={'#fff'}
                        fontWeight={'600'}
                        fontSize={'48px'}
                    >{continent}</Text>
                </Box>            
                
                <Flex
                    padding={'80px 140px'}
                    flexDir={'row'}
                    gap={'70px'}
                    justifyContent={'space-between'}
                >
                    
                    <Box maxWidth={'50%'}>
                        <Text
                            fontWeight={'400'}
                            fontSize={'24px'}
                            color={'gray.800'}
                            textAlign={'justify'}
                        >{ continents.content }</Text>
                    </Box>
                    
                    <Box
                        display={'flex'}
                        gap={'42px'}
                    >
                        <Text
                            fontWeight={'600'}
                            fontSize={'24px'}
                            color={'gray.800'}
                            align={'center'}
                        >
                            <Text
                                fontWeight={'600'}
                                fontSize={'48px'}
                                color={'#FFBA08'}
                            >
                                { continents.infoBase?.country_tot }
                            </Text>
                            países
                        </Text>
                        <Text
                            fontWeight={'600'}
                            fontSize={'24px'}
                            color={'gray.800'}
                            align={'center'}
                        >
                            <Text
                                fontWeight={'600'}
                                fontSize={'48px'}
                                color={'#FFBA08'}
                            >
                            { continents.infoBase?.languages }
                            </Text>
                            línguas
                        </Text>
                        <Text
                            fontWeight={'600'}
                            fontSize={'24px'}
                            color={'gray.800'}
                            align={'center'}
                        >
                            <Text
                                fontWeight={'600'}
                                fontSize={'48px'}
                                color={'#FFBA08'}
                            >
                            { continents.infoBase?.city_tot }
                            </Text>
                            cidades +100 
                        </Text>

                    </Box>
                    
                </Flex>

                <Flex
                    justifyContent={'center'}
                    padding={'0px 140px'}
                >
                    <Flex
                        flexDir={'column'}
                    >
                        <Text
                            fontSize={'36px'}
                            fontWeight={'500'}
                            color={'gray.800'}
                            marginBottom={'40px'}
                        >Cidades +100</Text>

                        <Flex
                            gap={'45px'}
                            flexWrap={'wrap'}
                            justifyContent={'space-between'}
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

export async function getServerSideProps({ params }) {

    const { continent } = params

    // try {
    //     const resp = await fetch(`http://localhost:3000/api/continents/${continent}`);
    //     console.log(resp)
    //     const data = await resp.json();
    
    // } catch (error) {
    //     console.log(error)        
    // }
    
    return {
        props: {
            continent
        },
    }
   
}  