import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground source={require('../assets2/stars.gif')} style={styles.backgroundImage}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}>Stellar App</Text>
                        </View>
                        <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SpaceCrafts")}>  
                        
                        <Text style={styles.routeText}>Space Crafts</Text>
                        <Image source={require("../assets2/space_crafts.png")} style={styles.iconImage}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("StarMaps")}>  
                        
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image source={require("../assets2/star_map.png")} style={styles.iconImage}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailyPics")}>  
                        
                        <Text style={styles.routeText}>Daily Pic</Text>
                        <Image source={require("../assets2/daily_pictures.png")} style={styles.iconImage}></Image>
                        </TouchableOpacity>

                    </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#bfd8ff",
        marginTop: 140,
        paddingLeft: 30
    },
    iconImage: {
        position: "absolute",
        height: 180,
        width: 100,
        marginTop:150,
        resizeMode: "contain",
        right: 30,
        top: -80
    }

})