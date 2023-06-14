import { Link } from "react-router-dom";
import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div>
    <div className="NotFound">
      <h1>404 - Page Not Found!</h1>
        <div className="button">
          <Link to="/">Back</Link>
      </div>
    </div>
    </div>
  );
}
