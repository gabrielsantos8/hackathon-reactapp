import './style.css'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Menu } from '../../components/Menu';
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const Cadastro = () => {

    const [data, setData] = useState([]);
    const [dataUpdt, setDataUpdt] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        listar();
    }, [])

    const refForm = useRef()

    const refFormUpdt = useRef()

    function submitForm(e) {
        e.preventDefault();
        if (refForm.current.checkValidity()) {
            let obj = new Object;
            for (let index = 0; index < refForm.current.length; index++) {
                const id = refForm.current[index]?.id;
                const value = refForm.current[index]?.value;
                if (id === 'botao') break;
                obj[id] = value;
            }

            const formData = new FormData();
            formData.append("nome", obj.nome);
            formData.append("sobre", obj.sobre);
            formData.append("experiencia", obj.experiencia);
            formData.append("salarioalvo", obj.salario);
            formData.append("prof_img", e.target[5].files[0])

            inserir(formData);
        } else {
            refForm.current.classList.add('was-validated')
        }
    }


    function submitFormUpdt(e) {
        e.preventDefault();
        if (refFormUpdt.current.checkValidity()) {
            let obj = new Object;
            for (let index = 0; index < refFormUpdt.current.length; index++) {
                const id = refFormUpdt.current[index]?.id;
                const value = refFormUpdt.current[index]?.value;
                if (id === 'botao') break;
                obj[id] = value;
            }

            const formData = new FormData();
            formData.append("id", obj.id);
            formData.append("nome", obj.nome);
            formData.append("sobre", obj.sobre);
            formData.append("experiencia", obj.experiencia);
            formData.append("salarioalvo", obj.salario);
            formData.append("prof_img", e.target[5].files[0])

            atualizar(formData, obj.id);
        } else {
            refForm.current.classList.add('was-validated')
        }
    }


    const atualizar = (obj, id) => {
        axios.put('http://localhost:3333/professores/' + id, obj, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                toast.success("Sucesso!");
                handleClose();
                listar()
            })
    }

    const inserir = (obj) => {
        axios.post('http://localhost:3333/professores', obj, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                toast.success("Sucesso!");
                limpaForm();
                listar()
            })
    }


    const listar = () => {
        axios.get('http://localhost:3333/professores')
            .then((res) => {
                setData(res.data)
            })
    }

    const deletar = (id) => {
        axios.delete('http://localhost:3333/professores/' + id)
            .then((res) => {
                limpaForm();
                toast.success("Sucesso!");
                listar()
            })
    }

    const limpaForm = () => {
        const inputs = document.querySelectorAll('input');
        const textareas = document.querySelectorAll('textarea');
        inputs.forEach(el => {
            el.value = ""
        })
        textareas.forEach(el => {
            el.value = ""
        })
    }

    return (
        <>
            <Menu></Menu>
            <div className='container bg-light p-5 card-cad'>
                <h2 className='heading-section'>Cadastro:</h2>
                <form
                    noValidate
                    encType="multipart/form-data"
                    className="row g-3 needs-validation mt-3"
                    onSubmit={(e) => submitForm(e)}
                    ref={refForm}
                >
                    <input type="text" id='id' hidden />
                    <div className="col-md-6">
                        <label htmlFor="nome" className="form-label">Nome:</label>
                        <input type='text' className="form-control" placeholder="Digite o nome do professor" id="nome" required />
                        <div className="invalid-feedback">Digite o nome do professor!</div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="experiencia" className="form-label">Experiência:</label>
                        <input type="number" className="form-control" placeholder='Digite a experiência (anos)' id="experiencia" required />
                        <div className="invalid-feedback">
                            Digite a experiência do professor!
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="salario" className="form-label">Salário Alvo:</label>
                        <input type="number" className="form-control" placeholder='R$ 0.00' id="salario" required />
                        <div className="invalid-feedback">
                            Digite o salário do professor!
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="sobre" className="form-label">Sobre:</label>
                        <textarea className="form-control" placeholder="Digite sobre o professor" id="sobre" required />
                        <div className="invalid-feedback">Digite sobre o professor!</div>
                    </div>

                    <div className="col-md-12">
                        <input type="file" name="prof_img" id='prof_img' className='form-control' />
                    </div>

                    <div className="col-md-12">
                        <button className="btn btn-submit w-100" type="submit" id='botao'>Enviar</button>
                        <button className="btn btn-primary w-100 mt-2" type="button" onClick={(e) => { limpaForm() }} id='botao'>Limpar</button>
                    </div>

                </form>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Professores</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-wrap">
                            <table className="table">
                                <thead className="thead-primary">
                                    <tr>
                                        <th>Imagem</th>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Sobre</th>
                                        <th>Experiencia</th>
                                        <th>Salário Alvo</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((obj, idx) => {
                                            return (
                                                <tr key={idx}>
                                                    <th scope="row" className="scope"><img className='prof-img' src={"http://localhost:3333/static/" + obj.prof_img} alt="Imagem do Professor" /></th>
                                                    <td>{obj.id}</td>
                                                    <td>{obj.nome}</td>
                                                    <td>{obj.sobre}</td>
                                                    <td>{obj.experiencia} anos</td>
                                                    <td>R$ {obj.salarioalvo}</td>
                                                    <td>
                                                        <a style={{ color: "#fff" }} onClick={(e) => {setDataUpdt(obj);handleShow()}} className="btn btn-primary m-2"><FaPen /></a>
                                                        <a style={{ color: "#fff" }} onClick={(e) => { deletar(obj.id) }} className="btn btn-danger"><FaTrashAlt /></a>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="chead-primary">
                    <Modal.Title>Atualizando</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container bg-light p-5 card-cad'>
                        <form
                            noValidate
                            encType="multipart/form-data"
                            className="row g-3 needs-validation"
                            onSubmit={(e) => submitFormUpdt(e)}
                            ref={refFormUpdt}
                        >
                            <input defaultValue={dataUpdt.id} type="text" id='id' hidden />
                            <div className="col-md-12">
                                <label htmlFor="nome" className="form-label">Nome:</label>
                                <input defaultValue={dataUpdt.nome} type='text' className="form-control" placeholder="Digite o nome do professor" id="nome" required />
                                <div className="invalid-feedback">Digite o nome do professor!</div>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="experiencia" className="form-label">Experiência:</label>
                                <input defaultValue={dataUpdt.experiencia} type="number" className="form-control" placeholder='Digite a experiência (anos)' id="experiencia" required />
                                <div className="invalid-feedback">
                                    Digite a experiência do professor!
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="salario" className="form-label">Salário Alvo:</label>
                                <input defaultValue={dataUpdt.salarioalvo} type="number" className="form-control" placeholder='R$ 0.00' id="salario" required />
                                <div className="invalid-feedback">
                                    Digite o salário do professor!
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="sobre" className="form-label">Sobre:</label>
                                <textarea defaultValue={dataUpdt.sobre} className="form-control" placeholder="Digite sobre o professor" id="sobre" required />
                                <div className="invalid-feedback">Digite sobre o professor!</div>
                            </div>

                            <div className="col-md-12">
                                <input type="file" name="prof_img" id='prof_img' className='form-control' />
                            </div>

                            <div className="col-md-12">
                                <button className="btn btn-submit w-100" type="submit" id='botao'>Enviar</button>
                            </div>

                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}