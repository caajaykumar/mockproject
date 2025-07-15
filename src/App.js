
// import HeroCard from './components/HeroCard';
// import InfoSection from './components/InfoSection';
// import ClaimForm from './components/ClaimForm';

import ClaimForm from "./components/ClaimForm";
import HeroCard from "./components/HeroCard";
// import "./App.css";

function App() {
  return (
    <>
       <div class="container ">
        <div class="row g-4  justify-content-center">
           <HeroCard/>

           <ClaimForm/>

        </div>

        </div>
       
    </>
  );
}

export default App;