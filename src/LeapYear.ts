export class LeapYear {
    private static readonly isLeap: string = 'Leap Year';
    private static readonly notLeap: string = 'NO Leap Year';

    check(year: number): string {
        if (LeapYear.isDivisibleBy4(year)) {
            return LeapYear.isLeap;
        }
        return LeapYear.notLeap;
    }

    private static isDivisibleBy4(year: number): boolean {
        if (LeapYear.isCenturyYear(year)) {
            return LeapYear.isDivisibleBy400(year);
        }
        return year % 4 === 0;
    }

    private static isCenturyYear(year: number): boolean {
        return year % 100 === 0;
    }

    private static isDivisibleBy400(year: number): boolean {
        return year % 400 === 0;
    }
}
