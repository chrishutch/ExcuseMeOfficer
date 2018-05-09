import React from "react";
import "./Rating.css";

export const Rating = props => (
	<div className="form-group">
<fieldset className="rating">
{[5,4,3].map(String).map(v => <React.Fragment>
	<input type="radio" id={`star${v}`} value={v} checked={props.value===v} onChange={props.onChange} name={props.name}/>
	<label htmlFor={`star${v}`}>{v} stars</label>
</React.Fragment>)}
  
</fieldset>
</div>
);