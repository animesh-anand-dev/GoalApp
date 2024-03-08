import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useState } from "react";
import GoalItem from './components/GoalItem ';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'react-native';
import { center } from '@shopify/react-native-skia';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => 
    [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter( (goal) => goal.id !== id);
    })
  }


  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <View style={styles.modalButton}><Button title='Add New Goal' color='#9040f7' onPress={startAddGoalHandler}/></View>
      {modalVisible && <GoalInput visible={modalVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>}
      <View style={styles.textContainer}><Text style={styles.text}>Your Goals</Text></View>
      <View style={styles.goalsContainer}>
      {/* <Text style={{marginBottom: 20, fontSize: 20, fontStyle: 'italic'}}>List of Goals..</Text> */}
      <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>
        }}
        keyExtractor={ (item, index) => {
          return  item.id;
        }}
      />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    appContainer: {
      paddingTop: 50,
      paddingHorizontal: 16,
      flex: 1,
      backgroundColor: '#1e085a'
    },
    goalsContainer: {
      flex: 4,
    },
    modalButton: {
      padding: 20
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      marginVertical: 10
    },
    text: {
      color: 'white',
      fontSize: 20
    }
    
})
