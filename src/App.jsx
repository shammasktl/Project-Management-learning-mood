import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import SideBar from "./Components/SideBar";

function App() {
  const [projectsState,setProjectsState] = useState({
    selectedProjecId: undefined,
    projects: []
  });

  return (
    <main className="min-h-screen flex gap-10">
      <SideBar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
