import React ,{useContext}from 'react'
import {View} from 'react-native'
import {List} from 'native-base'
import { TeamCard } from '../components/Card'
import { Context as TeamContext} from '../context/TeamContext'


const PlayersList=({route})=>{
    const {state} =useContext(TeamContext);
    const teamName=route.params.name;
    const team=state.teams.find(t=>t.name===teamName)
    return <View>
                 <List  dataArray={team.players}
                        keyExtractor={(item,index)=>index.toString()}
                        renderRow={(item)=><TeamCard text={item}/>}
                    />
            </View>
}

export default PlayersList;