import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import WebView from 'react-native-webview';

export default class StarMapScreen extends Component{
    constructor(){
        super();
        this.state={
            latitude:"",
            longitude:""
        }
    }
   
    render(){
        const {longitude,latitude}=this.state;
        const path= 'https://virtualsky.lco.global/embed/index.html?longitudee = S{longitude}&latitude=S{latitude}&constellaions=true&constellationlabels = true&showstarlabels=true&girdlines_az=true&live=true&projection=stereo&showdate=false&showposition=false'

        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <WebView
                    scalesPageToFit={true}
                    source={{uri:path}}
                    style={{marginTop:20,marginBottom:20}}
                />
                <TextInput 
                    style = {{height:40,borderColor:'gray',borderWidth:1}}
                    placeholder="Enter your latitude"
                    placeholderTextColor='#ffff#000000'
                    onChangeText={(text)=>{
                        this.setState({
                            latitude:text
                        })
                    }}
                />
                <TextInput 
                    style = {{height:70,borderColor:'gray',borderWidth:1}}
                    placeholder="Enter your longitude"
                    placeholderTextColor='#ffff#000000'
                    onChangeText={(text)=>{
                        this.setState({
                            longitude:text
                        })
                    }}
                />
                
            </View>
        );
    }
}