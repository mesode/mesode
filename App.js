import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Alert, TouchableHighlight, Button } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text Pressed");
  console.log("App executed");
  console.log(require("./assets/icon.png")); 

  return (
    <SafeAreaView style={styles.container}>
      <Text  numberOfLines = {1} onPress ={()=> handlePress()}>Hello React Native! This is a really long line of text and should be truncated to one line only. </Text>
      <Image 
      style = {styles.icon}
      source={require("./assets/icon.png")}/>
      <Text>This is a local image or a static image!</Text>
      <TouchableHighlight onPress={()=>console.log("The image was pressed")}>
      <Image 
      style = {styles.networkImage}
      source = {{ uri: 'https://picsum.photos/200/300'}}
      />
      </TouchableHighlight>
      <Text>This is a network image!</Text>
     
     <Button 
     colour = "red" 
     title = "Click Me" 
       onPress = {() => Alert.prompt("My Title", "My Message", text => console.log (text)
        )
       }/>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  networkImage: {
  height: 200,
  width: 200,
  },
  icon: {
    width: 200,
    height: 200,
  },
});
