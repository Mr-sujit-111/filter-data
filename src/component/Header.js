import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <>
            <HeaderPart className="my-3">Filter-list-app</HeaderPart>
        </>
    )
}

export default Header

const HeaderPart = styled.div`
height: 30px;
border-radius: 4px;
text-align: center;
border: -1.5px solid #666666;
box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
display: flex;
justify-content: center;
align-items: center;
`