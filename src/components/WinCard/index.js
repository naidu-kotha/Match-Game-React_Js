import './index.css'

const WinCard = props => {
  const {score, startGame} = props

  const resetGame = () => {
    startGame()
  }
  return (
    <div className="win-card-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="win-img"
      />
      <p className="win-heading">YOUR SCORE</p>
      <p className="win-score">{score}</p>
      <div>
        <button type="button" className="play-again-button" onClick={resetGame}>
          <span>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset-img"
            />
          </span>
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default WinCard
