import React from 'react'
import {View , Text , StyleSheet, Dimensions , Linking } from 'react-native'
import { Button } from 'react-native-elements'
import { RFPercentage } from 'react-native-responsive-fontsize'


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function(props){
    return(
        <View style={styles.container}>
                <View>
                    <Text style={styles.title}> {props.data.name} </Text>
                    <Text style={styles.description}>Description :{'\n'}{props.data.description} </Text>
                    <Text style={styles.description}>Tools :{'\n'}{props.data.tools} </Text>
                </View>
                <View style={styles.buttonView}>
                    <Button 
                        title="View Project" 
                        titleStyle = {{ fontFamily : 'ProximaNovaA-Bold' , fontSize : RFPercentage(1.5)}}
                        buttonStyle = {{ backgroundColor : "#081232" }}
                        onPress = {()=>Linking.openURL(props.data.link)}
                    />
                </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container : {
        width : screenWidth/1.3 ,
        alignSelf : 'center',
        padding: 20 ,
        marginTop : 20 ,
        marginBottom : 20,
        borderRadius : 25 ,
        backgroundColor : '#ffffff',
        elevation : 5
    },
    title : {
        color : '#081232',
        fontFamily : 'ProximaNovaA-Bold',
        fontSize : RFPercentage(2),
        textAlign : 'center',
        paddingTop : 10,
        paddingBottom : 10
    },
    description : {
        fontSize : RFPercentage(1.8) ,
        fontFamily :'ProximaNovaA-Light',
        paddingTop : 10,
        paddingBottom : 10
    },
    buttonView : {
        width : 130,
        alignSelf : 'center'
    }
})