

import { use, useState } from "react";
import { StyleSheet, Text, TouchableOpacity,View ,Pressable, TextInput} from "react-native";
import { stopMapper } from "react-native-reanimated";

export default function RootLayout() {
	const [contador, setContador ] = useState(0)
  const [n1,setn1]=useState('')
   const [n2,setn2]=useState('')
    const[display, setdisplay]=useState('0')
     const[numeroAnterior, setnumeroAnterior]=useState('0')
   const[valor,setvalor]=useState(0)
    
    
    let resultado = 0;
    function calculo(){
        const atual = parseFloat(display)
    const anterior = parseFloat(numeroAnterior)
     let operacao
    if (operacao === '+') resultado = anterior + atual
    if (operacao === '-') resultado = anterior - atual
    if (operacao === '/') resultado = anterior / atual
    }
   
  

	
	
 
 
  



 











    







	return (
		<>



              

			         <View> <TextInput></TextInput></View>
               <View style={styles.linha}>
                
			<TouchableOpacity style={styles.botao} onPress={calculo}>
				<Text>+</Text>
			</TouchableOpacity>
            <TouchableOpacity style={styles.botao}  onPress={calculo}> <Text>-</Text></TouchableOpacity>
	           <TouchableOpacity style={styles.botao} onPress={calculo}>
              
				<Text>:</Text>
			</TouchableOpacity>
      <TouchableOpacity id="1" >1</TouchableOpacity>
       <TouchableOpacity id="2" >2</TouchableOpacity>
        <TouchableOpacity id="3" >3</TouchableOpacity>
         <TouchableOpacity id="4" >4</TouchableOpacity>
          <TouchableOpacity id="5" >5</TouchableOpacity>
           <TouchableOpacity id="6" >6</TouchableOpacity>
            <TouchableOpacity id="7" >7</TouchableOpacity>
             <TouchableOpacity id="8" >8</TouchableOpacity>
              <TouchableOpacity id="9" >9</TouchableOpacity>
               <TouchableOpacity id="0" >0</TouchableOpacity>
			</View>
			
      </>
  
     
		
	);
}

const styles = StyleSheet.create({
botao: {
    backgroundColor: '#A9A9A9 ',
   
    
    width: 50,          // Largura pequena
    height: 50,         // Altura igual à largura para ser um quadrado
    borderRadius: 0,    // Borda totalmente quadrada
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Centraliza o quadrado na tela
    margin: 10,     
	     // Espaço em volta dele
  },
  
 
  linha:{

 gap:30,
	flexDirection:'row'
  },
  principal:{
	    flex: 1,                  
    justifyContent: 'center', 
    alignItems: 'center',     
    backgroundColor: '#fff',
    padding: 20,





  }
});








