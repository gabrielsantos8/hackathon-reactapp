import './style.css'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Menu } from '../../components/Menu';
import { FaTrashAlt, FaPen} from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

export const Cadastro = () => {

    const [data, setData] = useState([]);
    const [dataUpdt, setDataUpdt] = useState({});

    useEffect(() => {
        listar();
    }, [])

    const refForm = useRef()

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
            formData.append("id", obj.id);
            formData.append("nome", obj.nome);
            formData.append("sobre", obj.sobre);
            formData.append("experiencia", obj.experiencia);
            formData.append("salarioalvo", obj.salario);
            formData.append("prof_img", e.target[5].files[0])

            obj.id == "" ? inserir(formData) : atualizar(formData, obj.id);
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
                limpaForm()
                listar()
            })
    }

    const atualizaDataUpdt = (obj) => {
        setDataUpdt(obj)
     };

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
                toast.success("Sucesso!");
                listar()
            })
    }

    const limpaForm = () => {
        atualizaDataUpdt({id: '', nome: '', sobre: '', experiencia: 0, salarioalvo: 0})
        var inputFile = document.querySelector('#prof_img');
        inputFile.value = ''
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
                    <input type="text" id='id' hidden defaultValue={dataUpdt.id !== undefined ? dataUpdt.id : ''} />
                    <div className="col-md-6">
                        <label htmlFor="nome" className="form-label">Nome:</label>
                        <input type='text' defaultValue={dataUpdt.nome !== undefined ? dataUpdt.nome : ''} className="form-control" placeholder="Digite o nome do professor" id="nome" required />
                        <div className="invalid-feedback">Digite o nome do professor!</div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="experiencia" className="form-label">Experiência:</label>
                        <input type="number" defaultValue={dataUpdt.experiencia !== undefined ? parseInt(dataUpdt.experiencia) : ''} className="form-control" placeholder='Digite a experiência (anos)' id="experiencia" required />
                        <div className="invalid-feedback">
                            Digite a experiência do professor!
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="salario" className="form-label">Salário Alvo:</label>
                        <input type="number" defaultValue={dataUpdt.salarioalvo !== undefined ? parseFloat(dataUpdt.salarioalvo) : ''} className="form-control" placeholder='R$ 0.00' id="salario" required />
                        <div className="invalid-feedback">
                            Digite o salário do professor!
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="sobre" className="form-label">Sobre:</label>
                        <textarea defaultValue={dataUpdt.sobre !== undefined ? dataUpdt.sobre : ''} className="form-control" placeholder="Digite sobre o professor" id="sobre" required />
                        <div className="invalid-feedback">Digite sobre o professor!</div>
                    </div>

                    <div className="col-md-12">
                        <input type="file" name="prof_img" id='prof_img' className='form-control'/>
                    </div>

                    <div className="col-md-12">
                        <button className="btn btn-submit w-100" type="submit" id='botao'>Enviar</button>
                        <button className="btn btn-primary w-100 mt-2" type="button" onClick={(e)=>{limpaForm()}} id='botao'>Limpar</button>
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
                                                    <td>{obj.experiencia} </td>
                                                    <td>{obj.salarioalvo}</td>
                                                    <td>
                                                        <a style={{ color: "#fff" }} onClick={(e) => { atualizaDataUpdt(obj);}} className="btn btn-primary m-2"><FaPen /></a>
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

        </>
    )
}