export function randomizeNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomizeDelay(): number {
    return randomizeNumber(100, 1000);
}
