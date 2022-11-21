import './style.css'

export const Menu = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
                <a className="navbar-brand" href="#page-top"><img src="../../imgs/logo.png" width="200px" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" 
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                              
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link text-white" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#!">Cadastro</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#!">Sobre</a></li>
                    </ul>
                </div>
            </div>
        </nav>




        </>
    )
}