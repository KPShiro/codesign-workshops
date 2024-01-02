export function randomizeNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomizeDelay(min: number = 100, max: number = 1000): number {
    return randomizeNumber(min, max);
}
