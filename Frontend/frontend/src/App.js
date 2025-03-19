import './App.css';
import Maintenance from './Components/MaintainForm';


function App() {
return(
    <div className = "App">
        <header className = "App-header">
            <h1>Maintenance and complaint</h1>
            <button className="Maintain-button">MAINTENANCE</button>


            <div>
                 <Maintenance />
            </div>

        </header>


    </div>
)





}

export default App;
