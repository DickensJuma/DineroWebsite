

import Hero from "./hero"
import Simple from "./simple"
import Blog from "./blog"
import Footer from "./footer";
import Brands from "./brands";
import Control from "./control";
import Cta from "./cta";
import TeamLifeEasier from "./TeamLifeEasier";
import Team from "./team"
import Testimony from "./testimony";
import Tryusout from "./tryusout";

function Index() {
    return (
        <>
        <Hero />
            {/* <Simple /> */}
            <Control />
            <Cta />
            <Team/>
            <TeamLifeEasier />
            <Brands />
            <Testimony/>
            <Blog />
            <Tryusout/>
            <Footer/>
            </>
    );
}
  

export default Index;
