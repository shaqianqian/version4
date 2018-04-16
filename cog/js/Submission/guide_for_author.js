import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';

import FileManager from 'react-native-filesystem';



class guide_for_author extends React.Component {
    static navigationOptions = {
        title: 'Guide for author',
    };


    render() {

        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>

                <Text style={styles.text_c}>
                    Authors are invited to submit original papers that MUST NOT have been submitted to or published in any other workshop,
                    conference, or journal. All papers will be reviewed by the Program Committee for significance,
                    originality, accuracy, and clarity. Papers must be up to 8 pages and follow IEEE double columns publication format.
                </Text>
                <Text style={styles.text_c}>
                    To download the appropriate templates (LateX or Words) refer to the following links:
                </Text>
                <Text style={styles.text_r}>
                    Instruction to authors

                </Text>

                <Text style={styles.text}

                      onPress={() =>
                          navigation.navigate('txt')

                      } >  Microsoft Word 2003 – US letter (DOC)

                </Text>

                <Text style={styles.text_c}>
                    For the conference, original papers neither presented nor published at national or international meetings are expected. Authors
                    are required to submit an abstract of their regular papers through the ICEASSM website from the 1 st July to the 30 th August.
                    Abstracts should be no more than 300 words in length. Tutorials must address key issue of broad interest in one area of the
                    conference themes in fundamental research, applied research, engineering or innovation in developing countries. Authors have
                    to submit tutorial abstract first, through the conference website from the 1 st August to 30 th September. As for regular papers,
                    abstracts should be no more than 300 words in length.
                    Upon receipt of a submission, the author will receive an e‐mail confirmation from ICEASSM. Therefore, it is necessary that
                    all authors provide a valid e‐mail address and configure the related inbox to accept e‐mails from ICEASSM.org. In case of address
                    change, the author must provide the new contact information to the ICEASSM Program Committee.
                </Text>

                <Text style={styles.text_r}>
                    Paper review process
                </Text>

                <Text style={styles.text_c}>
                    Authors will be notified in early October 2016, of the status of their paper. Authors are required to submit complete drafts in November
                    2016. Draft candidate papers will be subjected to review by the Program Committee and ICEASSM Editorial Board. The draft candidate papers
                    will also be submitted to CrossCheck plagiarism detection tool. Authors will be given feedback on their draft papers in January 2016.
                    Authors of candidate papers must submit their final paper in February 2017. At this time, authors must also complete a ICEASSM Copyright
                    Form, and at least one author of candidate papers must register (at a reduced fee) for the conference.
                    By submitting an abstract for a paper, the author is accepting the condition that a candidate paper may be rejected at any time if the
                    Program Committee determines that the author isfailing to comply with ICEASSM deadlines or policies, or if the Program Committee
                    determines that the content of the paper is not of sufficient quality to merit publication in the Proceedings.
                    By submitting an abstract for a paper, the authors accept the condition that if the paper is ultimately accepted into the Proceedings,
                    at least one author will be registered and attend the conference.
                </Text>

                <Text style={styles.text_r}>
                    Tutorial review process
                </Text>

                <Text style={styles.text_c}>
                    The review procedure for tutorials is identical to the review procedure for papers except that they are reviewed only by Tutorial Committee
                    and are not subjected to blind review.
                    By submitting an abstract for a tutorial, the author accept the condition that if their tutorial is accepted for the conference,
                    the author or co‐author will attend the conference and deliver their tutorial.
                </Text>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize:13,
        textAlign: 'left',
        fontWeight: 'bold',

    },
    text_r: {
        fontSize:25,
        textAlign: 'left',

    },
    text_c: {

        fontSize:13,
        textAlign: 'left'

    },


});

export default guide_for_author;
