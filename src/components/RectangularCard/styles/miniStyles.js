import styled from "styled-components";

export const ParaCount = styled.p `
font-family: 'Prompt';
  color: #a4a7b1;
  font-size:11px;
  margin-top:13px;
  cursor:pointer;
  outline:none;
`

export const ParaText = styled.div.attrs(( ) => ({ tabIndex: 0 })) `
  font-family: 'Roboto Mono';
  color: #edecec;
  font-size:21px;
  cursor:pointer;
  outline:none;
  &:hover {
    color:#63f3ac;
    cursor:pointer;
    outline:none;
  }

`

export const ParaDescription = styled.div.attrs(( ) => ({ tabIndex:0}))`
font-family: 'Roboto Mono';
  color: #a4a7b1;
  font-size:11px;
  margin-top:7px;
  cursor:pointer;
  outline:none;

`

export const CurvedRectangularCard = styled.div.attrs(( ) => ({ tabIndex: 0 })) `
    width: 100%;
    align-self:center;
    position:relative;
    margin-top:10px;
    font-family: Cousine;
    height: 120px;
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
