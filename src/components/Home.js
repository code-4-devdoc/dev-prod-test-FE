import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Home = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        if (isAuthenticated) {
            navigate('/resume'); // 화면4로 이동
        } else {
            navigate('/login'); // 화면2로 이동
        }
    };

    return (
        <div className="home">
            <h1>Welcome to Resume Service</h1>
            <button onClick={handleLoginClick}>Login</button>
        </div>
    );
};

export default Home;

