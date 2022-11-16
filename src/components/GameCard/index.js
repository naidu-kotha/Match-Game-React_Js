import TabsListItems from '../TabsListItems'
import ListItems from '../ListItems'
import './index.css'

const GameCard = props => {
  const {displayImg, altImage, results, tabsList, tabsChanging} = props
  return (
    <div className="bg-game-container">
      <img src={displayImg} alt={altImage} className="display-image" />
      <ul className="buttons-container">
        {tabsList.map(each => (
          <TabsListItems
            name={each.displayText}
            key={each.tabId}
            details={each}
            tabsChanging={tabsChanging}
          />
        ))}
      </ul>
      <ul className="list-items-container">
        {results.map(eachItem => (
          <ListItems details={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default GameCard
