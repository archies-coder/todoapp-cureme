import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            isChecked: false
        }
    }

    handleChange = () => {
        this.setState({ isChecked: !this.state.isChecked })
    }

    render() {
        return (
        <li>
            <input type="checkbox" name="setTodo" onChange={this.handleChange}/>
            <span>{this.props.item.todo} Hello</span>
        </li>
        )
    }
}
