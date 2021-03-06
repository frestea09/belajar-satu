import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import ListMahasiswa from './Component/ListMahasiswa'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      'nama': 'ilman',
      'statusLogin':'Login',
      'inputNama':'',
      'inputNim':'',
      'count':0,
      'listMahasiswa':[
        {
          'id':'10112299',
          'name':'ilman teguh prasetya',
        },
        {
          'id':'10112291',
          'name':'liest',
        },
        {
          'id':'10112292',
          'name':'deni',
        },
        {
          'id':'10112293',
          'name':'faris',
        },
        
        {
          'id':'10112213',
          'name':'kujang',
        },
        
        {
          'id':'10112233',
          'name':'honor',
        },
        
        {
          'id':'10112294',
          'name':'garpit',
        },
      ]
    }
    this.setLogout = this.setLogout.bind(this)
    this.setinputNim = this.setinputNim.bind(this)
    this.setInputNama = this.setInputNama.bind(this)
    this.tampilkanData = this.tampilkanData.bind(this)
  }
  setInputNama(event){
    this.setState(
      {
        'inputNama':event
      }
    )
  }
  setinputNim(event){
    this.setState(
      {
        'inputNim':event
      }
    )
  }
  setLogout(){
    this.setState(
      {
        'statusLogin':'Logout'
      }
    )
  }
  tampilkanData(){
    this.setState(
      {
        'count':this.state.count + 1
      }
    )
  }
  render() {
    let mahasiswa = this.state.listMahasiswa.map(item=><View key={item.id}><ListMahasiswa dataItem={item}/></View>)
    return (
      <View style={styles.container}>
          <Text>Hello</Text>
          <FlatList 
            numColumns={4}
            keyExtractor = {(item)=>item.id}
            data={this.state.listMahasiswa}
            renderItem={({item})=>(
              <ListMahasiswa dataItem={item} tampilkanData={this.tampilkanData}/>
            )}
          />
          <Text> dataCount = {this.state.count}</Text>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header:{
    backgroundColor:'pink',
    padding:20,
  },
  BoldText:{
    fontWeight:'bold',
  },
  Body:{
    backgroundColor:'yellow',
  },
  Input:{
    borderWidth:1,
    borderColor:'black',
    padding:8,
    margin:10,
    width:200,
  },
  Item:{
    marginTop:24,
    padding:30,
    fontSize:30
  }
});

export default App;