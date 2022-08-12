import { createServer, RestSerializer } from "miragejs"

export function makeServer({ environment = 'test' }) {
    createServer({
        environment,
        serializers: {
            reminder: RestSerializer.extend({
              include: ["list"],
              embed: true,
            }),
        },
        routes() {
            
            this.get('/api/continents', () => ({
                continents: [
                    { 
                        img: '/imgs/continent-image.png', 
                        title: 'Europa', 
                        subTitle: 'O continente mais antigo.', 
                        content: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
                        infoBase: {
                            country_tot: '50',
                            languages: '60',
                            city_tot: '27'
                        },
                        city: [
                            { name: 'Londres', countryRef: 'Reino Unido', img: '', icon: '/icons/country/reino-unido.png' },
                            { name: 'Paris', countryRef: 'França', img: '', icon: '/icons/country/franca.png' },
                            { name: 'Roma', countryRef: 'Itália', img: '', icon: '/icons/country/italia.png' },
                            { name: 'Praga', countryRef: 'República Tcheca', img: '', icon: '/icons/country/republica-tcheca.png' },
                            { name: 'Amsterdã', countryRef: 'Holanda', img: '', icon: '/icons/country/holanda.png' }
                        ]                         
                    }
                ]
            }))
        }
    })
}