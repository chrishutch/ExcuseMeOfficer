import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props =>

       <div className="search-container">
        <form className="col-lg-16">
            <label htmlFor="breed"></label>
            <div className="input-group mb-3">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="breed"
                    list="breeds"
                    type="text"
                    className="form-control"
                    placeholder="Search by Zip Code"
                    id="homesearch"
                    aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                    <button
                        type="submit"
                        onClick={props.handleFormSubmit}
                        className="btn btn-success"
                        id="searchsubmit">
                        <i className="fa fa-search fa-lg"></i>
                    </button>
                </div>
            </div>





        </form>

    </div>;

export default SearchForm;
