import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    // Entendendo state e Props

    // Id é uma prop, que vem do arquivo  src/pages/index.tsx.
    // Essa props é passada dentro do componente e pode ser acessada
    // como no exemplo abaixo
    const id = props.cliente?.id //Essa props não pode ser alterada, pois é uma informação fixa

    // Os estados são criados dentro do componente, eles são uma constante, porém é possivel
    // alterar o valor deles usando a função que também é declarada dentro do array como abaixo.

    // Neste exemplo o estado é nome e a função que altera esse estado é setNome.
    // Podemos definir o valor inicial de um estado, é só passar o valor dentro o PARENTESES
    // do Hook de useState, como apredentado abaixo. EX: useState('MinhaString')
    const [nome, setNome] = useState(props.cliente?.nome ?? '')

    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Entrada 
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Entrada
                texto="Idade"
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}