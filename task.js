import { SafeAreaView, View,Text } from "react-native"
import { Checkbox } from "react-native-paper"

export default Task =({task,arr,setArr,navigation})=>{
    const  handleChange=()=>{
          let newArr =[]
  
          arr.map((obj)=>{
              if(obj.id==task.id){
                  obj.completed = !obj.completed
              }
              newArr.push(obj)
          })
          setArr([...newArr])
          
      }
     return <SafeAreaView style={{width:"100%",justifyContent:"center",alignContent:"center",alignItems:"center",marginBottom:30}}>
     <View style={{display:"flex",flexDirection:"row",alignItems:"center",maxWidth:"100%",width:"100%", backgroundColor:"#212021",padding:5,borderRadius:10,justifyContent:"space-between"}}>
         <View style={{width:"60%",display:"flex",flexDirection:"row",alignItems:"center"}}>
          <Checkbox  onPress={handleChange} status={task.completed?"checked":"unchecked"} />
          <Text onPress={()=>navigation.navigate("Details",{
              task: task,arr,setArr
          })} style={{margin:5,color:"white",maxWidth:"70%",height:"auto"}} >{task.title}</Text>
          </View>
          <Text style={{color:"white",width:"30%"}}>{task.time}</Text>
      </View>
      </SafeAreaView>
  }
  