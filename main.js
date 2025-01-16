export const relicData = [
    {
    name: 'Axi A19', 
    tier: 'Axi', 
    rewards: [
      { name: 'Epitaph Prime Blueprint', rarity: 'Common', probability: 0.6 },
      { name: 'Xaku Prime Systems Blueprint', rarity: 'Uncommon', probability: 0.25 },
      { name: 'Fang Prime Blueprint', rarity: 'Rare', probability: 0.15 }
    ],
},
{
    name: 'Neo A13', 
    tier: 'Neo', 
    rewards: [
      { name: 'Forma Blueprint', rarity: 'Common', probability: 0.6 },
      { name: 'Sevagoth Prime Blueprint', rarity: 'Uncommon', probability: 0.25 },
      { name: 'Acceltra Prime Barrel', rarity: 'Rare', probability: 0.15 }
    ],
},
{
    name: 'Meso A7', 
    tier: 'Meso', 
    rewards: [
      { name: 'Sevagoth Prime Chassis Blueprint', rarity: 'Common', probability: 0.6 },
      { name: 'Orthos Prime Blade', rarity: 'Uncommon', probability: 0.25 },
      { name: 'Akarius Prime Blueprint', rarity: 'Rare', probability: 0.15 }
    ],
},
{
    name: 'Lith A6', 
    tier: 'Lith', 
    rewards: [
      { name: 'Masseter Prime Handle', rarity: 'Common', probability: 0.6 },
      { name: 'Shade Prime Systems', rarity: 'Uncommon', probability: 0.25 },
      { name: 'Akarius Prime Receiver', rarity: 'Rare', probability: 0.15 }
    ],
},
{
    name: 'Axi S17', 
    tier: 'Axi', 
    rewards: [
      { name: 'Grendel Prime Neuroptics Blueprint', rarity: 'Common', probability: 0.6 },
      { name: '2X Forma Blueprint', rarity: 'Uncommon', probability: 0.25 },
      { name: 'Sevagoth Prime Chassis Blueprint', rarity: 'Rare', probability: 0.15 }
    ],
},
{
    name: 'Meso G8', 
    tier: 'Meso', 
    rewards: [
      { name: 'Sevagoth Prime Systems Blueprint', rarity: 'Common', probability: 0.6 },
      { name: '2X Forma Blueprint', rarity: 'Uncommon', probability: 0.25 },
      { name: 'Grendel Prime Blueprint', rarity: 'Rare', probability: 0.15 }
    ],
},
{
    name: 'Lith G13',
    tier: 'Lith',
    rewards: [
      { name: 'Sevagoth Prime Blueprint', rarity: 'Common', probability: 0.6 },
      { name: 'Grendel Prime Chassis Blueprint', rarity: 'Uncommon', probability: 0.25 },
      { name: 'Gunsen Prime Blade', rarity: 'Rare', probability: 0.15 }
    ],
},
{
    name: 'Neo S11',
    tier: 'Neo',
    rewards: [
      { name: 'Grendel Prime Neuroptics Blueprint', rarity: 'Common', probability: 0.6 },
      { name: 'Sevagoth Prime Neuroptics Blueprint', rarity: 'Uncommon', probability: 0.25 },
      { name: 'Gunsen Prime Blueprint', rarity: 'Rare', probability: 0.15 }
    ],
  },
];

export function sevagothRelics(relicData) {
    // const sevagothComponents = [
    //     'Sevagoth Prime Blueprint',
    //     'Sevagoth Prime Neuroptics Blueprint',
    //     'Sevagoth Prime Chassis Blueprint',
    //     'Sevagoth Prime Systems Blueprint'
    // ];

    // const requiredRelics = relicData.filter(relic =>
    //     relic.rewards.some(reward => sevagothComponents.includes(reward.name))
    // );

    // return requiredRelics.map(relic => relic.name);
};

export function bestSevagothRelics(relicData) {
    // const sevagothComponents = [
    //     'Sevagoth Prime Blueprint',
    //     'Sevagoth Prime Neuroptics Blueprint',
    //     'Sevagoth Prime Chassis Blueprint',
    //     'Sevagoth Prime Systems Blueprint'
    // ];

    // // Initialize an object to store the best relic for each component
    // const bestRelics = {};

    // // Iterate over the components
    // sevagothComponents.forEach(component => {
    //     // Find all relics that contain this component
    //     const matchingRelics = relicData.filter(relic =>
    //         relic.rewards.some(reward => reward.name === component)
    //     );

    //     // Select the relic with the highest drop probability for this component
    //     const bestRelic = matchingRelics.reduce((best, currentRelic) => {
    //         const bestReward = best.rewards.find(reward => reward.name === component);
    //         const currentReward = currentRelic.rewards.find(reward => reward.name === component);

    //         return currentReward.probability > bestReward.probability ? currentRelic : best;
    //     });

    //     // Store the best relic for the current component
    //     bestRelics[component] = bestRelic.name;
    // });

    // return bestRelics;
};