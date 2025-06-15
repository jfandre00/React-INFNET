import BackLink from "../TP1/BackLink"
import "./Ex01.css"

function Saudacao({ nome }) {
  return <h2 className="saudacao">Olá, {nome}! Seja bem-vindo.</h2>;
}

export default function Ex01({ voltar }) {
  return (
    <div className="container-ex01">
      <Saudacao nome="André" />
      <Saudacao nome="Denise" />
      <Saudacao nome="Bento" />
        <BackLink voltar={voltar} />
    </div>
  );
}
