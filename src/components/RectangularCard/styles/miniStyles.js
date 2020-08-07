import styled from "styled-components";

export const CurvedRectangularCard = styled.div.attrs(( ) => ({ tabIndex: 0 })) `
    width: 100%;
    align-self:center;
    margin-top:10px;
    font-family: Cousine;
    height: 150px;
    border-radius:5px;
    background-color: #2d2e32;
    -webkit-box-shadow: -6px 9px 45px -2px rgba(0,0,0,0.59);
    -moz-box-shadow: -6px 9px 45px -2px rgba(0,0,0,0.59);
    box-shadow: -6px 9px 45px -2px rgba(0,0,0,0.59);
    &:hover {
      -webkit-box-shadow: -6px -1px 181px 30px rgba(0,0,0,0.59);
      -moz-box-shadow: -6px -1px 181px 30px rgba(0,0,0,0.59);
      box-shadow: -6px -1px 181px 30px rgba(0,0,0,0.59);

    }
`
