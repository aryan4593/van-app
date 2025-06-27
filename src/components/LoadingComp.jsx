import { OrbitProgress } from "react-loading-indicators";

export default function LoadingComp(){
    return (
  <>
    <div className="loading-bar-container">
      <OrbitProgress color="#32cd32" size="medium" text="" textColor="" className="loading-bar"/>
    </div>
  </>
);

}