import React from 'react'
import {StyleSheet,Text,View, ScrollView, TouchableOpacity} from 'react-native'

function ListMahasiswa(props){
    return(
        <View style={styles.Item}>
            <TouchableOpacity onPress={props.tampilkanData}>
                <Text>{props.dataItem.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Item:{
      marginTop:24,
      padding:30,
      backgroundColor:'pink',
      fontSize:30
    }
  });
export default ListMahasiswa