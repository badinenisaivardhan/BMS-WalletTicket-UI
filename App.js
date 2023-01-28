import {SafeAreaView} from 'react-native';
import Ticket from './Ticket';

const width = 400
const height = 780

export default function App() {
  return (
   <SafeAreaView style={{flex:1,alignSelf:'center'}}>  
    <Ticket/>
   </SafeAreaView>
  );
}
