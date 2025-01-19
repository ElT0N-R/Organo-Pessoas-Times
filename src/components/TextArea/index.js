import "./texts.css";

const TextArea = (props) => {
  const Writen = (event) => {
    props.atAlt(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        rtype="text"
        value={props.valor}
        onChange={Writen}
        required={props.mandatory}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextArea;
