import styled from "styled-components";

export const RectangularCard = styled.div`
    width: 100%;
    margin-top:10px;
    height:380px;  
    background: rgb(37,38,42);
    background: linear-gradient(90deg, rgba(37,38,42,1) 0%, rgba(45,46,50,1) 100%);
`

export const BoxOutline = styled.div.attrs(( ) => ({ tabIndex: 0 })) `

border-radius: 1px;
height: 52px;
width:100%;
margin-top:10px;
&:hover {
  border-right: 2px solid #5E81F4; // <Thing> when hovered
}
`;


export const IconBox = styled.div `
    width: 52px;
    display:flex;
    justify-content:center;
    align-items:center;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    height: 52px;
    border-radius:4px;
    &:hover {
      background: linear-gradient(0deg, rgba(94, 129, 244, 0.1), rgba(94, 129, 244, 0.1)), #FFFFFF;
    }
   
`;
