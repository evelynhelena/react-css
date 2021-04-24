import React from 'react';

function Circulo(props){
    return <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: props.cor
    }}>

    </div>
}

export default Circulo;