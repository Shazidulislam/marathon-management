import React from 'react';
import Banner from '../Component/Banner';
import UpComingMarathon from '../Component/UpComingMarathon';
import HomeMarathon from '../Component/HomeMarathon';
import ExtrasectionOne from '../Component/ExtrasectionOne';
import ExtraSection2 from '../Component/ExtraSection2';
import TrainerSection from '../Component/TrainerSection/TrainerSection';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <main>
                <HomeMarathon></HomeMarathon>
               {/* upcomingmarathon section  */}
               <UpComingMarathon></UpComingMarathon>

               <ExtrasectionOne></ExtrasectionOne>
               <TrainerSection></TrainerSection>
               <ExtraSection2></ExtraSection2>
            </main>
        </div>
    );
};

export default Home;