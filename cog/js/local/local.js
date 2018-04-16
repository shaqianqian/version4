import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';


class local extends React.Component {
    static navigationOptions = {
        title: 'Local Information',
    };


    render() {

        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>

                <Text style={styles.text_c}>
                    ICEASSM’2017 will take place in Accra, the capital of Ghana. Ghana  is the only country in the world
                    close to the equator and with the Greenwich Meridian  passing through, it is said to be the Centre of
                    the whole World.{'\n'}
                    {'\n'}
                    Ghana gained  independence from the British on the 6th of March 1957. The capital is
                    Accra and thrives on gold and cocoa as exports. Ghana discovered oil a few years ago and this is
                    supposed to boost the economy. It is currently a lower middle income country.{'\n'}

                </Text>
                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('about_acca')

                      } >ABOUT ACCRA

                </Text>
                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('venue')
                      } >Venue
                </Text>
                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('Acco')
                      } >Accommodation
                </Text>
                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('visa')
                      } >Visa
                </Text>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'left',
        color:'red'

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

export default local
