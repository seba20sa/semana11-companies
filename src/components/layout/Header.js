import React from 'react';

function Header () {
    return (
        <header style= {headerStyle}>
        <h1>Companies</h1>
        </header>
    )
}


const headerStyle = {
    background: 'pink',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
    

}
export default Header;