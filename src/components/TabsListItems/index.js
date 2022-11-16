import './index.css'

const TabsListItems = props => {
  const {name, details, tabsChanging} = props
  const {tabId} = details

  const onTabChange = () => {
    tabsChanging(tabId)
  }

  return (
    <li className="tabs-list-items" onClick={onTabChange}>
      <button type="button" id="list-buttons">
        {name}
      </button>
      {/* <hr className="hr-line" /> */}
    </li>
  )
}

export default TabsListItems
