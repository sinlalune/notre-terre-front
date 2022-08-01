//Import of React
import React, { useState, useEffect } from "react";

//Import of MapView and Marker
import MapView, { Marker } from "react-native-maps";

// Import Input
import {Input} from 'react-native-elements'

//Import of components for Location and Permissions
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import { View, Text  } from 'react-native';


// ASKS PERMISSIONS FOR LOCALISATION

export default function ResearchScreen() { 
    const [currentLatitude, setCurrentLatitude] = useState(0);
    const [currentLongitude, setCurrentLongitude] = useState(0);  

    useEffect(() => {
        async function askPermissions() {
          let { status } = await Permissions.askAsync(Permissions.LOCATION);
          if (status === 'granted') {
            Location.watchPositionAsync({ distanceInterval: 2 },
              (location) => {
                setCurrentLatitude(location.coords.latitude)
                setCurrentLongitude(location.coords.longitude);
              }
            );
          }
        }
        askPermissions();
      }, []);

      console.log("This is the user position", currentLatitude, currentLongitude)



    return ( 
    <>
<Input
      containerStyle = {{marginBottom: 10, width: '70%'}}
      inputStyle={{marginLeft: 10}}
      placeholder='Fraise, Paris ...'
  /> 
    <MapView style={{ flex: 1 }}
    region={{
        latitude: currentLatitude,
        longitude: currentLongitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }}> 
        <Marker 
        coordinate={{latitude: currentLatitude, longitude: currentLongitude}}
        title="Your Position"
        description="You are here" />
</MapView>
</>
    ); }

