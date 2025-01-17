/**
 * Welcome Tenno! Long ago, in the shadowed corners of the Origin System, the legendary Sevagoth Prime was shattered into four parts: his Blueprint, Neuroptics, Chassis, and Systems. These fragments were scattered across the galaxy, hidden within mysterious relics, each protected by a veil of probability.
*
* Your mission, Tenno, is to uncover the most reliable relics to assemble Sevagoth Prime once more. To achieve this, you must analyze the rewards within the relics and determine which relic offers the highest chance of obtaining each piece of Sevagoth Prime.
* The Challenge:
* For each Sevagoth Prime component:
*
* Identify all relics that can yield the component as a reward.
Analyze their drop probabilities to find the relic that gives you the best chance of acquiring that specific part.
Return your findings, mapping each component to its best relic.
*
* Rules of Engagement:
* Relics contain rewards with three levels of rarity: Common, Uncommon, and Rare. Each rarity has an associated probability.
Your focus is only on the four components of Sevagoth Prime:
* Sevagoth Prime Blueprint
* Sevagoth Prime Neuroptics Blueprint
* Sevagoth Prime Chassis Blueprint
* Sevagoth Prime Systems Blueprint
* You must return the best relic for each component as an object, where the key is the component name and the value is the relic name.
*
* Example Output:
* If your analysis is correct, the result should look like this:

{
    "Sevagoth Prime Blueprint": "Lith G13",
    "Sevagoth Prime Neuroptics Blueprint": "Neo S11",
    "Sevagoth Prime Chassis Blueprint": "Meso A7",
    "Sevagoth Prime Systems Blueprint": "Meso G8"
}
*
* Hints:
* Relics can be tricky to interpret. Ensure you check all the rewards for a match before making your decision.
Sometimes multiple relics offer the same component. In these cases, compare the drop probabilities to make your choice.
The galaxy is vast, but your logic should be simple. Focus on finding the best relic for each component without overthinking it.

* Tests Will Guide You:
* The ancient Ordis AI has already prepared tests to verify your work. If you succeed, the tests will light up with a green glow, and Sevagoth Prime will be whole again.
*
* Before you begin:
* Don't forget to `npm install` to install the necessary packages, and `npm run test` to run the tests.
* Ignore the solutions.md, unless you want to spoil the surprise.
*
* Good luck, Tenno! The Origin System is counting on you!
 */

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

};

export function bestSevagothRelics(relicData) {

};