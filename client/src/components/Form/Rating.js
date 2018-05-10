import React, { Component } from "react";
import "./Ratings.css";


class Rating extends Component {

	handleInputChange = event => {
	    const { name, value } = event.target;
	};

	render() {
		return(
		<div className="form-group">
			<fieldset className="rating">
				{[5,4,3,2,1].map(String).map(v => <React.Fragment>
					<input type="radio" id={`star${v}`} value={v} checked={this.value===v} onChange={this.handleInputChange} name={this.name}/>
						<label htmlFor={`star${v}`}>{v} stars</label>
				</React.Fragment>)}
			</fieldset>
		</div>
		);
	}
} 
export default Rating;