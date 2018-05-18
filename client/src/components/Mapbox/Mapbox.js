import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoianJvdHRlIiwiYSI6ImNqZ2psb2dsMzEwdmEycW1qZjVrZjVzeWYifQ.qJRu5hRNPX7qyHeGsIK1BA"
});
export class Mapbox extends React.Component {
render() {
    return (
<Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: "30vw",
    width: "35vw"
  }}>
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[-87.67526699999996, 42.0564594]}/>
    </Layer>
</Map>
);
}
}

export default Mapbox;