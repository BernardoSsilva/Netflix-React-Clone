"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=e(require("postcss-selector-parser"));const o=/:any-link/;function t(e){const t=!("preserve"in Object(e))||Boolean(e.preserve);return{postcssPlugin:"postcss-pseudo-class-any-link",Rule(e,{result:r}){if(!o.test(e.selector))return;const n=e.raws.selector&&e.raws.selector.raw||e.selector;if(":"===n[n.length-1])return;let l;try{l=s.default((e=>{let s,o,t,r,n,l=-1;for(t=e.nodes[++l];t;){for(o=-1,s=t.nodes[++o];s;){if(!(":any-link"!==s.value||"pseudo"!==s.type||s.nodes&&s.nodes.length)){r=t.clone(),n=t.clone(),r.nodes[o].value=":link",n.nodes[o].value=":visited",e.nodes.splice(l--,1,r,n);break}s=t.nodes[++o]}t=e.nodes[++l]}})).processSync(n)}catch(s){return void e.warn(r,`Failed to parse selector : ${e.selector}`)}void 0!==l&&l!==n&&(t?e.cloneBefore({selector:l}):e.selector=l)}}}t.postcss=!0,module.exports=t;
