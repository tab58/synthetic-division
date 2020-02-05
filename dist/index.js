"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Computes synthetic division of polynomials. Polynomial degrees n >= m.
 * @param {number[]} P Polynomial such that p[0]*x^n + p[1]*x^{n-1} + ... + p[n]*x + p[n+1]
 * @param {number[]} D Polynomial such that d[0]*x^m + d[1]*x^{m-1} + ... + d[m]*x + d[m+1]
 * @returns {Object} Computed quotient and remainder.
 */
function synthDiv(P, D) {
    // do input validation check
    var n = P.length - 1;
    var m = D.length - 1;
    if (m > n) {
        throw new Error('Divisor polynomial must be lower degree than dividend polynomial.');
    }
    var Q = P.slice();
    var q = n - m + 1;
    var h = D[0]; // scale for non-monic polynomials
    for (var i = 0; i < q; ++i) {
        Q[i] /= h;
        var p = Q[i];
        for (var j = 1; j <= m; ++j) {
            Q[i + j] += p * -D[j];
        }
    }
    return {
        q: Q.slice(0, q),
        r: Q.slice(q),
    };
}
exports.default = synthDiv;
//# sourceMappingURL=index.js.map