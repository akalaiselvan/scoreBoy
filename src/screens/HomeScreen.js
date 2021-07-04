import React from 'react'
import { View , StyleSheet}   from 'react-native'
import {MyButton} from '../components/Button'
import {navigate} from '../navigationRef'

const HomeScreen=()=>{
    const width=250
    return (
        <View style={styles.container}>
            <MyButton 
                    onPress={()=>navigate('MatchSettings')}
                    title='New Match' 
                    iconName='home' 
                    width={width}/>
            <MyButton 
                    onPress={()=>navigate('TeamList')}
                    title='My Teams' 
                    iconName='people' 
                    width={width}/>
            <MyButton 
                    title='Match History' 
                    iconName='logo-firebase' 
                    width={width}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
            marginLeft:60,
            marginTop:400
    }
});

export default HomeScreen;