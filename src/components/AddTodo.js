import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({title: ''})
    }
    onChange = (e) => this.setState({ [e.target.name]:e.target.value });
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex' }}>
                <input type="text" name="title"value={this.state.title} onChange={this.onChange} style={{flex:'10', padding: '5px'}} placeholder="Add Todo .." />
                <input type="submit" value="submit" name="submit" className="btn" style={{flex: '1'}} />
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,    
    markComplete: PropTypes.func.isRequired,   
    delTodo: PropTypes.func.isRequired,    
}
export default AddTodo
