import React from 'react';
import { AppRegistry, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

const Style = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const generaeNewSentence = () => {
  let sentences = [
    'Carnaval de nerd é só no Bloco de Notas.',
    'Batatinha quando nasce espalha rama pelo chão, internet quando cai, faz parar o coração.',
    'Pareço legal, mas já matei os reféns do Counter Strike jogando no time dos contra terroristas.',
    'Está tão frio, que fui jogar Mortal Kombat e o Sub Zero estava de moletom!',
    'Sou tão nerd que quando tomo vacina, digo: "As definições de vírus foram atualizadas."',
  ];
  let randomNumber = Math.floor(Math.random() * 5);
  
  Alert.alert(sentences[randomNumber]);
}

const App = () => {
  const { main, button, buttonText } = Style;
  return (

    <View style={ main }>
      <Image
        source={ require('./imgs/logo.png') }
      />
      <TouchableOpacity
        onPress={generaeNewSentence}
        style={button} >
        <Text style={buttonText}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('DailySentence', () => App);
