import React, { useContext, useState } from 'react'
import {View} from 'react-native'
import TeamCreateForm from '../UI/TeamCreateForm'
import ListItemView from '../components/ListItemView'
import {MyButton} from '../components/Button'
import {Context as TeamContext} from '../context/TeamContext'
import { navigate } from '../navigationRef'
import {Toast,Root} from 'native-base'

const CreateTeam=()=>{

    const {state,saveTeam}=useContext(TeamContext);
    const [teamName,setTeamName]=useState('');
    const [player,setPlayer]=useState('');
    const [team,setTeam]=useState([]);

    const showToast=(text)=>{
        Toast.show({
            text:text,
            duration:1500,
            position:"top",
            textStyle:{textAlign:'center'}
        })
    }

    const addPlayer=()=>{
        if(player===''){
            showToast('Give name to player')
            return;
        }
        const tmpTeam=team;
        tmpTeam.push(player)
        setTeam(tmpTeam);
        setPlayer('');
    }

    const saveNewTeam=()=>{
        if(teamName===''){
            showToast('Give some name to Team');
            return
        }
        if(team.length===0){
            showToast('Add Players to your team');
            return
        }
        saveTeam({teamName,team});
        navigate('TeamList')
    }

    return <Root><View>
        <TeamCreateForm 
                teamName={teamName} 
                setTeamName={setTeamName} 
                player={player} 
                setPlayer={setPlayer}
                addPlayer={addPlayer}/>
        <ListItemView players={team}/>
        <View style={{alignSelf:'center'}}>
            <MyButton title='Save Team' onPress={saveNewTeam}/>
        </View>
    </View>
    </Root>
}

export default CreateTeam;