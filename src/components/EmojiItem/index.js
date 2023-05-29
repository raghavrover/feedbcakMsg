import './index.css'

const EmojiItem = props => {
  const {details, updateStateObj} = props
  const {name, imageUrl} = details
  const showThankYouMsg = () => {
    updateStateObj()
  }

  return (
    <li className="list-item">
      <button className="feedback-btn" type="button" onClick={showThankYouMsg}>
        <img src={imageUrl} alt={name} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiItem
