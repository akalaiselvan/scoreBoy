import React from 'react';
import { Form , Item , Input,Label,View} from 'native-base'
import {MyButton} from '../components/Button';

const TeamCreateForm=({teamName,setTeamName,player,setPlayer,addPlayer})=>{
    return <View>
        <Form>
        <Item floatingLabel style={{width:'50%',marginLeft:'25%'}}>
                <Label>Enter Team Name</Label>
                <Input value={teamName} onChangeText={setTeamName}/>
            </Item>
            <Item floatingLabel style={{width:'75%',marginLeft:'10%'}}>
                <Label>Enter Player's Name</Label>
                <Input value={player} onChangeText={setPlayer}/>
            </Item>
            <View style={{alignSelf:'flex-end'}}>
                <MyButton width={130} iconName='add' title='Add' onPress={()=>addPlayer()}/>
            </View>
        </Form>
    </View>
}

export default TeamCreateForm;