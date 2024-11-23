import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { loginAsync, logout } from "../../store/slices/authSlice";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, error } = useAppSelector((state) => state.auth);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        // Redirect to dashboard if authenticated
        if (isAuthenticated) {
            navigate("/dashboard")
        }
    }, [isAuthenticated, navigate]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginAsync({ username, password }));
    }

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{isAuthenticated ? "Welcome" : "Login"}</h2>
            {!isAuthenticated ? (
                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username" className={styles.label}>Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input
                            type="text"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <Button type="submit" className={styles.button}>Login</Button>
                    {error && <p className={styles.error}>{error}</p>}
                </form>
            ) : (
                <Button onClick={handleLogout} className={styles.button}>Logout</Button>
            )}
        </div>
    );
};

export default Login;