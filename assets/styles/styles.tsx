/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'deepskyblue',
    textAlign: 'center',
  },
  wrap: {
    borderRadius: 20,
  },
  cardWrapper: {
    padding: 5,
  },
  cardWrapperTwo: {
    padding: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardWrapperThree: {
    paddingTop: 30,
    height: 200,
    flex: 1,
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
  },
  input: {
    lineHeight: 24,
    padding: 14,
    borderRadius: 50,
    marginHorizontal: 20,
    borderColor: '#0B5237',
    borderWidth: 2,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#5077a2',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    width: 80,
    elevation: 4,
    height: 40,
    alignItems: 'center',
  },
  buttonTwo: {
    backgroundColor: '#5077a2',
    padding: 10,
    marginVertical: 20,
    justifyContent: 'center',
    borderRadius: 20,
    width: 120,
    elevation: 4,
    height: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenBackground: {
    backgroundColor: '#0adb8a',
  },
  welcomeMessage: {
    fontSize: 24,
    color: 'green',
    marginTop: 20,
  },
  centeredView: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 100,
    alignItems: 'center',
  },
  centeredViewTwo: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 80,
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  openButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    margin: 20,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  card: {
    width: 300,
    height: 280,
    padding: 10,
    shadowColor: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 6,
  },
  cardTwo: {
    width: 300,
    padding: 10,
    height: 200,
    shadowColor: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 6,
  },
  introText: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'Montserrat-Regular',
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 40,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Usage within the render method or a functional component's return statement
});
