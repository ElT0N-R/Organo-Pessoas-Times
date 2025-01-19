import "./listSus.css";

const ListSus = (props) => {
  return (
    <div className="listSusp">
      <label>{props.label}</label>
      <select
        value={props.valor}
        onChange={(event) => props.atAlt(event.target.value)}
      >
        <option value="">Selecione um time</option>
        {props.itens.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListSus;
