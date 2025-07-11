import React from 'react';
import Banner from '../Component/Banner';
import UpComingMarathon from '../Component/UpComingMarathon';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <main>
               {/* upcomingmarathon section  */}
               <UpComingMarathon></UpComingMarathon>
            </main>
        </div>
    );
};

export default Home;