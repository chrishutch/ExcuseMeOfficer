import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props =>


    <div class="search-container">

        <form className="search">
            <div className="form-group">
                <label htmlFor="breed">Location:</label>
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
                <button
                    type="submit"
                    onClick={props.handleFormSubmit}
                    className="btn btn-success"
                    id="searchsubmit"
                >
                    <i class="fa fa-search"></i>
                </button>
            </div>
            <datalist id="breeds">
                {props.breeds.map(breed => <option value={breed} key={breed} />)}
            </datalist>





        </form>

    </div>;








export default SearchForm;
