import React from "react";
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import { classnames } from './helpers';
import "./SearchForm.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      errorMessage: '',
      latitude: null,
      longitude: null,
      isGeocoding: false,
    };
  }

  handleChange = address => {
    this.setState({
      address,
      latitude: null,
      longitude: null,
      errorMessage: '',
    });
  };

  handleSelect = selected => {
    this.setState({ isGeocoding: true });
    geocodeByAddress(selected)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        this.setState({
          latitude: lat,
          longitude: lng,
          isGeocoding: false,
        });
      })
      .catch(error => {
        this.setState({ isGeocoding: false });
        console.log('error', error);
      });
  };

  handleCloseClick = () => {
    this.setState({
      address: '',
      latitude: null,
      longitude: null,
    });
  };

  handleError = (status, clearSuggestions) => {
    console.log('Error from Google Maps API', status);
    this.setState({ errorMessage: status }, () => {
      clearSuggestions();
    });
  };

  render() {
    const {
      address,
      errorMessage,
      latitude,
      longitude,
      isGeocoding,
    } = this.state;

    return (
      <div>
        <PlacesAutocomplete
          onChange={this.handleChange}
          value={address}
          onSelect={this.handleSelect}
          onError={this.handleError}
          shouldFetchSuggestions={address.length > 2}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => {
                    return (
               
                        <div className="search-bar-container">
                    <div className="search-input-container">
                        <div className="input-group mb-3">
                  <input
                    {...getInputProps({
                        placeholder: 'Search by Zip Code',
                        className: 'search-input form-control',
                        id:"homesearch"
                    })}
                    />
                    <div class="input-group-append">
                        <button id="homesearchbutton"
                            className="btn btn-success form-control"
                            onClick={this.handleSelect}
                        >
                            <i class="fa fa-search fa-md"></i>
                        </button>
                    </div>
                </div>
            </div>

                    {/*Search Address Suggestions*/}

            {suggestions.length > 0 && (
                <div className="autocomplete-container">
                {suggestions.map(suggestion => {
                    const className = classnames('suggestion-item', {
                    'suggestion-item--active': suggestion.active,
                    });

                    return (
                    <div
                        {...getSuggestionItemProps(suggestion, { className })}
                    >
                        <strong>
                        {suggestion.formattedSuggestion.mainText}
                        </strong>{' '}
                        <small>
                        {suggestion.formattedSuggestion.secondaryText}
                        </small>
                    </div>
                    );
                })}

                </div>
                )}


              </div>
            );
          }}
        </PlacesAutocomplete>
        {errorMessage.length > 0 && (
          <div className="error-message">{this.state.errorMessage}</div>
        )}

        {((latitude && longitude) || isGeocoding) && (
          <div>
            <h3 className="geocode-result-header">Geocode result</h3>
            {isGeocoding ? (
              <div>
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw spinner" />
              </div>
            ) : (
              <div>
                <div className="geocode-result-item--lat">
                  <label>Latitude:</label>
                  <span>{latitude}</span>
                </div>
                <div className="geocode-result-item--lng">
                  <label>Longitude:</label>
                  <span>{longitude}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default SearchForm;
