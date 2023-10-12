export function factorial(x: number): number {
    if (x < 0) {
        return 0;  
    } else if (x === 0) {
        return 1;  
    } else if (x > 15) {
        return 0;  
    } else {
        let result = 1;
        for (let i = 1; i <= x; i++) {
            result *= i;  
        }
        return result;
    }
}