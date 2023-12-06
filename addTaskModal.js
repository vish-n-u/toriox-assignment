import React from 'react';

import { useState } from "react";
import {  View } from "react-native";
import { Button,Modal,Text, Portal, TextInput, TouchableRipple } from "react-native-paper";

export default  AddTaskModal = ({setArr,arr}) => {
    const [visible, setVisible] = useState(false);
  
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [title, setTitle] = useState("");
    const [description,setDescription] = useState("")
    const date = Date.now()
    const handleSave = ()=>{
        let obj ={
            title,
            description,
            id:arr.length+1,
            completed:false,
            time: `${new Date().getHours()%13} : ${new Date().getMinutes()} ${new Date().getHours()>12?"pm":"am"}`
        }
         arr.unshift(obj)
         setArr([...arr])
                hideModal()

    }
          
        
    const containerStyle = {backgroundColor: 'white', padding: 20};
  console.log("called")

    return (
        <>
      <Portal>
          <Modal style={{height:"100%",minWidth:"100%",display:'flex',flex:1,flexDirection:"column"}} visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text style={{alignSelf:"center"}} variant='displaySmall'>Add a task</Text>
            <TextInput
                mode="outlined"
                label="title"
                style={{width:"100%"}}
                value={title}
                onChangeText={text => setTitle(text)}
                placeholder="Type title of task"
          
            />

            <TextInput
                mode="outlined"
                label="Description"
                value={description}
                onChangeText={text => setDescription(text)}
                placeholder="Type Description of task"
          
            />
            <View style={{width: '100%', display:'flex',flexDirection:"row",justifyContent:"flex-end",marginTop:15}}>
            <TouchableRipple
                style={{backgroundColor:"white",width:"30%",borderRadius:5,borderColor:"#3bcbf7",borderWidth:1,marginRight:4}}
                    onPress={() => {console.log('Pressed')
                hideModal()
                }}
                    rippleColor="rgba(0, 0, 0, .32)"
                >
                    <Text variant='titleLarge'  style={{paddingBottom:6,paddingTop:6,alignSelf:"center",color:"#3bcbf7"}}>Cancel</Text>
                
                </TouchableRipple>
               
                <TouchableRipple
                style={{backgroundColor:"#3bcbf7",width:"30%",borderRadius:5}}
                    onPress={() => handleSave()}
                    rippleColor="rgba(0, 0, 0, .32)"
                >
                    <Text variant='titleLarge'  style={{paddingBottom:6,paddingTop:6,alignSelf:"center",color:"white"}}>Save</Text>
                
                </TouchableRipple>
            </View>
          </Modal>
    </Portal>
        <Button style={{width:70,height:70,backgroundColor:"#3bcbf7",display:"flex",justifyContent:"center",position:'absolute',bottom:20,right:15,borderRadius:100}} onPress={showModal}>
          <Text variant='displayMedium'>+</Text>
        </Button>
</>
    );
  };
  
