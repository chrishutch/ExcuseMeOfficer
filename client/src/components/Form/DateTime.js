import React from "react";

export const DateTime = props => (
<form>
<input type="date" {...props} />
<input type="time" {...props} />
</form>
);