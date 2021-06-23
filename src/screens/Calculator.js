import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Display from '../components/Display'
import Button from '../components/Button'


 export default class Calculator extends Component {

    state = {
        displayValue:'0'
    }



    clearMemory=()=>{
        this.setState({displayValue:'0'})
    }

    addDigit = digit => {
        this.setState({displayValue:digit})
    }

    setOperation(operation){
        console.warn(operation)
    }

    render() {
        return (
               <View style={styles.container} >
                   <Display value ={this.state.displayValue} />
                   <View style = {styles.buttons} >
                       <Button label = 'AC' touch={this.clearMemory} threeCollumns/>
                       <Button label = '/' operation touch={this.setOperation} />
                       <Button label = '7'touch={this.addDigit}/>
                       <Button label = '8'touch={this.addDigit}/>
                       <Button label = '9'touch={this.addDigit}/>
                       <Button label = '*'operation  touch={this.setOperation} />
                       <Button label = '4'touch={this.addDigit}/>
                       <Button label = '5'touch={this.addDigit}/>
                       <Button label = '6'touch={this.addDigit}/>
                       <Button label = '-' operation  touch={this.setOperation} />
                       <Button label = '1'touch={this.addDigit}/>
                       <Button label = '2'touch={this.addDigit}/>
                       <Button label = '3'touch={this.addDigit}/>
                       <Button label = '+' operation  touch={this.setOperation} />
                       <Button label = '0' twoCollumns touch={this.addDigit}/>
                       <Button label = '.'touch={this.addDigit}/>
                       <Button label = '=' operation  touch={this.setOperation} />
                   </View>
               </View>
        )
    }
 }

const styles = StyleSheet.create({
     container:{
         flex:1
     },
     buttons:{
         flexDirection:'row',
         flexWrap:'wrap'
     }   
})