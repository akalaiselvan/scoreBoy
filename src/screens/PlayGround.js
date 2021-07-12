import React from 'react'
import {StyleSheet,Text,View} from 'react-native'
import { PrimaryButton ,WarningButton,LastOverBadge} from '../components/Badge'
import {Card} from 'native-base'
import PlayOptions from '../components/PlayOptions'
import {OptionButton} from '../components/Button'
import { Context as MatchContext } from '../context/MatchContext'
import { useContext } from 'react'
import { useState } from 'react'

const PlayGround=({route})=>{
    const {teamSize,opp,host,toss,overs,sNo}=route.params        
    const {state,addRun,undoLastBall}=useContext(MatchContext);
    const [wide,setWide]=useState(false);
    const [noball,setNoball]=useState(false);
    const [bye,setBye]=useState(false);
    const [legbye,setLegbye]=useState(false);
    
    const currentMatch=state.matches.find(m=>m.sNo===sNo)
    const tempSummary=currentMatch.summary
    const runs=tempSummary.map(o=>o.run)
    const total=tempSummary.map(o=>o.run!=='W'?o.run:0).reduce((p,n)=>p+n,0);
    const wicket=tempSummary.filter(f=>f.run==='W')


    const getLastBall=()=>{
        if(tempSummary.length>0){
            let ld=tempSummary[tempSummary.length-1].ball;
            if((Math.round(ld%1*10)/10)===0.6){
                ld=Math.round(ld)
            }
            return ld
        }else{
            return 0
        }
    }

    const isExtra=()=>{
        if(wide===true||noball===true){
            return true
        }else{
            return false
        }
    }

    const addrun=(run)=>{
        let nextBall;
        if(tempSummary.length>0){
            const lastBall=tempSummary[tempSummary.length-1].ball
            if(isExtra()){
                nextBall=lastBall
            }else{
                nextBall=lastBall+0.1;
                nextBall=Math.round(nextBall * 10) / 10
                if((Math.round(lastBall%1*10)/10)===0.6){
                    console.log('Over Completed')
                    nextBall=Math.round(lastBall)
                    nextBall=nextBall+0.1;
                    nextBall=Math.round(nextBall * 10) / 10
                }
            }
            
        }else{
            if(isExtra()){
                nextBall=0.0   
            }else{
                nextBall=0.1
            }
        }
        console.log(nextBall)
        addRun(run,false,0,'Rohit','Perera',nextBall,sNo)
        resetExtras()
    }

    const resetExtras=()=>{
        setBye(false);
        setLegbye(false);
        setNoball(false);
        setWide(false)
    }

    const setExtras=(extra)=>{
        switch(extra){
            case 'wide':
                setWide(true);
                setLegbye(false);
                setNoball(false);
                setBye(false);
                return;
            case 'noball':
                setWide(false);
                setLegbye(false);
                setNoball(true);
                setBye(false);
                return;
            case 'bye':
                setWide(false);
                setLegbye(false);
                setNoball(false);
                setBye(true);
                return;
            case 'legbye':
                setWide(false);
                setLegbye(true);
                setNoball(false);
                setBye(false);
                return;     
        }
    }

    return <> 
        <Card style={styles.mainScore}>
            <Text>Total : {total} - {wicket.length}</Text>
            <Text>Overs : {getLastBall()}</Text>
        </Card>
        <Card style={styles.matchInfo}>
        <View style={{flexDirection:'row'}}>
            <Text style={{marginRight:5,fontSize:15,marginTop:'4%'}}>This Over :</Text>
            <LastOverBadge thisOver={runs}/>
        </View>
        </Card>
        <Card style={styles.undo}>
            <OptionButton title='UNDO' width='93%' onPress={()=>undoLastBall(sNo)}/>
        </Card>
        <Card style={styles.options}>
            <OptionButton title='Switch' width='80%'/>
            <OptionButton title='Retire' width='80%'/>
            <OptionButton title='Switch' width='80%'/>
        </Card>
        <Card style={styles.extras}>
            <PlayOptions text='Wide' isSelected={wide} onPress={()=>setExtras('wide')}/>
            <PlayOptions text='No ball' isSelected={noball} onPress={()=>setExtras('noball')}/>
            <PlayOptions text='byes' isSelected={bye} onPress={()=>setExtras('bye')}/>
            <PlayOptions text='Legbyes' isSelected={legbye} onPress={()=>setExtras('legbye')}/>    
        </Card>
        <Card style={styles.runCard}>
            <PrimaryButton text='0' onPress={()=>addrun(0)}/>
            <PrimaryButton text='1' onPress={()=>addrun(1)}/>
            <PrimaryButton text='2' onPress={()=>addrun(2)}/>
            <PrimaryButton text='3' onPress={()=>addrun(3)}/>
            <PrimaryButton text='4' onPress={()=>addrun(4)}/>
            <PrimaryButton text='5' onPress={()=>addrun(5)}/>
            <PrimaryButton text='6' onPress={()=>addrun(6)}/>
            <WarningButton text='W' onPress={()=>addrun('W')}/>    
        </Card>
        </>
    
}

const styles=StyleSheet.create({
    runCard:{
        height:'45%',
        width:'38%',
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap',
        position:'absolute',
        bottom:'2%',
        right:'2%'

    },
    matchInfo:{
        height:'8%',
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap',
        marginLeft:'2%',
        marginRight:'2%',
        position:'absolute',
        top:'32%'
    },
    mainScore:{
        marginTop:10,
       height:'30%', 
       marginLeft:'2%',
       marginRight:'2%'
    },
    extras:{
        position:'absolute',
        height:'30%',
        width:'53%',
        bottom:'2%',
        left:'2%'
    },
    options:{
        flexDirection:'row',
        flexWrap:'wrap',
        position:'absolute',
        justifyContent:'space-evenly',
        height:'22%',
        width:'53%',
        bottom:'35%',
        left:'2%',
        padding:'5%'
    },
    undo:{
        position:'absolute',
        height:'8%',
        width:'39%',
        right:'1%',
        top:'41.5%',
        justifyContent:'space-evenly',

    }
})

export default PlayGround;