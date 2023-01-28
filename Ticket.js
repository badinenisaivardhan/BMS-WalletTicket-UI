import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const width = 400
const height = 780
export default function Ticket() {    
  return (
    <View style={{width:width,height:height,backgroundColor:'transparent'}}>
        <View style={{marginTop:0,alignContent:'center',backgroundColor:'white',alignSelf:'center'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',alignItems:'center',marginBottom:20}}>
            <Text style={{fontWeight:'bold',fontSize:17,backgroundColor:''}}>Done</Text>
            <Image source={require('./assets/menu.jpg')} style={{marginLeft:5,width:25,resizeMode:'contain',height:24,marginTop:0}}  />
          </View>
        <LinearGradient 
        // Button Linear Gradient
        colors={['#CF3460', '#AD3C70', '#8F4582']}
        style={{width:width-20,height:height/1.43}}>
        <View style={{flex:1,width:width-40}}>
         <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-between',width:width-35,marginTop:5}}>
          <Image  source={require('./assets/bms.png')} style={{marginLeft:5,width:150,resizeMode:'contain',height:100,marginTop:-20}}  />
          <View style={{width:80,height:100, borderRadius:100/2, backgroundColor: "white", marginTop:-160 ,marginLeft:-30 }}>
           </View>
            <View style={{flexDirection:'column',marginTop:-50}}>
            <Text style={{color:'white',alignSelf:'flex-end',fontSize:9.5,fontWeight:'600'}}>11.30 AM</Text>
            <Text style={{color:'white',fontSize:13,fontWeight:'400'}}>Wed, 25 January</Text>
            </View>
         </View>
         <View style={{marginLeft:10,flexDirection:'row',marginTop:-20}}>
            <View style={{flexDirection:'column'}}>
              <Text style={{color:'white',fontSize:10.5,fontWeight:'500'}}>ASIAN GEMINI THEATRE : WARANGAL(ASIAN ..</Text>   
              <Text style={{color:'white',fontSize:19,fontWeight:'300'}}>Pathaan (Telugu) (U/A)</Text>   
            </View>
            <Image source={{uri:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pathaan-et00323848-1674372556.jpg'}} style={{marginLeft:10,width:100,resizeMode:'contain',height:100}}  />
         </View>
         <View style={{marginLeft:10,flexDirection:'row',marginTop:-45}}>
            <View style={{flexDirection:'column'}}>
              <Text style={{color:'white',fontSize:10.5,fontWeight:'500'}}>2 TICKETS</Text>   
              <Text style={{color:'white',fontSize:15,fontWeight:'300'}}>UPPER CL - A18, A19</Text>   
            </View>
          </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:0,marginLeft:-5}}>
        <View style={{flexDirection:'column',marginLeft:15,marginTop:25}}>
          <Text style={{color:'white',fontWeight:'500',fontSize:10}}>SCREEN</Text>
          <Text style={{color:'white',fontSize:13}}>ASIAN GEMINI GOLD 70MM</Text>
        </View>
        <View style={{flexDirection:'column',marginLeft:40,marginTop:25}}>
          <Text style={{color:'white',fontWeight:'500',fontSize:10}}>BOOKING ID</Text>
          <Text style={{color:'white',fontSize:13}}>000000000000000</Text>
        </View>
        </View>

        <View style={{marginLeft:width/3.5,marginTop:height/4.4}}>
          <View style={{width:150,height:150,backgroundColor:'white',alignContent:'center',alignItems:'center',justifyContent:'center',borderRadius:5}}>
           <Image source={require('./assets/check.png')} style={{width:140,resizeMode:'contain',height:140}}  />
          </View>
        </View>
        
      <View style={{borderRadius:5,borderColor:'#e7374c',width:22,height:22,backgroundColor:'#e7374c',marginLeft:10,alignContent:'center',alignItems:'center',justifyContent:'center',marginTop:-14}}>
        <Image source={require('./assets/bmssmall.jpg')} style={{width:20,resizeMode:'contain',height:20,alignSelf:'center',justifyContent:'center'}}  />
      </View>
        </View>
      </LinearGradient>
        </View>
    </View>
  )
}
