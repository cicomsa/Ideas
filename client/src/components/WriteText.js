import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import WriteTextForm from './WriteTextForm'
import {addText, deleteText, fetchTexts} from '../actions/text'

class WriteText extends PureComponent {

    componentWillMount() {
        this.props.fetchTexts()
      }

    addText = (text) => {
        this.props.addText(text)
      }
    
      deleteText = (textId) => {
      this.props.deleteText(textId)
    }

    render() {
        const {texts} = this.props

        const filteredIdea = texts.filter(texts => texts.idea.includes(','))
        const idea = filteredIdea.map(text=><p key={text.id}>{text.idea}</p>)

        const splitedIdea = filteredIdea
            .map(text=>text.idea)
            .map(idea=> idea.split(','))

        const ideaBeforeDot = splitedIdea.map(idea => idea[0])
        const ideaAfterDot = splitedIdea.map(idea => idea[1])
        
        return (
        <div>
            <WriteTextForm onSubmit={this.addText}/> 
            {idea}
            {console.log(ideaAfterDot.map(word=>word.substring((word.lastIndexOf('?')+1), word.indexOf('!'))))}
        </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        texts: state.texts
    }
}
  
export default connect(mapStateToProps, {fetchTexts, addText, deleteText})(WriteText)
