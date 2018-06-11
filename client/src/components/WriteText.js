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
    
        return (
        <div>
            <WriteTextForm onSubmit={this.addText}/> 
            {texts.map(text=><p key={text.id}>{text.idea}</p>)}
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
