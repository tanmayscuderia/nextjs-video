import Player from "./Player"
import SideVideoComponent from "./SideVideoComponent";
import './Body.css';

function Body() {
  return (
    <div className="col-span-6 relative min-h-screen z-0">
      <div className="flex min-h-screen body-container">
         <div className="sidebar-container">
          <SideVideoComponent /> 
         </div>
         <div className="">
          <Player />
        </div>
      </div>      
    </div>
  )
}

export default Body