import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView} from 'react-native';
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

export default class sponsor extends React.Component
{  static navigationOptions = {
        title: 'Sponsor',
    };


    render() {

        return (
               <MenuProvider >
            <View style={styles.menu}>
                <Menu>
              <MenuTrigger text='Menu' />
             <MenuOptions>
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
                    ICEASSM will bring together researchers, engineers and practitioners from different countries to Accra,
                    the capital of Ghana. This conference will be attended by a global audience of scientists and engineers
                    from academia and the industry. It will offer the most up‐to‐date view of innovation in sciences and their
                    applications. The conference will bring together
                    international delegates and will offer the opportunity to go beyond your regular networks and meet
                    consumers and producers in Africa.{'\n'}
                    {'\n'}
                    Many organizations including the United Nations have predicted the population of Africa to double by 2050.
                    The surge in population will improve Africa’s Gross Domestic Product (GDP), predicted by the African Development
                    Bank to rise over US$15 trillion in 2060, from a base level of US$1.7 trillion in 2010. However,
                    it will be difficult to achieve the GDP projections if challenges that generally result from population
                    explosion are not addressed. The challenges are many and complex including the demand of affordable and
                    sustainable: housing, infrastructure, communication, transportation, energy, production and manufacturing
                    systems, etc. It is thus imperative for researchers, scientists and engineers to propose innovative
                    solutions for overcoming the challenges and open investment opportunities for development in the continent.{'\n'} {'\n'}
                    ICEASSM will bring together researchers, engineers and practitioners from different countries to Accra,
                    the capital of Ghana. This conference will be attended by a global audience of scientists and engineers
                    from academia and the industry. It will offer the most up‐to‐date view of innovation in sciences and their
                    applications. The conference will bring together
                    international delegates and will offer the opportunity to go beyond your regular networks and meet
                    consumers and producers in Africa.{'\n'}
                    {'\n'}Sponsors and exhibitors of ICEASSM’17 will benefit from exposure to academics and industry professionals,
                    decision‐makers, engineers, researchers and students involved in the field of sciences and engineering. The sponsors’
                    brands will be associated to this international event and thus will benefit from
                    the exposure to up‐to‐date research, latest technological innovations and emerging investment opportunities in Africa.
                </Text>


            </ScrollView>
            </MenuProvider >
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
