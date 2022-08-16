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