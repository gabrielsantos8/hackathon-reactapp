import './style.css'

export const Menu = () => {

    return (
        <>
            <header class="p-3 mb-3 border-bottom">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        
                        </a>

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" class="nav-link px-2 link-light">Home</a></li>
                            <li><a href="/cadastro" class="nav-link px-2 link-light">Cadastro</a></li>   
                        </ul>

                        <div class="dropdown text-end">
                            <a href="#" class="d-block link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}