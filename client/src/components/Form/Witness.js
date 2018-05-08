import React from "react";

export const Witness = props => (
	<div className="form-group">
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="witness" id="witness_true" value="true" {...props} />
  <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="witness" id="witness_false" value="false" {...props} />
  <label className="form-check-label" htmlFor="witness_false">No</label>
</div>
</div>
  );