import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, View, Button, ScrollView, Image, Dimensions, WebView,
    Linking} from 'react-native';
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


export default class program extends React.Component  {
    static navigationOptions = {
        title: 'program',
    };


    render() {
        const uri = 'http://centre2018.iosea.org/program';
        return (

            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>
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


  </MenuProvider>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        textAlign: 'left',
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


  menu: {

        width: Dimensions.get('window').width, height: 15,



    } ,
});
