import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ProjectDetails from "./components/ProjectDetails";
import ProjectHeader from "./components/ProjectHeader";
import ProjectMetaData from "./components/ProjectMetaData";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div className="wrapper">
        <ProjectHeader />
        <ProjectMetaData />
        <ProjectDetails />
      </div>
    </div>
  );
}

export default App;
