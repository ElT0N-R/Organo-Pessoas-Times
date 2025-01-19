import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import Team from "./components/Teams";

function App() {
  const teams = [
    {
      nome: "Programação",
      primaryColor: "#57C278",
      secundaryColor: "#D9F7E9",
    },
    {
      nome: "Front_End",
      primaryColor: "#82CFFA",
      secundaryColor: "#E8F8FF",
    },
    {
      nome: "Data Science",
      primaryColor: "#A6D157",
      secundaryColor: "#F0F8E2",
    },
    {
      nome: "Devops",
      primaryColor: "#E06B69",
      secundaryColor: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      primaryColor: "#DB6EBF",
      secundaryColor: "#FAE9F5",
    },
    {
      nome: "Mobile",
      primaryColor: "#FFBA05",
      secundaryColor: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secundaryColor: "#FFEEDF",
    }
  ];

  const [employers, setEmployers] = useState([]);

  const atNewEmployerRecord = (employer) => {
    debugger
    setEmployers([...employers, employer]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        Teams={teams.map((team) => team.nome)}
        atEmployerRecord={atNewEmployerRecord}/>

      {teams.map((team) => (
        <Team
          key={team.nome}
          nome={team.nome}
          primaryColor={team.primaryColor}
          secundaryColor={team.secundaryColor}
          employers={employers.filter((employer) => employer.team === team.nome)}
        />
      ))}
    </div>
  );
};

export default App
