import {Component} from 'react'
import EmojiItem from '../EmojiItem'
import './index.css'

class Feedback extends Component {
  state = {feedbackGiven: false}

  updateStateObj = () => {
    this.setState({feedbackGiven: true})
  }

  render() {
    const {resources} = this.props
    const {feedbackGiven} = this.state
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {!feedbackGiven && (
          <div className="feedback-card">
            <h1 className="question">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(emojiDetails => (
                <EmojiItem
                  key={emojiDetails.id}
                  updateStateObj={this.updateStateObj}
                  details={emojiDetails}
                />
              ))}
            </ul>
          </div>
        )}
        {feedbackGiven && (
          <div className="feedback-card">
            <img src={loveEmojiUrl} className="love-img" alt="love emoji" />
            <h1 className="question">Thank you</h1>
            <p className="msg-text">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
