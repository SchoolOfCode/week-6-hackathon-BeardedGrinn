# Project Name

Warframe Relic Probabilities

## Overview

Long ago, in the shadowed corners of the Origin System, the legendary Sevagoth Prime was shattered into four parts: his Blueprint, Neuroptics, Chassis, and Systems. These fragments were scattered across the galaxy, hidden within mysterious relics, each protected by a veil of probability.

Your mission, Tenno, is to uncover the most reliable relics to assemble Sevagoth Prime once more. To achieve this, you must analyze the rewards within the relics and determine which relic offers the highest chance of obtaining each piece of Sevagoth Prime.

The Challenge:
For each Sevagoth Prime component:

Identify all relics that can yield the component as a reward.
Analyze their drop probabilities to find the relic that gives you the best chance of acquiring that specific part.
Return your findings, mapping each component to its best relic.

Rules of Engagement:
Relics contain rewards with three levels of rarity: Common, Uncommon, and Rare. Each rarity has an associated probability.
Your focus is only on the four components of Sevagoth Prime:
Sevagoth Prime Blueprint
Sevagoth Prime Neuroptics Blueprint
Sevagoth Prime Chassis Blueprint
Sevagoth Prime Systems Blueprint
You must return the best relic for each component as an object, where the key is the component name and the value is the relic name.

Example Output:
If your analysis is correct, the result should look like this:

{
    "Sevagoth Prime Blueprint": "Lith G13",
    "Sevagoth Prime Neuroptics Blueprint": "Neo S11",
    "Sevagoth Prime Chassis Blueprint": "Meso A7",
    "Sevagoth Prime Systems Blueprint": "Meso G8"
}

Hints:
Relics can be tricky to interpret. Ensure you check all the rewards for a match before making your decision.
Sometimes multiple relics offer the same component. In these cases, compare the drop probabilities to make your choice.
The galaxy is vast, but your logic should be simple. Focus on finding the best relic for each component without overthinking it.

Tests Will Guide You:
The ancient Ordis AI has already prepared tests to verify your work. If you succeed, the tests will light up with a green glow, and Sevagoth Prime will be whole again.

### Planning Phase

- Disney Ideation: Dreamer, Realist and Critic to detemine the scope of my kata and decide how difficult to make the Kata.
- Decide on what kind of tests I want to use, this will dictate what kind of data I use.
- Decide on a testing framework -- Vitest
- Run initial setup by running `npm install vitest -D`
- Write tests that I want the user to solve.
- Build array for user to use and pull information from.
- Solve my own tests and find any issues.
- Adapt code around issues if any are found.

### Progress Tracking

- Brainstorm Ideas and decide on story and test ✅
- MVP 1 - Design tests and Array ✅
- MVP 2 - Test my code and find solutions and see if there are any issues ✅
- MVP 3 - Alter Code around test results ✅
- Stretch Goal - Convert relicData into a JSON to export and import.

### Resources

- Team Members - Mitchell Grinnell, Ashton Bailey and Nasrin Sultana.
- Tools - VScode, Javascript, Vitest, Copilot, ChatGPT.

### Idea & Concepts

- Initial Idea - My initial idea was to do drop chances within relics when one or more player within the game select a single reward from different relics, however I quickly realised that if i couldnt figure out how to solve that problem, then I couldn't expect someone else to. Yes someone may be able to do it, but if I can then I didn't want to as how would I be able to test if my test could be solved.

- Realist Idea - I changed my idea to have an array of a few different relics with different rewards in them and some repeating with a probability interger in them for each reward. Then set up tests for finding all the relics that had a specific set of rewards within them, and a second test that compares the probability of the rewards and expects the results to be the relics with the highest chance to give the desired rewards.

## User Feedback

Please input your feedback below from your experience with my Kata. Thank you. 😊

### Testing Results

-- Did you find a solution to pass both of the tests?

### User testimonial

-- Use this space to give specific feedback on your results.
>

## Next Steps

- Go back to my original idea and see if I can implement a test and solve it.
- Use a warframe relics database to test against instead of writing my own.