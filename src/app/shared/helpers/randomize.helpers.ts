export function getRandomNumber(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generates random date between `startDate` and `startDate` + `maxDays`.
 * @param startDate Date to start from
 * @param maxDays Maximum days from start date
 */
export function getRandomDate(
    startDate: Date = new Date(),
    maxDays: number = 14
): Date {
    const diffDays = getRandomNumber(0, maxDays);
    const date = new Date(startDate);
    date.setDate(date.getDate() + diffDays);

    return date;
}

export function getRandomEnumValue<T = Object>(enumObject: T): T[keyof T] {
    const enumValues = (Object.keys(enumObject as any) as (keyof T)[]).map(
        key => enumObject[key]
    );
    const randomIndex = Math.floor(Math.random() * enumValues.length);

    return enumValues[randomIndex];
}

/**
 * Generates random GUID. By default, it excludes `0000-0000-0000-0000` GUID.
 * @param excludedGUID GUID to exclude from generation
 * @returns GUID formatted as `xxxx-xxxx-xxxx-xxxx`
 */
export function generateGUID(excludedGUID: string = '0000-0000-0000-0000'): string {
    let guid: string;

    do {
        guid = 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, function (c) {
            var r = (Math.random() * 16) | 0;
            return r.toString(16);
        });
    } while (guid === excludedGUID);

    return guid;
}
