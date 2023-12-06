import { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, TouchableRipple } from "react-native-paper";

export default function DetailsScreen({route,navigation}) {
    const {task,arr,setArr} = route.params
    const [title,setTitle] = useState(task.title)
    const [description,setDescription] = useState(task.description)

    const handleSave= ()=>{
      let newArr = []
      
      arr.map((obj)=>{
        if(obj.id===task.id){
          obj.title = title
          obj.description = description
        }
        newArr.push(obj)
      })
      setArr(newArr)      
      navigation.goBack()
    }

    const handleCancel= ()=>{
      navigation.goBack()

    }

   const handleTitleChange=(e)=>{
    setTitle(e)
         
   }

   const handleDescriptionChange = (e)=>{
    setDescription(e)    
}

   
    console.log(task,arr,setArr)
    return (
      <View style={{ flex: 1, alignItems: 'center',backgroundColor:"white", }}>
        <View style={{width:"100%",flexDirection:"row",justifyContent:"flex-end"}}>
            <Text variant="bodyLarge" style={{color:"black"}}>Status: {task.completed?"🟢 Completed":"🔴 Active"}</Text>
        </View>
        <View style={{alignItems:"center" ,width:"100%",height:"80%"}}>
        <TextInput
        multiline = {true}
                mode="outlined"
                label="title"
                style={{width:"100%",marginTop:100}}
                value={title}
                
                 onChangeText={handleTitleChange}
                placeholder="Change  title of task"
          
            />
           <TextInput
           multiline = {true}
                mode="outlined"
                label="description"
                style={{width:"100%",marginTop:100}}
                value={task.description}
                 onChangeText={handleDescriptionChange}
                placeholder="Change Description of task"
          
            />
        </View>
        <View style={{width:"100%",flexDirection:"row",justifyContent:"flex-end"}}>
        <TouchableRipple
                style={{backgroundColor:"white",width:"30%",borderRadius:5,borderColor:"#3bcbf7",borderWidth:1,marginRight:4}}
                    onPress={handleCancel}
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
      </View>
    );
  }