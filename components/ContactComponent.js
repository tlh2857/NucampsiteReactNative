import React,{Component} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const styles = StyleSheet.create({
    card: {
        marginBottom:2,
    }
});

class Contact extends Component{
    static navigationOptions = {
        title: 'Contact Us'
    }
render(){
    return(
        <ScrollView>
            <Card title='Contact Information' wrapperStyle={{margin: 20}}>
                <Text >1 Nucamp Way {'\n'}
                        Seattle, WA 98001 {'\n'}
                        U.S.A.{'\n'}
                        </Text>
                <Text style={styles.card} >
                Phone: 1-206-555-1234 {'\n'}
                Email: campsites@nucamp.co
                </Text>
            </Card>

        </ScrollView>
    )
}
}

export default Contact;