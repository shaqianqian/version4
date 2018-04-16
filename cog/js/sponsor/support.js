import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, ScrollView, WebView, Linking, Dimensions,NetInfo} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';

class support extends React.Component {
    static navigationOptions = {
        title: 'THE SUPPORT ICEASSM 2017 ',
    };



    render() {

        const uri = 'http://iceassm.org/sponsor/they-support-iceassm2017';
        return (
            <WebView
                ref={(ref) => { this.webview = ref; }}
                source={{ uri } }
                style={{height:Dimensions.get('window').height,weight:Dimensions.get('window').width}}
                onNavigationStateChange={(event) => {
                    if (event.url !== uri) {
                        this.webview.stopLoading();
                        Linking.openURL(event.url);
                    }
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color:'#0066cc'

    },
    text_c: {
        paddingBottom:5,
        fontSize:13,
        textAlign: 'left'

    },
    text_r: {
        paddingBottom:5,
        fontSize:15,
        color:'red',
        textAlign: 'left',
    },



});

export default support;
