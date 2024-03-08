import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native"


const GoalInput = (props) => {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    console.log("Goal Input Component rendered")

  return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image 
                style={styles.image} 
                source={require('../assets/images/goal.png')} 
                // source="/some/path/to/image.jpg"
            />
            <TextInput 
            style={styles.textInput} 
            placeholder='Your course goal!'
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Add Goal' onPress={addGoalHandler} color='#5e0acc'/>
                </View>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={props.onCancel} color='#f31282'/>
                </View>
            </View>
            
        </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b',
      },
      textInput: {
        padding: 16,
        borderWidth: 1,
        width: '100%',
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 10,
      },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});