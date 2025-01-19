
import Employer from "../Employer";
import "./teams.css";


const Team = (props) => {
  return (
    <section className="team" style={{ backgroundColor: props.secundaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
      <Employer />
    </section>
  );
};

export default Team;
