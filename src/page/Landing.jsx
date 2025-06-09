import React from "react";
import HeroSection from "../Sections/HeroSection/Hero.jsx";
import Heritage from "../Sections/Heritage/Heritage.jsx";
import BOShead from "../Components/BOShead.jsx";
import BOS from "../Sections/UpcomingBOS/UpcomingSection.jsx";
import BOSE from "../Sections/UpcomingBOS2/UpcomingEventsection2.jsx";
import BOSdata from "../UPComingBOSData.js";
import BOSdataE from "../UpcomingEventData2.js";
import Movement from "../Sections/MomentumSection/JoinMovement.jsx";
// import SponserSection from "../Sections/SuponseerSection/Suponsers.jsx";
import WhySponcerSection from "../Sections/WhySponser/WhySponser.jsx";
import PatnerSection from "../Sections/PatnersSection/Patners.jsx";
import InstaTrackSection from "../Sections/InstaTrackSection/InstaTrack.jsx";
import CommunityTalksSection from "../Sections/ComunityTalk/ComunityTalk.jsx";
import StayConnectedSection from "../Sections/StayConnected/StayConnected.jsx";
import WellfareSection from "../Sections/WellfareSection/Wellfare.jsx";
import Footer from "../Layout/footer/Footer.jsx";

const Landing = () => {
    const BosData = BOSdata.map((data) => <BOS key={data.id} {...data} />);
    const BosDataE = BOSdataE.map((data) => <BOSE key={data.id} {...data} />);
    return (
    <div>
        <>
            <HeroSection />
            <Heritage />
            <section>
            <BOShead />
            <div className="gridContainer">{BosData}</div>
            </section>
            <section>
            <BOShead />
            <div className="outter">{BosDataE}</div>
            </section>
            <Movement />
            {/* <SponserSection /> */}
            <WhySponcerSection />
            <PatnerSection />
            <InstaTrackSection />
            <CommunityTalksSection />
            <StayConnectedSection />
            <WellfareSection />
            <Footer />
        </>
    </div>
    );
};

export default Landing;
