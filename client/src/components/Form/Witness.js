import React from "react";

export const Witness = props => (
	<div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="true" {...props} />
  <label className="form-check-label" for="inlineRadio1">Yes</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="false" {...props} />
  <label className="form-check-label" for="inlineRadio2">No</label>
</div>
</div>
  );