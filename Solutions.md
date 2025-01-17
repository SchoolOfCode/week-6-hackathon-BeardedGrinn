    // sevagothRelics Solution
     const sevagothComponents = [
         'Sevagoth Prime Blueprint',
         'Sevagoth Prime Neuroptics Blueprint',
         'Sevagoth Prime Chassis Blueprint',
         'Sevagoth Prime Systems Blueprint'
     ];

     const requiredRelics = relicData.filter(relic =>
         relic.rewards.some(reward => sevagothComponents.includes(reward.name))
     );

     return requiredRelics.map(relic => relic.name);
    
    // bestSevagothRelics Solution
     const sevagothComponents = [
         'Sevagoth Prime Blueprint',
         'Sevagoth Prime Neuroptics Blueprint',
         'Sevagoth Prime Chassis Blueprint',
         'Sevagoth Prime Systems Blueprint'
     ];

     // Initialize an object to store the best relic for each component
     const bestRelics = {};

     // Iterate over the components
     sevagothComponents.forEach(component => {
         // Find all relics that contain this component
         const matchingRelics = relicData.filter(relic =>
             relic.rewards.some(reward => reward.name === component)
         );

         // Select the relic with the highest drop probability for this component
         const bestRelic = matchingRelics.reduce((best, currentRelic) => {
             const bestReward = best.rewards.find(reward => reward.name === component);
             const currentReward = currentRelic.rewards.find(reward => reward.name === component);

             return currentReward.probability > bestReward.probability ? currentRelic : best;
         });

         // Store the best relic for the current component
         bestRelics[component] = bestRelic.name;
     });

     return bestRelics;