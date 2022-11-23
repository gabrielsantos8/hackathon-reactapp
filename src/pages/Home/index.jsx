import './style.css'
import {Menu} from '../../components/Menu';
import {Footer} from '../../components/Footer';

export const Home = () => {

    return (
        <>
            <Menu></Menu>
            
            <header class="masthead text-center text-white">
                <div class="masthead-content">
                    <div class="container px-5">
                        <h1 class="masthead-heading mb-0">Moderno, fácil e rápido</h1>
                        <h2 class="masthead-subheading mb-0">Encontre seu professor favorito.</h2>
                        <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Sobre</a>
                    </div>
                </div>
            </header>


            <section id="scroll">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6 order-lg-2">
                            <div class="p-5"><img class="img-fluid rounded-circle" src="../../../imgs/01.jpeg" alt="..." /></div>
                        </div>
                        <div class="col-lg-6 order-lg-1">
                            <div class="p-5">
                                <h2 class="display-4">Sobre o sistema</h2>
                                <p>É um app que possibilita professores não cursados consigam contratos em universidades mostrando sua experiência, o salário que buscam encontrar, claro, sempre disponibilizando o contato para negociações.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div class="container px-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6">
                            <div class="p-5"><img class="img-fluid rounded-circle" src="../../../imgs/02.jpeg" alt="..." /></div>
                        </div>
                        <div class="col-lg-6">
                            <div class="p-5">
                                <h2 class="display-4">Os desenvolvedores</h2>
                                <p>Os desenvolvedores Gabriel e Lucas juntaram suas forças para criar o moderno, fácil e rápido sistema de cadastros de professores, com o objetivo de ajudar aqueles que não possuem curso, que possam ter visualização para as instituições de ensino de todo o país.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div class="container px-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6 order-lg-2">
                            <div class="p-5"><img class="img-fluid rounded-circle" src="../../../imgs/03.jpeg" alt="..." /></div>
                        </div>
                        <div class="col-lg-6 order-lg-1">
                            <div class="p-5">
                                <h2 class="display-4">Let there be rock!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </>
    )
}