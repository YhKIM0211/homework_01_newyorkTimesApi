import styled from 'styled-components';

const HeaderDiv = styled.div`
width: 100vw;
height: 80px;

border: 2px solid #5a5a5a;
border-left: none;
border-right: none;
background-color: #F9FFFF; 
display: flex;
flex-direction : column;
align-items: center;

  h1 { diplay: block;
    margin : 10 auto;
  }
  nav {
    width: 100vw;
    height: 80px;
    border: 2px solid #5a5a5a;
    border-left: none;
    border-right: none;
    background-color: #F9FFFF; 
    
    height: 38px;
    display: flex;
    a {
      color: inherit;
      margin : 0 auto;

      text-decoration: none;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      text-align: center;
      
    }
  }
`;

export default HeaderDiv;