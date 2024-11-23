import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the Dashboard!</p>
        </div>
    );
};

export default Dashboard;