import "../App.css"
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Welcome to the IT-Box Admin Panel!
        </h2>
         <div className="button">
          <Link to ="/admin">Enter as Admin</Link>
         </div>
      </header>
    </div>
  );
}

export default Main;
