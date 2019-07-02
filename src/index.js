/** @module match-array */

/**
 * Returns the number of seconds passed since Unix epoch (01 January 1970)
 * @example
 * import matchArray from "match-array"
 * const result = matchArray()
 * result === 1549410770
 * @function
 * @returns {number} Seconds since epoch
 */
export default () => Math.floor(Date.now() / 1000)