import React, { Component } from "react";
import "./Ratings.css";


class Rating extends Component {
constructor(params) {
 super(params)
     this.state = {
       rating: this.props.rating
     }
     this.setRating = this.setRating.bind(this)
};
  setRating(e) {
    this.setState({
      rating: e.target.value
    })
  };

	render() {
		const {rating} = this.state
		return(
		<div className="form-group">
			{/*<fieldset className="rating">
				{[5,4,3,2,1].map(String).map(v => <React.Fragment>
					<input type="radio" id={`star${v}`} value={v} checked={this.state.starChecked === v} onChange={this.handleInputChange} name={this.name}/>
						<label htmlFor={`star${v}`}>{v} stars</label>
				</React.Fragment>)}
			</fieldset>*/}
			<fieldset className="rating">
    <input type="radio" id="star5" name="rating" value="5" checked={rating === '5'} onChange={this.props.setRating} /><label htmlFor="star5" >5</label>
    <input type="radio" id="star4" name="rating" value="4" checked={rating === '4'} onChange={this.props.setRating} /><label htmlFor="star4" >4</label>
    <input type="radio" id="star3" name="rating" value="3" checked={rating === '3'} onChange={this.props.setRating} /><label htmlFor="star3" >3</label>
    <input type="radio" id="star2" name="rating" value="2" checked={rating === '2'} onChange={this.props.setRating} /><label htmlFor="star2" >2</label>
    <input type="radio" id="star1" name="rating" value="1" checked={rating === '1'} onChange={this.props.setRating} /><label htmlFor="star1" >1</label>
</fieldset>
		</div>
		);
	}
} 
export default Rating;