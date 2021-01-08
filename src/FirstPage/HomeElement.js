import styled from 'styled-components'
import {Link as LinkS} from 'react-router-dom';

export const HomeWrapper = styled.div`
  width: 100%;
  height: 80px;
  background: #77768a;
  opacity: 85%;
`;

export const HomeTitleH1 = styled.div`
  font: bold 24px/40px arial;
   float: left;
   padding:15px 15% 15px 15%;

  &:hover {
    color: pink;
    opacity: 80px;
    transition: 0.8s;
  }
`;

export const HomeTitleP = styled(LinkS)`
  font: bold 20px/40px arial;
  margin-left: 40px;
  padding:10px;
  text-decoration: none;
  position:relative;
  top:20px;
  left:20px;
  color:#9e9e9e
`;

export const HomeTitleButton = styled.div`
  padding: 2px;
  border-radius: 20px;
  margin: auto;
  display: block;
  float:right;
`;