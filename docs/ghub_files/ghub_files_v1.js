/*
MIT License

Copyright (c) 2021 Sharad Raj Singh Maurya

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
*/

function ghub_sp_files(n,t,e,o){var u=[];if(null!=o)return fetch(`https://api.github.com/repos/${n}/${t}/contents/${e}`).then(n=>n.json()).then(function(n){n.map(n=>{n.name.split(".").pop()===o&&u.push({f_name:n.name,f_url:n.download_url})})}),u}function ghub_all_files(n,t,e){var o=[];return fetch(`https://api.github.com/repos/${n}/${t}/contents/${e}`).then(n=>n.json()).then(function(n){n.map(n=>{o.push({f_name:n.name,f_url:n.download_url})})}),o}