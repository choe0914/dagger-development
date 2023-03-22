import React from 'react'
import suspects from '../assets/suspects/mr_green.png';
import { connect } from 'react-redux'


function Player(props){
    return(
        <div style={{
            position: 'absolute',
            y: props.position[1],
            x: props.position[0],
            backgroundImage: `url('${suspects}')`,
            backgroundPosition: '0 0',
            width: '40px',
            height: '40px'
        }}
        > </div>
    )
}

function mapStateToProps(state){
    return {
        ...state.player,        
    }
}
function getState(fn1, fn2){
    return function(component){
        return component
    }
}

export default connect(mapStateToProps)(Player)