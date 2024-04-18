import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <>
      <div className="center-container">
        <div className="big-shrimp">🍤🍤🍤🍤</div>
        <div id="button div">
          <button
            type="button"
            onClick={() => {
              handleNewGame();
            }}
          >
            Create A New Game
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
