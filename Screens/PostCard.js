import React from 'react';
import {Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostCard extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.container} onPress={()=>{
                this.props.navigation.navigate("PostScreen", this.props.post)
            }}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                                source={require("../assets/profile_img.png")}
                                style={styles.profileImage}
                            />
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                    <View>
                        <Text style={styles.captionText}>{this.props.post.caption}</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                            <Text style={styles.likeText}>1.8B</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    cardContainer: {
        margin: RFValue(15),
        borderRadius: RFValue(20),
        backgroundColor: "#2A2A2A",
        flex: 0.8
    },
    authorContainer: {
        justifyContent: "center"
    },
    authorImageContainer:{
        alignItems: "center",
        flexDirection: "row"
    },
    profileImage: {
        resizeMode: "contain",
        width: "20%",
        height: RFValue(20),
        borderRadius: RFValue(100)
    },
    authorNameContainer: {
        alignItems: "center"
    },
    authorNameText: {
        fontSize: RFValue(18),
        color: "white"
    },
    postImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250),
        borderRadius: RFValue(35)
    },
    captionText: {
        fontSize: 20,
        color: "white",
      },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
      },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
      },
      likeText: {
        color: "white",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
      }
})