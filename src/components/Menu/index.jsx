import './style.css'

export const Menu = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
                <a class="navbar-brand" href="#page-top"><img src="../../imgs/logo.png" width="200px" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" 
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                              
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link text-white" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link text-white" href="#!">Cadastro</a></li>
                        <li class="nav-item"><a class="nav-link text-white" href="#!">Sobre</a></li>
                    </ul>
                </div>
            </div>
        </nav>




        </>
    )
}