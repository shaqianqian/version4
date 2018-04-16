import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,Image, ScrollView,ImageBackground,Dimensions,TouchableOpacity} from 'react-native';
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


export default class Intex extends React.Component{
  constructor(props){
    super(props);

  }
      static navigationOptions = {
        title: 'Index',
    };

    render() {
        return (

            <MenuProvider >

            <View style={styles.menu}>
                <Menu >
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
           <View  style={{flex: 1, flexDirection: 'row',backgroundColor:'#ffffff',
               justifyContent: 'flex-start', }}>


            <View >



            <Text style={styles.bt}

                     onPress={() =>
                    this.props.navigation.navigate('Introduction')

                     } >Home


            </Text>
             <Text style={styles.bt}

                 onPress={() =>
                     this.props.navigation.navigate('Date')
                 } >Important dates
           </Text>
            <Text style={styles.bt}

                 onPress={() =>
                    this.props.navigation.navigate('Submission')
                 } >Submission
           </Text>


               <Text style={styles.bt}

                 onPress={() =>
                      this.props.navigation.navigate('venue')

                 } >Venue</Text>

            <Text style={styles.bt}

                 onPress={() =>
                    this.props.navigation.navigate('contact')
                 } >Contact
           </Text>

           </View>
       <View>

               <Text style={styles.bt}

                 onPress={() =>
                      this.props.navigation.navigate('call_for_papers')
                 } >Call_for_papers
           </Text>

               <Text style={styles.bt}

                 onPress={() =>
                      this.props.navigation.navigate('program')
                 } >program
           </Text>

                  <Text style={styles.bt}

                 onPress={() =>
                      this.props.navigation.navigate('login')
                 } >login
           </Text>


                 <Text style={styles.bt}

                 onPress={() =>
                      this.props.navigation.navigate('registration')
                 } >Registration
           </Text>

                <Text style={styles.bt}

                 onPress={() =>
                      this.props.navigation.navigate('sponsor')
                 } >Sponsors
           </Text>

       </View>



          </View>
 </MenuProvider>

      );
    }
}


const styles = StyleSheet.create({
    bt: {
       // backgroundColor:'#6699cc',
       color: '#6699cc',
       alignItems: 'center',
       textAlign: 'center',
       justifyContent: 'center',
       borderColor: '#495A80',
       borderWidth: 5,
       borderStyle: 'solid',
       fontSize: 19,
       borderRadius: 25,
       margin: 10,
       padding: 10,
       width: Dimensions.get('window').width / 2 - 20



    } ,
     menu: {
       backgroundColor: '#ffffff',
       width: Dimensions.get('window').width,
       padding: 10,
       elevation: 10


    } ,
      text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color:'#0066cc'

    },


});
