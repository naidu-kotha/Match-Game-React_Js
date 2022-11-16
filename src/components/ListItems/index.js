import './index.css'

const ListItems = props => {
  const {details, onChangeImage} = props
  const {thumbnailUrl, id} = details

  const onClickItem = () => {
    onChangeImage(id)
  }

  return (
    <li>
      <button type="button" className="b" onClick={onClickItem}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ListItems
