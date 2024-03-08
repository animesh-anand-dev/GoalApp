import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem  = (props) => {

  return (
    
    <View style={styles.goalItems}>
        <Pressable 
            android_ripple={{color:'#dddddd'}} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}
            >
            <Text style={styles.goalText}>
                {props.text}
            </Text> 
        </Pressable>
    </View>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
      },
      goalText: {
        color: 'white',
        padding: 8,
      },
      pressedItem: {
        opacity: 0.5
      }
});