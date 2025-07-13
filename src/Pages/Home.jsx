import React from 'react';
import Banner from '../Component/Banner';
import UpComingMarathon from '../Component/UpComingMarathon';
import HomeMarathon from '../Component/HomeMarathon';
import ExtrasectionOne from '../Component/ExtrasectionOne';

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
            </main>
        </div>
    );
};

export default Home;