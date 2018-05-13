import React from "react";
import "./Ratings.css";

export const Ratings = props => (
<fieldset className="rating">
    <input type="radio" id="star5" value={this.value} {...props} /><label htmlFor="star5">5</label>
    {/*<input type="radio" id="star4" name="rating" value="4" {...props} /><label htmlFor="star4">4</label>
    <input type="radio" id="star3" name="rating" value="3" {...props} /><label htmlFor="star3">3</label>
    <input type="radio" id="star2" name="rating" value="2" {...props} /><label htmlFor="star2">2</label>
    <input type="radio" id="star1" name="rating" value="1" {...props} /><label htmlFor="star1">1</label>*/}
</fieldset>
);