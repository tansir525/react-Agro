import styled from "styled-components";



const CustomButton = styled.button `

 width: auto;
 height: 50px;
 background-color: #008000;
 color: white;
 border-radius: 5px;
 font-size: medium;
 border: none;
 letter-spacing: 1.5px;
 padding: 10px;
 font-weight: 600;
 padding-left: 15px;
 padding-right: 15px;
 position: absolute;
 

 &:hover{
    background-color: rgba(0,128,0,255);
    transition-duration: .5s;
    color: black;
    box-shadow: 1px 2px green;
    border: 1px solid transparent;

    
 }


`;
export default CustomButton;