import React, { useContext } from 'react'
import {View} from 'react-native'
import {List} from 'native-base'
import { navigate } from '../navigationRef'
import {MyButton} from '../components/Button'
import { Context as TeamContext} from '../context/TeamContext'
import {TeamCard} from '../components/Card'

const TeamList=()=>{
    const {state}=useContext(TeamContext);
    return <View>
        <View style={{alignSelf:'center'}}>
        <MyButton
            title='Create Team'
            onPress={()=>{navigate('CreateTeam')}}
            />
        </View>
        
        <List dataArray={state.teams}
              keyExtractor={(item,index)=>index.toString()}
              renderRow={(item)=><TeamCard text={item.name} onPress={()=>navigate('PlayersList',{name:item.name})}/>}
            />      
    </View>
}

export default TeamList;