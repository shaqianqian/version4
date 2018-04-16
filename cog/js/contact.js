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


export default class contact extends React.Component {

    static navigationOptions = {
        title: 'contact',
    };

    render() {

        return (
               <MenuProvider >
            <View style={styles.menu}>
                <Menu>
              <MenuTrigger text='Menu' />
             <MenuOptions style={{ backgroundColor:'#E0E0E0',}}>
              <MenuOption onSelect={() => this.props.navigation.navigate('Introduction')} text='Introduction' />
              <MenuOption onSelect={() => this.props.navigation.navigate('Submission')} text='Submission' />
              <MenuOption onSelect={() => this.props.navigation.navigate('venue')} text='venue' />
               <MenuOption onSelect={() => this.props.navigation.navigate('contact')} text='contact' />
              <MenuOption onSelect={() => this.props.navigation.navigate('call_for_papers')} text='call_for_papers' />
              <MenuOption onSelect={() => this.props.navigation.navigate('program')} text='program' />
               <MenuOption onSelect={() => this.props.navigation.navigate('registration')} text='registration' />
               <MenuOption onSelect={() => this.props.navigation.navigate('sponsor')} text='sponsor' />
             </MenuOptions>
              </Menu>
          </View>
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>
                 <Text style={styles.text_c}>
                    General chair: contact@iceassm.org{'\n'}{'\n'}

                    Sponsor chair: sponsor@iceassm.org{'\n'}{'\n'}

                    Webmaster:  webmaster@iceassm.org
                </Text>
            </ScrollView>
               </MenuProvider >

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
