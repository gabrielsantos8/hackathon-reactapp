import './style.css'
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';


export const Home = () => {

    return (
        <>
            <Menu></Menu>

            <header class="masthead text-center text-white">
                <div class="masthead-content">
                    <div class="container">
                        <h1 class="masthead-heading mb-0">Moderno, fácil e rápido</h1>
                        <h2 class="masthead-subheading mb-5">Cadastre seu professor favorito.</h2>
                        <a class="btn btn-header col-md-3 col-12 rounded-pill mt-2" href="#sobre">Sobre</a>
                        <a class="btn btn-header col-md-3 col-12 rounded-pill mt-2" href="#devs">Desenvolvedores</a>
                        <a class="btn btn-header col-md-3 col-12 rounded-pill mt-2" href="#contatos">Contato</a>
                    </div>
                </div>
            </header>


            <section>

                <Card
                    id="sobre"
                    img="../../../imgs/1.gif"
                    alt="Imagem APP"
                    title="Sobre o sistema..."
                    desc="FindTeach é uma ferramente que possibilita professores não concursados conseguirem contratos em universidades, mostrando sua experiência na área, seus interesses, e claro, o salário que buscam encontrar, sempre disponibilizando o contato para negociações. Basta cadastrar seu professor, e aguardar as vagas virem até ele!"
                    classImg="order-lg-2"
                    classTxt="order-lg-1"
                >
                </Card>

                <Card
                    id="devs"
                    img="../../../imgs/2.png"
                    alt="Imagem DEVS"
                    title="Os desenvolvedores..."
                    desc="Os desenvolvedores Gabriel e Lucas juntaram suas forças para criar o moderno, fácil e rápido sistema de cadastros de professores, com o objetivo de ajudar aqueles que não possuem curso, que possam ter visualização para as instituições de ensino de todo o país!"
                >
                </Card>

                <Card
                    id="contatos"
                    img="../../../imgs/3.gif"
                    alt="Imagem CONTATOS"
                    title="Entre em contato..."
                    desc="📞 WhatsApp: (44) 9 8824-8507 ou (41) 9 9652-5330"
                    classImg="order-lg-2"
                    classTxt="order-lg-1"
                >
                </Card>
            </section>

            <Footer></Footer>
        </>
    )
}