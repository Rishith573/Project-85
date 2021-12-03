import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class PostScreen extends React.Component{
    render(){
        console.log(this.props.route.params)
        return(
            <View style={styles.container}>
                <Image
                        source={require("../assets/profile_img.png")}
                        style={styles.profileImage}
                />
                <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                
                <Text>{"Author: " + this.props.route.params.author}</Text>
                <Text>{"Caption: " + this.props.route.params.caption}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileImage: {
        resizeMode: "contain",
        width: "20%",
        height: RFValue(20),
        borderRadius: RFValue(100)
    },
    authorNameText: {
        fontSize: RFValue(18),
        color: "white"
    },
    captionText: {
        fontSize: 20,
        color: "white",
    },
    postImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(150),
        borderRadius: RFValue(35)
    }
})