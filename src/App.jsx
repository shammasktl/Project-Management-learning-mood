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
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        projects: [prevState.projects,]
      }
    })
  }

  console.log(projectsState)
  let projectContent;

  if (projectsState.selectedProjecId === undefined) {
    projectContent = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  else if (projectsState.selectedProjecId === null) {
    projectContent = <NewProject onAdd={handleAddProject}/>
  }

  return (
    <main className="min-h-screen flex gap-10">
      <SideBar onStartAddProject={handleStartAddProject}/>
      {projectContent}
    </main>
  );
}

export default App;
