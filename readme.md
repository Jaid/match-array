# match-array


Returns an array of all found named groups matched with given RegExp and string.

## Installation
<a href='https://npmjs.com/package/match-array'><img alt='npm logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/npm.png'/></a>
```bash
npm install --save match-array@^1.0.0
```
<a href='https://yarnpkg.com/package/match-array'><img alt='Yarn logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/yarn.png'/></a>
```bash
yarn add match-array@^1.0.0
```


## Try it out
<img alt='Chromium logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/browser.png'/>
Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type","text/javascript");
scriptElement.setAttribute("src","https://unpkg.com/match-array@1.0.0");
document.querySelector("head").appendChild(scriptElement);
```

This module is now loaded in a variable that can be accessed in any scope.

```javascript
typeof matchArray.default
```

## Documentation
Returns all matches of given named groups from a RegEx expression

**Kind**: Exported function  

| Param | Type |
| --- | --- |
| regexExpression | <code>Regexp</code> | 
| targetString | <code>string</code> | 

**Example**  
```javascript
import matchArray from "match-array"
const result = matchArray(/start +(?<id>[A-Za-z]+)(-(?<suffixNumber>\d+))? +end/g, " start  word  end\nstart no match here end\nstart nextword-2 end")
result === [
  {
    id: "word",
    suffixNumber: null,
  },
  {
    id: "nextword",
    suffixNumber: "2",
  },
]
```


## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
