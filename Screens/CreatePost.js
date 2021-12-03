import React from 'react';
import {Text, View, SafeAreaView, Image, StyleSheet, Platform, StatusBar, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import DropDownPicker from "react-native-dropdown-picker";

export default class CreatePost extends React.Component{

constructor(){
    super();
    this.state={
        previewImage: "image_2",
        dropdownHeight: 40,
        caption: ''
    }
}

render(){
    let preview_images = {
        image_1: require("../assets/image_1.jpg"),
        image_2: require("../assets/image_2.jpg"),
        image_3: require("../assets/image_3.jpg"),
        image_4: require("../assets/image_4.jpg"),
        image_5: require("../assets/image_5.jpg"),
        image_6: require("../assets/image_6.jpg"),
        image_7: require("../assets/image_7.jpg")
    }
    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                    <Image
                        source={require("../assets/logo.png")}
                        style={styles.iconImage}
                    />
                </View>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>New post</Text>
                </View>
            </View>
            <View style={styles.fieldsContainer}>
                <ScrollView>
                    <Image
                        source = {preview_images[this.state.previewImage]}
                        style = {styles.previewImage}
                    />
                    <View style={{height : RFValue(this.state.dropdownHeight)}}>
                    <DropDownPicker
                        items={[
                            {label:"Image 1", value:"image_1"},
                            {label:"Image 2", value:"image_2"},
                            {label:"Image 3", value:"image_3"},
                            {label:"Image 4", value:"image_4"},
                            {label:"Image 5", value:"image_5"},
                            {label:"Image 6", value:"image_6"},
                            {label:"Image 7", value:"image_7"}
                        ]}
                        defaultValue={this.state.previewImage}
                        onOpen={()=>{
                            this.setState({
                                dropdownHeight: 170
                            })
                        }}
                        onClose={()=>{
                            this.setState({
                                dropdownHeight: 50
                            })
                        }}
                        containerStyle={{
                            height: 40,
                            borderRadius: 20,
                            marginBottom: 10
                          }}
                          
                          style={{ backgroundColor: "white" }}
                          itemStyle={{
                            justifyContent: "flex-start"
                          }}
                          dropDownStyle={{ backgroundColor: "white" }}
                          
                        onChangeItem={item => {
                            this.setState({
                                previewImage: item.value
                            })
                        }}
                    />
                    
                    </View>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => {
                            this.setState({
                                caption: text
                            })
                        }}
                        placeholder={"Caption"}
                        placeholderTextColor= "white"
                    />

                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                    
                </ScrollView>
                
            </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
    
        container: {
            flex: 1,
            backgroundColor: "black"
        },
        droidSafeArea: {
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
        },
        appTitle: {
            flex: 0.07,
            flexDirection: "row"
        },
        appIcon: {
            flex: 0.2,
            justifyContent: "center",
            alignItems: "center"
        },
        iconImage: {
            width: "100%",
            height: "100%",
            resizeMode: "contain",
        },
        appTitleTextContainer: {
            flex: 0.7,
            justifyContent: "center"
        },
        appTitleText: {
            color: "white",
            fontSize: RFValue(28),
        },
        fieldsContainer: {
            flex: 0.8
        },
        previewImage: {
            width: "92%",
            height: RFValue(250),
            alignSelf: "center",
            resizeMode: "center",
            borderRadius: RFValue(10)
        },
        textInput: {
            borderWidth: 2,
            borderRadius: 25,
            borderColor: "white",
            color: "white"
        },
        submitButton: {
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 25,
            backgroundColor: "violet",
            width: 150,
            height: 50,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center"
        },
        submitText: {
            color: "white",
            fontWeight: "bold",
            fontSize: 30
        }
    
})