import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const resetForm = () => {
      setEmail("");
      setPassword("");
  }
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={{ flex: 1.4 }}>
        <Image style={styles.logo} source={require('./einkaufwagen.png')} />
      </View>
      <View style={{ flex: 0.7, justifyContent: "space-around" }}>
        <TextInput 
          name="epost"
          style={styles.textinput}
          placeholder="E-post"
          placeholderTextColor="black"
          autoCapitalize="none"
          textContentType='emailAddress'
          autoFocus={true}
          blurOnSubmit={true}
          onChangeText={text => setEmail(text)}
          defaultValue={email}
          />
        <TextInput
          style={styles.textinput}
          placeholderTextColor='black'
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
          textContentType='password'
          onChangeText={text => setPassword(text)}
          defaultValue={password}
          />
      </View>
      <View style={{ flex: 1.4, justifyContent: "flex-start" }}>
        <TouchableOpacity 
        style={styles.touch}
        onPress={resetForm}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Giris Yap</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.touch}
          onPress={resetForm} >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Kayit Ol</Text>
            </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#80cbc4",
    justifyContent: 'flex-start',
  },
  textinput: {
    width: '90%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: '#eceff1',
    margin: 15,
    paddingLeft: 15,
    borderRadius: 7,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#546e7b",
    color: "white",
    height: 45,
    width: '45%',
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 6,
  },
  touch: {
    justifyContent: 'flex-start',
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  logo: {
    resizeMode: 'contain',
    height: '100%',
    width: '35%',
    alignSelf: 'center'
  }
});