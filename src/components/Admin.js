import "../App.css"
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="Admin">
      <ul>Get the full list of items</ul>
      <ul>Get a specific item</ul>
      <ul>Get a number of items in rent by date</ul>
      <div className="button">
          <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default Admin;
