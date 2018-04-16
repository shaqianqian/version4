import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, ScrollView, WebView, Linking, Dimensions} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';


class about_acca extends React.Component {
    static navigationOptions = {
        title: 'About Accra ',
    };


    render() {

        const uri = 'http://iceassm.org/local-information/about-accra';
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

export default about_acca;
