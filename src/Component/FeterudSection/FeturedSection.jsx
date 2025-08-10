import React from 'react';



const FeturedSection = () => {

    const datas = [
  {
    "id": 1,
    "title": "Speedy Striders Running Club",
    "description": "Speedy Striders is a vibrant running community designed for both beginners and seasoned marathoners. Our club focuses on improving running form, endurance, and mental strength. We regularly organize city runs, hill sprints, and long-distance training sessions to help members push their limits while having fun. Whether you’re training for your first 5K or a full marathon, we’ve got the right plan for you.",
    "features": {
      "weekly_runs": "Every Saturday and Wednesday",
      "membership_fee": "$20 per month",
      "location": "Downtown Park",
      "special_events": "Annual Half-Marathon Challenge"
    }
  },
  {
    "id": 2,
    "title": "Urban Pacers Club",
    "description": "Urban Pacers brings together passionate runners from all walks of life to explore the heart of the city on foot. Our club blends fitness and adventure, with scenic routes that include parks, riversides, and historic landmarks. Members also enjoy post-run stretching sessions, nutritional advice, and group activities to boost overall well-being.",
    "features": {
      "weekly_runs": "Tuesday and Friday evenings",
      "membership_fee": "$15 per month",
      "location": "City Hall Square",
      "special_events": "City Lights Night Run"
    }
  },
  {
    "id": 3,
    "title": "Trail Blazers Running Squad",
    "description": "Trail Blazers is perfect for nature lovers and adventure seekers who prefer running in the great outdoors. Our routes take members through forest trails, countryside paths, and mountain tracks. We focus on building stamina, agility, and mental focus through challenging yet rewarding runs. The group atmosphere ensures motivation and a strong sense of belonging.",
    "features": {
      "weekly_runs": "Sunday mornings and Thursday evenings",
      "membership_fee": "$25 per month",
      "location": "Pinewood Nature Reserve",
      "special_events": "Mountain Marathon Adventure"
    }
  }
 
]


    return (
        <div className='flex justify-center flex-col items-center px-10' >
            <h2 className='text-3xl font-semibold pt-10' >Core Benefits</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-auto py-6 md:px-12' >
                 {
                    datas?.map((data)=>{return(
                        <div className='p-4 bg-black/25 shadow rounded-xl' key={data?.id} >
                            <h1 className='text-2xl font-semibold pb-3' >{data?.title}</h1>
                            <p className='text-sm'> {data?.description}</p>
                            
                        </div>
                    )})
                 }
            </div>
        </div>
    );
};

export default FeturedSection;