import { describe, test, expect } from 'vitest'; // Import from Vitest
import { bestSevagothRelics, relicData, sevagothRelics } from './main'; // Import your function and data

describe('Warframe Relic Drop Probability Tests', () => {
    test('Should list relics required to build Sevagoth Prime', () => {
        const relicNames = sevagothRelics(relicData);

        // Expected result
        const expected = [
            'Neo A13',
            'Meso A7',
            'Axi S17',
            'Meso G8',
            'Lith G13',
            'Neo S11',
        ];

        expect(relicNames).toEqual(expected);
    });

    test('Should list the best relics to farm for Sevagoth Prime', () => {
        const bestRelics = bestSevagothRelics(relicData);

        // Expected result
        const expected = {
            'Sevagoth Prime Blueprint': 'Lith G13',
            'Sevagoth Prime Neuroptics Blueprint': 'Neo S11',
            'Sevagoth Prime Chassis Blueprint': 'Meso A7',
            'Sevagoth Prime Systems Blueprint': 'Meso G8',
        };

        expect(bestRelics).toEqual(expected);
    });
});