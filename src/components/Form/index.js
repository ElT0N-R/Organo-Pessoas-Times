import { useState } from "react";
import Button from "../Button";
import TextArea from "../TextArea";
import ListSus from "../ListSus";
import "./form.css";



const Form = (props) => {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const Save = (event) => {
    event.preventDefault()
    props.atEmployerRecord({
      nome,
      cargo,
      imagem,
      team: time,
    });

    // Resetando os campos do formulário após salvar
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="form">
      <form onSubmit={Save}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        
        <TextArea
          mandatory={true}
          label="Nome"
          placeholder="Digite seu Nome"
          valor={nome}
          atAlt={(valor) => setNome(valor)}
        />

        <TextArea
          mandatory={true}
          label="Cargo"
          placeholder="Digite seu Cargo"
          valor={cargo}
          atAlt={(valor) => setCargo(valor)}
        />

        <TextArea
          label="Imagem"
          placeholder="Digite o endereço da Imagem"
          valor={imagem}
          atAlt={(valor) => setImagem(valor)}
        />

        <ListSus
          mandatory={true}
          label="Time"
          itens={props.Teams}
          valor={time}
          atAlt={(valor) => setTime(valor)}
        />

        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form
