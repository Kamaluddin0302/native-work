import * as React from 'react';
import { Text, View, StyleSheet ,SafeAreaView,ScrollView ,KeyboardAvoidingView,Image} from 'react-native';
import Constants from './node_modules/expo-constants';
export default class App extends React.Component {
  
// static navigationOptions = (navigation) => {
// navigation = {
// header : 
// }
// }


  static navigationOptions = ({navigation})=>{ 
      return{
        title:navigation.getParam('productname')}
      
      }

  componentDidMount(){
    this.props.navigation.setParams({productname:this.props.navigation.state.params.name})
  }
  render() {
   let productObj = this.props.navigation.state.params
    return (
    
<View style ={{marginTop: "10%" , width : "100%"}}>
<Image style ={{width : "100%", height : 160}} source = {{uri :productObj.image}}/>
<Text style ={{textAlign : 'center' ,fontSize : 25,marginTop : 10}}>{productObj.name}</Text>
<Text style ={{textAlign : 'center' ,fontSize : 25,marginTop : 10}}> RS : {productObj.price}</Text>

<View style={{backgroundColor:'blue',padding:7,borderRadius:5,width:'100%',marginTop:4,alignItems:'center'}}>
              <Text style = {{color: "white"}}>
            
              Add to Cart</Text>
              </View>
</View>

    );
  }
}

const styles = StyleSheet.create({
  

});


