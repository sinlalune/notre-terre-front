//Import of React
import React, { useState, useEffect } from "react";

//Import of MapView and Marker
import MapView, { Marker } from "react-native-maps";

// Import Input
import {Input, Button} from 'react-native-elements';

// Import of ScrollView
import {ScrollView} from 'react-native';

//Import of components for Location and Permissions
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import { View, Text  } from 'react-native';

// Import of Icons
import {Ionicons} from '@expo/vector-icons';

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

    <MapView style={{ flex: 1, marginLeft: 10, marginRight: 10}}
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
<ScrollView style={{ marginTop: 10, flex: 3}}>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>      
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>      
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>      
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>
            <Text>Resultats</Text>      
            <Text>Resultats</Text>
      
            {/* {cardList} */}
</ScrollView>
</>
    ); }


// <Button title="Filter" icon={<Ionicons name="options" size={20} color="#0CA789" />}></Button> TO PUT AFTER INPUT
