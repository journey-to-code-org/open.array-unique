export function uniqueArray<T>(array: readonly T[]): T[];
export function uniqueArray<T>(array: readonly T[], key: keyof T | ((value:T)=>unknown)): T[];
