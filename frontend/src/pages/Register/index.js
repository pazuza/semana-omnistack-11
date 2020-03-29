import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api"
import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function Register() {
    //Tem dois parâmetros, um é o valor e o outro é para ouvir a mudança de estado
    const [name, setName]         = useState("");
    const [email, setEmail]       = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity]         = useState("");
    const [uf, setUf]             = useState("");

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault(); //Para não carregar a página

        const infoCadastro = {name, email, whatsapp, city, uf};

        try {
            const response = await api.post("ongs", infoCadastro);
            /**
             * Nome da rota no api.post não precisa da /
             * 
             * Axios já faz a conversão para JSON
             */
    
             alert(`Seu ID de acesso: ${response.data.id}`);

             history.push("/");
        } catch(error) {
            alert(`Não foi possível realizar seu cadastro no momento, ${infoCadastro.name}`);
        };
    };

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder = "Nome da ONG"
                        value       = {name}
                        onChange    = {e => setName(e.target.value)}
                    />
                    <input 
                        type        = "email"
                        placeholder = "E-mail"
                        value       = {email}
                        onChange    = {e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder = "WhatsApp"
                        value       = {whatsapp}
                        onChange    = {e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder = "Cidade"
                            value       = {city}
                            onChange    = {e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder = "UF"
                            style       = {{ width: 80 }}
                            value       = {uf}
                            onChange    = {e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}