import { Character } from './character';

export interface CharacterResults {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    };

    results: Character[];
}

