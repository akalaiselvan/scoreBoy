import createContext from "./createContext";

const reducer=(state,actions)=>{
    const matches=state.matches;
    let currMatch;
    let currIndex;
    let tempSummary;
    let sNo;
    switch(actions.type){
        case 'addMatch':
            const tmpState={ teamSize:actions.payload.teamSize,
                             host:actions.payload.host,
                             opp:actions.payload.opp,
                             toss:actions.payload.toss,
                             overs:actions.payload.overs,
                             sNo:state.matchCount,
                             summary:[],
                             innings:1,
                             target:0,
                            }                
            return {...state,matches:[...state.matches,tmpState],matchCount:state.matchCount+1}
        case 'addRun':
            const {run,isExtra,extraType,batsman,bowler,ball}=actions.payload
            sNo=actions.payload.sNo
            currMatch=matches.find(match=>match.sNo===sNo)
            currIndex=matches.findIndex(match=>match.sNo===sNo)
            const tmpBall={
                            run:run,
                            isExtra:isExtra,
                            extraType:extraType,
                            batsman:batsman,
                            bowler:bowler,
                            ball:ball
                          }
            tempSummary=[...currMatch.summary,tmpBall]
            currMatch.summary=tempSummary
            matches[currIndex]=currMatch;              
            return {...state,matches:matches}
        case 'undo':
            sNo=actions.payload.sNo
            currMatch=matches.find(match=>match.sNo===sNo)
            currIndex=matches.findIndex(match=>match.sNo===sNo)
            tempSummary=[...currMatch.summary]
            tempSummary.pop()
            currMatch.summary=tempSummary
            matches[currIndex]=currMatch
            return {...state,matches:matches}
        return    
        default:
            return state;
    }
}


const addMatch=dispatch=>(teamSize,host,opp,toss,overs)=>{
    dispatch({type:'addMatch',payload:{teamSize,host,opp,toss,overs}})
}

const addRun=dispatch=>(run,isExtra,extraType,batsman,bowler,ball,sNo)=>{
    dispatch({type:'addRun',payload:{run,isExtra,extraType,batsman,bowler,ball,sNo}})
}

const undoLastBall=dispatch=>(sNo)=>{
    dispatch({type:'undo',payload:{sNo}})
}

export const {Context,Provider}=createContext(reducer,{addMatch,addRun,undoLastBall},{ matches:[], 
                                                                   matchCount:1});


// {
//     sNo,
//     teamSize,
//     host,
//     opposition,
//     toss,
//     Totalovers,
//     matchSummary:[],   
//     batting:{
//     },
//     bowling:{       
//     },
//     total
// }


/*summaryobject:

{
    run:1,
    isExtra:yes,
    extraType:Wd,
    bat:rohit,
    bowler:perera,
    ball:0.4
},
{
    run:4,
    isExtra:no,
    extraType:0,
    bat:rohit,
    bowler:perera,
    ball:0.4
},




*/