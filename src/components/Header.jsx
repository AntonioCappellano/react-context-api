import { NavLink } from "react-router-dom";
import { useBudget } from "../Context/BudgetContext";

export default function Header() {
  const { budgetMode, setBudgetMode } = useBudget();
  const buttonText = budgetMode ? "Budget Off" : "Budget On";
  return (
    <nav className="bg-body-tertiary navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="nav-link" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about-us">
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Prodotti
              </NavLink>
            </li>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => setBudgetMode(!budgetMode)}
              >
                {buttonText}
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
