import React from 'react'
import { Button , Text , Icon } from 'native-base'

const MyButton=(props)=>{
    const {title,iconName,width,onPress,size} = props
    const buttonSize=size?'small':'large'
    return (
        <Button iconLeft 
                rounded
                onPress={()=>onPress()}
                style={{margin:10,width:width,justifyContent:'flex-start'}} >
            <Icon name={iconName}/>
            <Text style={{fontWeight:'900'}}>{title}</Text>
        </Button>
    )
}

const OptionButton=(props)=>{
    const {title,width,onPress} = props
    
    return (
        <Button small onPress={()=>onPress()}
                style={{margin:5,width:width,justifyContent:'center'}} >
            <Text>{title}</Text>
        </Button>
    )
}

export {MyButton,OptionButton};
