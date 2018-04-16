
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView,NetInfo} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';
import { MenuProvider } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';



export default class Submission extends React.Component {

    static navigationOptions = {
        title: 'Submission',
    };

    render() {

        return (
             
              <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>
                <Text style={styles.text_c}>

                      If you wish to submit a paper to ICEASSM '2017', you should use this EasyChair website and specify the track of
                      your paper so it can be reviewed by the appropriate track PC and its reviewers.{'\n'}
                    {'\n'}
                      If there is any problem during the submission process, please send an email to submissions'@'iceassm.org

                </Text>


                <Text style={styles.bt}

                      onPress={() =>
                        this.props.navigation.navigate('submit')
                      } >Submit
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
    bt: {
        backgroundColor:'#6699cc',
        alignItems: 'center',
        textAlign:'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#495A80',
        borderRadius: 5,
        margin: 5,
        padding: 10
    } ,


});





