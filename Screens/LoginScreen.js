import React from 'react';
import * as Google from 'expo-google-app-auth';
import { StyleSheet, View, Button } from "react-native";
import firebase from 'firebase';

export default class LoginScreen extends React.Component{
    signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            androidClientId: "499387564523-02ortfehfe3qjltgl8mhqmd232pdb038.apps.googleusercontent.com",
            iosClientId: "499387564523-i6scmmjaff51lcalj8iltuhilkbk7m8j.apps.googleusercontent.com",
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Button
                    title="Sign in with Google"
                    onPress={() => this.signInWithGoogleAsync()}
                ></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });

