 import React from 'react';
import {
  HomeWrapper,
  HomeTitleH1,
  HomeTitleP,
  HomeTitleButton,
} from "./HomeElement";
 import HomeDatalist from './Components/HomeDataPage/HomeDatalist';
import HomeFooter from './Components/HomeFooter/HomeFooter';
import HomeMainvisual from './Components/HomeMainvisual/HomeMainvisual';


function Home() {
     return (
       <>
         <HomeWrapper>
           {/* HomerWraper 홈 메뉴 상단 마크 */}
           <HomeTitleH1>MyVelog</HomeTitleH1>
           {/* 블로그 네비게이션 링크 */}
           <HomeTitleP to="/">Home</HomeTitleP>
           <HomeTitleP to="/Home">menu</HomeTitleP>
           <HomeTitleP>wiki</HomeTitleP>
           {/* 블로그 네비게이션 링크 */}
           <HomeTitleP>About</HomeTitleP>
           <HomeTitleButton type="search">Search</HomeTitleButton>
         </HomeWrapper>
         <HomeMainvisual />,
         <HomeDatalist />,
         <HomeFooter />
       </>
     );
 }


 export default Home