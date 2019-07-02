/** @module match-array */

import hasContent from "has-content"

/**
 * Returns all matches of given named groups from a RegEx expression
 * @example
 * import matchArray from "match-array"
 * const result = matchArray()
 * result === 1549410770
 * @function
 * @param {string|Regexp} regexExpression
 * @param {string} targetString
 * @returns {Object[]}
 */
export default (regexExpression, targetString) => {
  const matches = []
  const groupNames = new Set
  let currentMatch
  while ((currentMatch = regexExpression.exec(targetString)) !== null) {
    const groups = currentMatch.groups
    if (hasContent(groups)) {
      matches.push(groups)
      for (const groupName of Object.keys(groups)) {
        groupNames.add(groupName)
      }
    }
  }
  debugger
  if (!hasContent(matches)) {
    return []
  }
  const results = []
  for (const match of matches) {
    const result = {}
    for (const groupName of groupNames) {
      result[groupName] = match[groupName] || null
    }
    results.push(result)
  }
  return results
}