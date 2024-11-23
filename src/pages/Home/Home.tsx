import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard")
        }
    },[isAuthenticated, navigate]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to Our App!</h1>
            <p className={styles.description}>This is the home page of your React app configured with TypeScript, Redux, and PWA support.</p>
        </div>
    );
};

export default Home;