import { ActiveModelSerializer, createServer } from "miragejs"


export function makeServer({ environment = 'test' }) {
    createServer({
        environment,
        serializers: {
            application: ActiveModelSerializer
        },
        routes() {

            this.namespace = 'api';

            this.get('/banners', () => ({
                banners: [
                    {
                        img: '/imgs/continent-image.png', 
                        title: 'Europa', 
                        subTitle: 'O continente mais antigo.', 
                        continentId: 1,
                        slug: 'europa'
                    },
                    {
                        img: '/imgs/continent-image.png', 
                        title: 'Ásia', 
                        subTitle: 'O continente mais extenso territorialmente.', 
                        continentId: 2,
                        slug: 'asia'
                    }
                ]
            }))
            
            this.get('/continents/:slug', (_, request) => {
                const continents = [
                    { 
                        id: '1',
                        content: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
                        slug: 'europa',
                        bannerMain: '/imgs/continents/europa.png',
                        infoBase: {
                            country_tot: '50',
                            languages: '60',
                            city_tot: '27'
                        },
                        city: [
                            { name: 'Londres', countryRef: 'Reino Unido', img: '/imgs/city/bg-londres.png', icon: '/icons/country/reino-unido.png' },
                            { name: 'Paris', countryRef: 'França', img: '/imgs/city/bg-paris.png', icon: '/icons/country/franca.png' },
                            { name: 'Roma', countryRef: 'Itália', img: '/imgs/city/bg-roma.png', icon: '/icons/country/italia.png' },
                            { name: 'Praga', countryRef: 'República Tcheca', img: '/imgs/city/bg-praga.png', icon: '/icons/country/republica-tcheca.png' },
                            { name: 'Amsterdã', countryRef: 'Holanda', img: '/imgs/city/bg-amsterdã.png', icon: '/icons/country/holanda.png' }
                        ]                         
                    },
                    { 
                        id: '2',
                        content: 'A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte.',
                        slug: 'asia',
                        bannerMain: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzX2Dvgym3COF0wnrLTdMZUfRjv2X-xX27A&usqp=CAU',
                        infoBase: {
                            country_tot: '49',
                            languages: '60',
                            city_tot: '27'
                        },
                        city: [
                            { name: 'Cabul', countryRef: 'Afeganistão', img: 'https://i0.wp.com/jornal.usp.br/wp-content/uploads/2021/09/20210908_afeganistao.jpg?fit=1200%2C630&ssl=1', icon: 'https://cdn-icons-png.flaticon.com/512/330/330574.png' },
                            { name: 'Riad', countryRef: 'Arábia Saudita', img: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2019/10/1_din1145_semana1.jpg', icon: 'https://cdn-icons-png.flaticon.com/512/321/321258.png' },
                            { name: 'Timbu', countryRef: 'Butão', img: 'https://guiaviajarmelhor.com.br/wp-content/uploads/2019/12/but%C3%A3o-melhor-pa%C3%ADs-2020.jpg', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePZxengV6QuZSE3N4jZYkHSR9lYbvE6YVFQ&usqp=CAU' },
                        ]                         
                    }
                ]

                const filter = continents.filter(continent => continent.slug == request.params.slug);

                return { continents: filter[0] }
            })

            this.namespace = "";
            this.passthrough();

        }
    })
}