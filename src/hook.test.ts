import { hook } from './hook';

/**
 * Counts the number of words in a string.
 * 
 * @param str - The input string.
 * @returns The number of words in the string.
 */
function countWords(str: string): number {
    const words = str.split(" ");
    return words.length;
}

describe('countWordsHooked', () => {
    it('should log "Before" and "After" and return the correct word count', () => {
        console.log = jest.fn(); // Mock console.log

        const countWordsHooked = hook(countWords, {
            before: () => console.log("Before"),
            after: () => console.log("After")
        });

        const result = countWordsHooked("Hello World");

        expect(console.log).toHaveBeenCalledWith("Before");
        expect(console.log).toHaveBeenCalledWith("After");
        expect(result).toBe(2);
    });
});