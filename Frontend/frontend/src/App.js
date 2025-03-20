import './App.css';
import Header from  './Components/Header';
import Maintenance from './Components/MaintainForm';


function App() {
return(
  <div className="App">
    <header className="App-header">
        <hi>Maintenance and Complaints</hi> 
 <button className="Maintain-button">Maintain</button>

    </header>

 
            <div>
                <Header /> 
                <br /> <br />
                 <Maintenance />
            </div>
  </div>


);


}

export default App;
