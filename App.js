import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';

  
export default class App extends Component {  
    constructor() {  
        super();  
        this.state = {
          
          text: '',
          consonent: 0,
          vowel: 0,
          character: 0
        };  
    }  

    countChar(){

      let str=this.state.text;
      var total_char = str.length;

      this.setState({

          character: total_char

          });
    }

  

  countVowel(){
  
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  var str = this.state.text;
  
  for(var x = 0; x < str.length ; x++)
  {
    if (vowel_list.indexOf(str[x]) !== -1)
    {
      vcount += 1;
    }

    this.setState({

        vowel: vcount

        });
  }

  }

  countConso(){
  
    var conso_list = 'bcdfgjklmnpqstvxzhrwy';
    var vcount2 = 0;
    var str = this.state.text;
    
    for(var x = 0; x < str.length ; x++)
    {
      if (conso_list.indexOf(str[x]) !== -1)
      {
        vcount2 += 1;
      }
  
      this.setState({
  
          consonent: vcount2
  
          });
    }
  
    }

    
    render() {  
        return (  
          

            <View style={styles.container}>  

             <Text style={styles.header}>A WORD ANALYZER {"\n"} </Text>

                <TextInput
                  style={styles.textinput}
                  value={this.state.text}
                  placeholder="Type here to analyze!"  
                  onChangeText={text => this.setState({ text })}
                />
               

                <Button style={styles.button} onPress={() => {this.countChar(), this.countVowel(), this.countConso()}}
                  title="Analyze" 
                />

              <Text style={styles.contents}>{"\n"}Word is: {this.state.text}</Text>
              <Text style={styles.contents}>No of Consonants: {this.state.consonent} </Text>
              <Text style={styles.contents}>No of Vowels: {this.state.vowel} </Text>
              <Text style={styles.contents}>No of Characters: {this.state.character} </Text> 
                
            </View>  
        );  
    }  
}  

const styles = StyleSheet.create({ 
  container: {
  flex: 1,
  justifyContent: 'flex-start', 
  alignItems: 'center', 
  backgroundColor: '#CBC3E3',

  }, 
  
  header: {
    marginTop: 60,
 fontSize: 30, 
 textAlign: 'center', 
 margin: 10,
 marginBottom: 10,
 },
 
 contents: {
 textAlign: 'center', 
 color: '#333333', 
 marginBottom: 5,
 },

 textinput: {

  height: 40, 
  width: 300,
  borderColor: 'black', 
  borderWidth: 1 ,
  marginBottom: 10
 },

 button: {

  height: 40, 
  width: 'auto',
  marginTop: 10,
  padding: 10
 
 }
})
