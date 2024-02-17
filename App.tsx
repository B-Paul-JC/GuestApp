import React, {useEffect, useRef} from 'react';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableHighlight,
  Animated,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {styles} from './assets/styles/styles';

function App(): React.JSX.Element {
  // State variables to handle user name input and welcome message visibility
  const [userName, setUserName] = React.useState('');
  const [isWelcomeShown, setIsWelcomeShown] = React.useState(false);

  // Updates the userName state with the user input
  const handleNameInput = (text: string) => {
    setUserName(text);
  };

  // Shows the welcome message if userName is not empty
  const handleWelcome = () => {
    if (userName.trim().length > 0) {
      setIsWelcomeShown(true);
    }
  };

  // Animation value to manage the fade effect
  const fadeAnim = useRef(new Animated.Value(0.4)).current;
  const fadeAnim2 = useRef(new Animated.Value(0.4)).current;

  // Initial position off the screen
  const slideAnim = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    if (isWelcomeShown) {
      Animated.timing(slideAnim, {
        toValue: 0, // Slide in to view
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 1500, // Slide out of view
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  }, [isWelcomeShown, slideAnim]);

  // Starts the animation when the component mounts
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0.8,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, isWelcomeShown]);
  useEffect(() => {
    Animated.timing(fadeAnim2, {
      toValue: 0.95,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim2, isWelcomeShown]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#1c1d21"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('./assets/images/back.jpeg')}
        style={styles.main}>
        {!isWelcomeShown ? (
          // User input form
          <ImageBackground
            source={require('./assets/images/gradient.png')}
            imageStyle={styles.wrap}
            style={styles.cardWrapper}>
            <Animated.View style={{...styles.card, opacity: fadeAnim}}>
              <Text style={styles.introText}>
                Matric Number: 231022
                {'\n'}
                Paul Damilola Bamigboye
                {'\n'}
                CSC 293 Assignment 3
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                onChangeText={handleNameInput}
                value={userName}
              />
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  style={styles.button}
                  underlayColor="#DDDDDD"
                  onPress={() => setUserName('')}>
                  <Text style={styles.buttonText}>Reset</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{...styles.button, ...styles.greenBackground}}
                  underlayColor="#DDDDDD"
                  onPress={handleWelcome}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableHighlight>
              </View>
            </Animated.View>
          </ImageBackground>
        ) : (
          // Welcome message display with slide animation
          <Animated.View
            style={{
              ...styles.cardTwo,
              opacity: fadeAnim2,
              transform: [{translateY: slideAnim}],
            }}>
            <ImageBackground
              source={require('./assets/images/gradient.png')}
              imageStyle={styles.wrap}
              style={styles.cardWrapper}>
              <View style={styles.centeredView}>
                <Text style={{...styles.modalText, ...styles.cardWrapperThree}}>
                  Welcome
                  {'\n'}
                  {userName.trim()}!
                </Text>
              </View>
            </ImageBackground>
            <View style={styles.centeredViewTwo}>
              <TouchableHighlight
                style={styles.buttonTwo}
                underlayColor="#DDDDDD"
                onPress={() => {
                  setIsWelcomeShown(false);
                  setUserName('');
                }}>
                <Text style={styles.buttonText}>Thank You</Text>
              </TouchableHighlight>
            </View>
          </Animated.View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}

export default App;
