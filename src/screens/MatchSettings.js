import React,{useContext,useState} from 'react'
import SettingForm from '../UI/SettingForm'
import {View,Text,Item} from 'native-base'
import {MyButton} from '../components/Button'
import {navigate} from '../navigationRef'
import { TeamPicker } from '../components/Picker'
import { Context as TeamContext } from '../context/TeamContext'
import { Context as MatchContext} from '../context/MatchContext'

const MatchSettings=()=>{
    const {state}=useContext(TeamContext);
    const {state:{matchCount},addMatch} =useContext(MatchContext);
    const teams=state.teams.map(t=>t.name)
    const [teamSize,setTeamSize]=useState('');
    const [host,setHost]=useState()
    const [opp,setOpp]=useState()
    const match=[host,opp]
    const [toss,setToss]=useState('')
    const [overs,setOvers]=useState('');

    const navigateToGround=()=>{
        if(!host || !opp ){
            console.log('Please select host and Opposition');
            return;
        }
        if(host==0||opp==0){
            console.log('Please select host and Opposition');
            return;
        }
        if(!toss){
            console.log('Select toss')
            return;
        }
        if(teamSize==='' || overs===''){
            console.log('Select team size and Total overs')
            return;
        }
        addMatch(teamSize,host,opp,toss,overs);
        const sNo=matchCount
        navigate('PlayGround',{teamSize,host,opp,toss,overs,sNo})
    }

    return<View>
            <SettingForm title='Team Size' value={teamSize} onChangeText={setTeamSize}/>
            <Item>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:'4%'}}>Host        </Text> 
                    <TeamPicker style={{width:'70%',marginLeft:'10%'}} 
                                teams={teams}
                                value={host}
                                onValueChange={setHost}/>
                </View>
            </Item>
            <Item>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:'4%'}}>Opposition      </Text> 
                    <TeamPicker style={{width:'70%'}} 
                                teams={teams}
                                value={opp}
                                onValueChange={setOpp}/>
                </View>
            </Item>
            <Item>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:'4%'}}>Toss won by   </Text> 
                    <TeamPicker style={{width:'70%'}} 
                                teams={match}
                                value={toss}
                                onValueChange={setToss}/>
                </View>
            </Item>
            <SettingForm title='Total Overs' value={overs} onChangeText={setOvers}/>
            <View style={{alignSelf:'flex-end'}}>
                <MyButton title='Start Match' 
                          onPress={()=>navigateToGround()}/>
            </View>
            
        </View>
    
}


export default MatchSettings;