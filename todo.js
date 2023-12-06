import React from 'react';
import { useState } from 'react';
import { Dimensions, Image } from 'react-native';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Button, TextInput,Checkbox, List, Modal, PaperProvider, Portal, Text, TouchableRipple } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Task from './task';
import AddTaskModal from "./addTaskModal"
export default function Todo({navigation}){
    const windowHeight = Dimensions.get('window').height;
    const [showImg,setShowImg] = useState(true)
    const [arr,setArr] =useState([{
        id:1,
        title:"Hello",
        description:"Random description for this project",
        completed:true,
        time:"11:00 am"
    },
    {
        id:2,
        title:"Hello2",
        description:"Random description2 for this project.......",
        completed:false,
        time:"9:33 pm"
    },{
        id:3,
        title:"Hello3  , this will be the start of my react native project using Expo.",
        description:"What the hell is this kdfjnwjfnojsnojsnaos nonocninokadnondf ncshf sojijijkpa jjj",
        completed:true,
        time:"01:00 am"
    },{
        id:4,
        title:"Hello4",
        description:"Random description 4",
        completed:false,
        time:"02:00 pm"
    },




])

      setTimeout(()=>{setShowImg(false)},1000)
    return(
        <SafeAreaView style={{alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",width:"100%",height:windowHeight,backgroundColor:"black"}}>
    
        {!showImg?
        <>
        <View style={{width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"#3bcbf7",height:130,position:"absolute",top:10}}>
            <Text variant="displayMedium" >Todo List</Text>           
        </View>

       <SafeAreaView  style={{height:"70%",display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <FlatList      
        data={arr}
       renderItem={({item})=> <Task task={item} navigation={navigation} arr={arr} setArr={setArr}/>}
    keyExtractor={item => item.id}
  />
  </SafeAreaView>
    <AddTaskModal setArr={setArr} arr={arr}/>
    </>

:
<Image  source={{uri:"https://i.pinimg.com/originals/1f/3f/4c/1f3f4ce973d946578567f190e2773709.png"}} style={{ width: 200, height: 200}} />


}

        </SafeAreaView>
    )
}





