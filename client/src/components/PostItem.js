import React, { Component } from "react";

class PostItem extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({title: e.target.value});
    }

	render() {
		return (
			<div>
				<form onSubmit={this.props.postItem.bind(this, this.state.title)} className="form-inline">
					<input
						type="text"
						value={this.state.title}
						className="form-control"
                        placeholder="Add Item"
                        onChange={this.onChange}
					/>
					<button type="submit" className="btn btn-success">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default PostItem;
