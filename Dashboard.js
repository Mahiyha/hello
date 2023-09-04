import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Link to="/english-quiz" className="game-box">
        <div className="game-box-inner">
          <img src="https://www.wordsinsentences.com/quizgame/assets/logo.png"alt="Game 1" />
          <div className="game-title"></div>
        </div>
      </Link>

      <Link to="/grammar" className="game-box">
        <div className="game-box-inner">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-ozG51yYtw7swE2rvd8GdmL96RLjfGooTA&usqp=CAU" alt="Game 2" />
          <div className="game-title"></div>
        </div>
      </Link>

      <Link to="/puzzlegame" className="game-box">
        <div className="game-box-inner">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrfqHVewEM7MkdlUcT7DRTROUNP-UDLNgaw&usqp=CAU" alt="Game 3" />
          <div className="game-title"></div>
        </div>
      </Link>

      <Link to="/english-quiz" className="game-box">
        <div className="game-box-inner">
          <img src="https://egrammartips.com/wp-content/uploads/2020/02/ten.jpeg" alt="Game 4" />
          <div className="game-title"></div>
        </div>
      </Link>

      <Link to="/english-quiz" className="game-box">
        <div className="game-box-inner">
          <img src="game5-image-url.jpg" alt="Game 5" />
          <div className="game-title">Game 5</div>
        </div>
      </Link>
    </div>
  );
};

export default Dashboard;
