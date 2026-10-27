import {copyFileSync,cpSync,mkdirSync} from 'node:fs';
import {resolve} from 'node:path';
const source=resolve('../website');
copyFileSync(resolve(source,'src/video/IntroComposition.jsx'),resolve('src/IntroComposition.jsx'));
mkdirSync('public/assets',{recursive:true});
mkdirSync('public/brand',{recursive:true});
for(const name of ['vault','bol','pod','invoice']){try{copyFileSync(resolve(source,`public/assets/intro-${name}.png`),`public/assets/intro-${name}.png`)}catch{}}
copyFileSync(resolve(source,'public/brand/logo-primary.svg'),'public/brand/logo-primary.svg');
cpSync(resolve(source,'node_modules/@fontsource-variable/manrope/files'),'public/fonts',{recursive:true});
