//Import of React
import React, { useEffect } from "react";

//Import of MapView
import MapView from "react-native-maps";

//Import of Marker
import { Marker } from "react-native-maps";

//Import of components for Location and Permissions
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

/* ASKS PERMISSIONS FOR LOCALISATION

export default function ResearchScreen() { 
    useEffect(() => {
    async function askPermissions() {
    var { status } = await Permissions.askAsync(Permissions.LOCATION); if (status === 'granted') {
    var location = await Location.getCurrentPositionAsync({}); }
    }
    askPermissions(); }, []);
    return ( <View>
    ...
    </View>
    ); }
*/
