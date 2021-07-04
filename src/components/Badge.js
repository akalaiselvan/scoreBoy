import React from 'react'
import {Button, Text,Badge } from 'native-base';
import {ScrollView, StyleSheet,View} from 'react-native'

const PrimaryButton=({text,onPress})=>{
    return <View style={{margin:12}}>
            <Button rounded onPress={()=>onPress()}>
                <Text>{text}</Text>
            </Button>
           </View> 

}

const WarningButton=({text,onPress})=>{
    return  <View style={{margin:10}}>
                <Button rounded danger onPress={()=>onPress()}>
                    <Text>{text}</Text>
                </Button>
            </View>
}

const LastOverBadge=({thisOver})=>{
         let styl
         return <ScrollView style={{marginTop:'2%'}} horizontal showsHorizontalScrollIndicator={false}>
                    {thisOver.map((m,k)=>{
                        if(m==4 || m==6 || m==5){
                            styl=[styles.badge,styles.pink]
                        }else if(m==='W'){
                            styl=[styles.badge,styles.red]
                        }else {
                            styl=[styles.badge,styles.white]
                        }

                        return  <Badge style={[styl]} key={k}>
                                    <Text style={styles.badgeText}>{m}</Text>
                                </Badge>
                    })}
                </ScrollView>
}

const styles=StyleSheet.create({
    badge:{
        margin:5,
        borderWidth:1
    },
    badgeText:{
        color:'black'
    },
    white:{
        backgroundColor:'white',
        borderColor:'black',
    },
    pink:{
        backgroundColor:'#FF85FF',
        borderColor:'#DF00FF'
    },
    red:{
        backgroundColor:'red',
        borderColor:'#DF00FF'
    }
});

export {PrimaryButton,WarningButton,LastOverBadge}