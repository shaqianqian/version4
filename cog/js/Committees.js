import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';


class Committees extends React.Component {
    static navigationOptions = {
        title: 'Committees',
    };


    render() {

        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>
                <Text style={styles.text}>General chairs </Text>
                <Text style={styles.text_c}>
                    Prof. Adjallah Kondo Hloindo, ENIM University of Lorraine, France {'\n'}
                    Prof. Awuah Esi (honorary chair), UENR, Ghana
                </Text>
                <Text style={styles.text}>International organization committee </Text>
                <Text style={styles.text_c}>
                    Dr. Abanda Henry, Oxford Brookes University, UK {'\n'}
                    Dr. Agboto Vincent, Vanderbilt University, USA{'\n'}
                    Dr. Bako Laurent, Ecole Centrale Lyon, France{'\n'}
                    Dr. Pekpe Komi Midzodzi, Lille 1 University, France
                </Text>
                <Text style={styles.text}>Local organizing committee </Text>
                <Text style={styles.text_c}>
                    Dr. Appiah-Kubi Ben, UENR, Ghana{'\n'}
                    Prof. Dapaah Harrison, UENR, Ghana{'\n'}
                    Dr. Diawuo Nana, UENR, Ghana{'\n'}
                    Dr. Kabo-bah Amos, UENR, Ghana{'\n'}
                    Dr. Ofosu Antwi Eric, UENR, Ghana
                </Text>
                <Text style={styles.text}>Program Chairs </Text>
                <Text style={styles.text_c}>
                    Dr. Abanda Henry, Oxford Brookes University, UK{'\n'}
                    Dr. Abdou Wahabou, University of Burgundy, France{'\n'}
                    Dr. Agboto Vincent, Vanderbilt University, USA{'\n'}
                    Dr. Akponanabofa Henry Oti, Oxford Brookes University, UK{'\n'}
                    Dr. Babiga Birregah, UTT, France{'\n'}
                    Prof. Gasso Gilles, INSA Rouen, France{'\n'}
                    Dr. Manjia M. Blanche, École Nationale Supérieure Polytechnique de Yaoundé, Cameroun{'\n'}
                    Prof. Mboup Mamadou, University of Reims Champagne-Ardenne, France{'\n'}
                    Prof. Mohanty Amiya Ranjan, IIT-Kharagpur, India{'\n'}
                    Dr. N’Guessan Assi, Lille 1 University, France{'\n'}
                    Prof. Pettang Chrispin, École Nationale Supérieure Polytechnique de Yaoundé, Cameroun
               </Text>

                   <Text style={styles.text}>International Program Chairs (IPC) </Text>
                <Text style={styles.text_c}>
                    Prof. Abdullahi Liman Tukur, Modibbo Adama University of Technology, Nigeria{'\n'}
                    Prof. Adewumi Ife Kehinde, Niger Delta University, Nigeria{'\n'}
                    Dr. Adzakpa K. Pélopé, CEGEP de la Gaspesie et des Îles, Canada{'\n'}
                    Prof. Agbossou Kodjo, Université du Quebec à Trois-Rivières, Canada{'\n'}
                    Dr. Andawei Meeting, Niger Delta University, Nigeria{'\n'}
                    Dr. Aggab Toufih, Université d’Orléans, France{'\n'}
                    Dr. Anoukou Kokou, UPMC, France{'\n'}
                    Dr. Bekolo Valère, Trident University, USA{'\n'}
                    Dr. Bettayeb Belgacem, Ecole des Mines de Nantes, France{'\n'}
                    Dr. Bhaskar Vidhyacharan, SRM University Chennai, India{'\n'}
                    Dr. Bilal Boudy, Université de Nouakchott, Mauritania{'\n'}
                    Dr. Bonfoh Yazid Napo, Université de Lorraine, France{'\n'}
                    Dr. Boton Conrad, Ecole de Technologie Supérieure Montréal, Canada{'\n'}
                    Dr. Bouchart Vanessa, Université de Lorraine, France{'\n'}
                    Dr. Bouzidi Youcef, UTT, France{'\n'}
                    Prof. Châtelet Eric, UTT, France{'\n'}
                    Prof. Chevrier Pierre, Université de Lorraine, France{'\n'}
                    Prof. Chu Chengbin, Université de Technologie de Troyes, France{'\n'}
                    Prof. Chu Feng, Univerité d’Evry Val d’Essonne, France{'\n'}
                    Prof. Zerhouni Noureddine, Université de Franche Comté, France
                </Text>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize:15,
        textAlign: 'left'

    },
    text_c: {
        paddingBottom:5,
        fontSize:13,
       textAlign: 'left'

    },


});

export default Committees;
