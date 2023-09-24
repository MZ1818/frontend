import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import { ToggleButton } from "@mui/material";
import { Button } from "@mui/material";
import { logout } from "../../utlis/utils";

//links for all the components
const links = [
  { href: "/", label: "HOME" },
  { href: "/workspaces", label: "WORKSPACES" },
  { href: "/tasks", label: "TASKS" },
  { href: "/notes", label: "NOTES" },
];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  //for toggle button to open and close
  const ToggleOpenMenu = () => {
    setOpen((prevState) => !prevState);
  };

  const menuStyles = open ? "menu open" : "menu";

  //to is the props used to map the abive links through href declared above and label too
  return (
    <div className="navbar">
      <div className="brand">
        <span className="c_left">C</span>
        <span className="y_left">Y</span>
      </div>
      {localStorage.getItem("authToken") ? (
        <div className={menuStyles}>
          <ul>
            {links.map((item) => (
              <li key={item.href} onClick={ToggleOpenMenu}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Button
            onClick={logout}
            style={{ marginLeft: "10px" }}
            variant="contained"
          >
            Logout
          </Button>
        </div>
      ) : (
        ""
      )}
      <div className="hamburger">
        <Menu onClick={ToggleOpenMenu} />
      </div>
    </div>
  );
};

export default Navbar;
