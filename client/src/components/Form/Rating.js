import React, { Component } from "react";
import "./Ratings.css";


class Rating extends Component {


	render() {

		return(
		<div className="form-group">
			<fieldset className="rating">
				{[5,4,3,2,1].map(String).map(v => <React.Fragment key={v}>
					<input type="radio" id={`star${v}`} value={v} checked={this.props.value === v} onChange={this.props.onChange} name={this.props.name}/>
						<label htmlFor={`star${v}`}>{v} stars</label>
				</React.Fragment>)}
			</fieldset>

		</div>
		);
	}
} 
export default Rating;