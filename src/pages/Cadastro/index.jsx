import './style.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Menu } from '../../components/Menu';
import { FaTrashAlt } from "react-icons/fa";

export const Cadastro = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        listar();
    }, [])

    const listar = () => {
        axios.get('http://localhost:3333/professores')
            .then((res) => {
                setData(res.data)
            })
    }

    const deletar = (id) => {
        axios.delete('http://localhost:3333/professores/' + id)
            .then((res) => {
                listar()
            })
    }

    return (
        <>
            <Menu></Menu>
            <div className="container">
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
                                                    <td>{obj.experiencia}</td>
                                                    <td>{obj.salarioalvo}</td>
                                                    <td>
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