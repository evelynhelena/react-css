import React from 'react';

function Item1(props){
    const meuEstilo = {
        width: '200px',
        height: '200px',
        backgroundColor: props.cor
    }
    return <div style={meuEstilo}/>
}

export default Item1;