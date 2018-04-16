
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView,NetInfo} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';


export default class submit extends React.Component {

    static navigationOptions = {
        title: 'submit',
    };

    render() {

        return (
              <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>

                <Text style={styles.text_c}>
                    If you wish to submit a paper to ICEASSM 2017, you should use this EasyChair website and specify the track of your paper
                    so it can be reviewed by the appropriate track PC and its reviewers.{'\n'}
                    If there is any problem during the submission process, please send an email to submissions@iceassm.org
                </Text>

            </ScrollView>
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


});


