import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import SideBar from "./Components/SideBar";

function App() {
  const [projectsState,setProjectsState] = useState({
    selectedProjecId: undefined,
    projects: []
  });

  const handleStartAddProject = () => {
    setProjectsState(prevState =>  {
      return {
        ...prevState,
        selectedProjecId: null,

      }
    })
  }

  const handleAddProject = (projectData) => {
    setProjectsState(prevState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjecId: undefined,
        projects: [prevState.projects, newProject],
      }
    })
  }

  let projectContent;

  if (projectsState.selectedProjecId === undefined) {
    projectContent = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  else if (projectsState.selectedProjecId === null) {
    projectContent = <NewProject onAdd={handleAddProject}/>
  }

  return (
    <main className="min-h-screen flex gap-10">
      <SideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {projectContent}
    </main>
  );
}

export default App;
