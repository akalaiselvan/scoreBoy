import React from 'react'
import { useContext } from 'react'
import {View,Text} from 'react-native'
import {Context as MatchContext} from '../context/MatchContext'

const MatchList=()=>{
    const {state}=useContext(MatchContext)
    return <View>
        {state.matches.map((m,k)=>{
                return <Text key={k}>{m.sNo} . {m.host} Vs {m.opp}</Text>
        })}
    </View> 
}

export default MatchList;