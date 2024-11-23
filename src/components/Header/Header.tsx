import React from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { logout } from "../../store/slices/authSlice";

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">MyApp</Link>
            </div>
            <nav className={styles.nav}>
                <Link to="/" className={styles.navLink}>Home</Link>
                {!isAuthenticated ? (
                    <Link to="/login" className={styles.navLink}>Login</Link>
                ) : (
                    <Link to="#" onClick={handleLogout} className={styles.navLink}>Logout</Link>
                )}
                <Button onClick={() => console.log("Button cliecked!")}>Click Me</Button>
            </nav>
        </header>
    );
};

export default Header;