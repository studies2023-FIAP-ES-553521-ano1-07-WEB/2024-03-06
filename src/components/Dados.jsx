import {} from 'react';

function Dados(props) {
    return (
        <>
            <p>O Nome do Usuário é: {props.nome}</p>
            <p>O Email é: {props.email}</p>
        </>
    )
}

export default Dados;