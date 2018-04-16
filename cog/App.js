import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,Image, ScrollView,ImageBackground,Dimensions} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import {DrawerNavigator} from 'react-navigation';
import Introduction from './js/Introduction';
import Index from './js/Index';
import contact from './js/contact';
import Date from './js/Date';
import call_for_papers from './js/Call_for_papers/call_for_papers';
import Submission from './js/Submission/Submission';
import submit from './js/Submission/submit';
import venue from './js/local/venue';
import program from './js/program/program';
import sponsor from './js/sponsor/sponsor';
import registration from './js/registration';
import login from './js/login';
 export default App = StackNavigator({
  Index:{screen: Index},
  Introduction : { screen: Introduction},
  contact : { screen: contact},
  Date : { screen: Date},
  call_for_papers  : { screen: call_for_papers},
  Submission:{screen:Submission},
  submit:{screen:submit},
  venue:{screen:venue},
  program:{screen:program},
  sponsor:{screen:sponsor},
  login:{screen:login},
  registration :{screen:registration} ,
});


 const styles = StyleSheet.create({
    bt: {
        backgroundColor:'#6699cc',
        alignItems: 'center',
        textAlign:'center',
        justifyContent: 'center',
        borderColor: '#495A80',
        borderWidth:1,
        fontSize: 20,
        paddingTop:40,
        // borderRadius: 5,
        margin: 5,
        width: Dimensions.get('window').width/2-10, height: 100,
        padding: 10
    } ,

    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },


});
