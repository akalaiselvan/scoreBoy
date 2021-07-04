import React from 'react'
import {Picker} from '@react-native-picker/picker';

export const TeamPicker=({style,teams,value,onValueChange})=>{
    let picker=teams.map(team => {
         if(team){
                return <Picker.Item label={team} value={team} key={team}/>
         }        
    })
    return <Picker style={style}
                    selectedValue={value}
                    onValueChange={(v)=>onValueChange(v)}
                   // prompt='                  Select Team'
                >   
      {<Picker.Item label='--  Select Team  --' value='0' key='0'/>}                 
      {picker}              
      </Picker>
}