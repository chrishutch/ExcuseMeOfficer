import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props =>

    <div className="search-container">
        <form className="col-lg-16">
            <label htmlFor="breed">Location:</label>
            <div className="input-group">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="breed"
                    list="breeds"
                    type="text"
                    className="form-control"
                    placeholder="Type in a location to search"
                    id="breed"
                />
                <span class="input-group-btn">
                <button
                    type="submit"
                    onClick={props.handleFormSubmit}
                    className="btn btn-success"
                    id="searchsubmit">
                    <i class="fa fa-search"></i>
                </button>
                </span>
                <datalist id="breeds">
                    {props.breeds.map(breed => <option value={breed} key={breed} />)}
                </datalist>
            </div>
     
        </form>

    </div>;

export default SearchForm;
