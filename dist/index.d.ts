interface SyntheticDivisionOutput {
    /** The quotient of the division. */
    q: number[];
    /** The remainder of the division. */
    r: number[];
}
/**
 * Computes synthetic division of polynomials. Polynomial degrees n >= m.
 * @param {number[]} P Polynomial such that p[0]*x^n + p[1]*x^{n-1} + ... + p[n]*x + p[n+1]
 * @param {number[]} D Polynomial such that d[0]*x^m + d[1]*x^{m-1} + ... + d[m]*x + d[m+1]
 * @returns {Object} Computed quotient and remainder.
 */
export default function synthDiv(P: number[], D: number[]): SyntheticDivisionOutput;
export {};
