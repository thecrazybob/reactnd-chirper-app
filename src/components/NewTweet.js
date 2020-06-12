import React, { Component } from 'react'
import { handleAddTweet } from '../actions/tweets'
import { connect } from 'react-redux'

class NewTweet extends Component {
    state = {
        text: '',
    }
    handleChange = (e) => {
        const text = e.target.value

        this.setState(() => ({
            text
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state
        const { dispatch, id } = this.props

        dispatch(handleAddTweet(text, id))

        this.setState(() => ({
            text: ''
        }))
    }
    render() {
        const { text } = this.state
        return(
            <div>
                <h3 className='center'>Compose new Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea
                    placeholder="What's happening"
                    value={text}
                    onChange={this.handleChange}
                    className='textarea'
                    maxLength={280} 
                    />
                    <button
                    className='btn'
                    type='submit'
                    disabled={text === ''}
                    >Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet)