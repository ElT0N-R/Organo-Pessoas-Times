import Employer from "../Employer";
import "./teams.css";

const Team = (props) => {
  const css = { backgroundColor: props.secundaryColor };

  return (
    (props.employers.length > 0) ?
    <section className="team" style={css}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>

      <div className="employers">
        {props.employers.map((employer, index) => (
          <Employer
            color={props.primaryColor}
            key={index}
            nome={employer.nome}
            cargo={employer.cargo}
            imagem={employer.imagem}
          />
        ))}
      </div>
    </section>
    : null
  );
};

export default Team;
