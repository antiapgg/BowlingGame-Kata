import { LeapYear } from '../src/LeapYear';

describe('LeapYear', (): void => {
    let sut: LeapYear;

    const isLeap = ' is a Leap Year';
    const notLeap = ' is not a Leap Year';

    beforeEach(() => {
        sut = new LeapYear();
    });

    it('should return "NO Leap Year" when the year is not divisible by 4', () => {
        expect(sut.check(1997)).toBe(notLeap);
    });
    it('should return "Leap Year" when the year is divisible by 4', () => {
        expect(sut.check(1996)).toBe(isLeap);
        expect(sut.check(2400)).toBe(isLeap);
        expect(sut.check(2000)).toBe(isLeap);
    });
    it('should return "Leap Year" when the year is divisible by 400', () => {
        expect(sut.check(1600)).toBe(isLeap);
        expect(sut.check(1996)).toBe(isLeap);
        expect(sut.check(2400)).toBe(isLeap);
        expect(sut.check(2000)).toBe(isLeap);
    });
    it('should return "NO Leap Year" when the year is divisible by 4 and by 100 but is not divisible by 400', () => {
        expect(sut.check(1800)).toBe(notLeap);
        expect(sut.check(1800)).toBe(notLeap);
    });
});
