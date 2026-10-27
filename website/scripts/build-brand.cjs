// NODE_PATH must include fontkit and sharp. Uses OFL Manrope 600.
const fs=require('fs'),path=require('path'),fontkit=require('fontkit'),sharp=require('sharp');
const root=path.resolve(__dirname,'..'),out=path.join(root,'public/brand');
const font=fontkit.openSync(process.env.BRAND_FONT);
const ribbon='M205 3 28 94Q4 106 4 132V315Q4 336 23 347L62 369Q76 377 92 369L379 234Q391 228 395 240Q398 248 387 253L214 335Q197 344 197 362V459Q197 480 214 491L295 539V445Q295 426 311 418L416 363V246Q416 226 399 216L278 149Q263 141 248 149L43 248Q27 255 29 243Q29 237 39 232L190 153Q205 145 205 128Z';
const terminal='M311 441Q311 431 322 425L416 377V472Q416 493 399 503L311 550Z';
function mark(c='#102D28',a='#D58C65',x=0,y=0,h=560){return `<g transform="translate(${x} ${y}) scale(${h/560})"><path fill="${c}" d="${ribbon}"/><path fill="${a}" d="${terminal}"/></g>`}
function word(text,size,x,y,color){let run=font.layout(text),cursor=0,s=size/font.unitsPerEm;let body=run.glyphs.map((g,i)=>{let p=run.positions[i];let el=`<path transform="translate(${x+(cursor+p.xOffset)*s} ${y-p.yOffset*s}) scale(${s} ${-s})" d="${g.path.toSVG()}"/>`;cursor+=p.xAdvance-size*.2;return el}).join('');return {body:`<g fill="${color}">${body}</g>`,width:cursor*s}}
function svg(body,w,h,title='FreightClaimKit'){return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${title}"><title>${title}</title>${body}</svg>`}
function save(name,body){fs.writeFileSync(path.join(out,name),body)}
async function main(){
fs.mkdirSync(out,{recursive:true});
for(const [v,c,a] of [['primary','#102D28','#D58C65'],['reverse','#EDF3F0','#D58C65'],['mono','#102D28','#102D28'],['white','#FFFFFF','#FFFFFF']]){
save(`symbol-${v}.svg`,svg(mark(c,a),424,560));
let w=word('FreightClaimKit',78,144,119,c);save(`logo-${v}.svg`,svg(mark(c,a,16,14,152)+w.body,Math.ceil(w.width+165),180));
w=word('FreightClaimKit',60,0,0,c);w=word('FreightClaimKit',60,(640-w.width)/2,352,c);save(`logo-stacked-${v}.svg`,svg(mark(c,a,238,20,225)+w.body,640,390));
w=word('FreightClaimKit',78,0,80,c);save(`wordmark-${v}.svg`,svg(w.body,Math.ceil(w.width+5),100));
}
const icon=svg('<rect width="512" height="512" rx="108" fill="#102D28"/>'+mark('#EDF3F0','#D58C65',112,65,382),512,512);
save('app-icon.svg',icon);fs.writeFileSync(path.join(root,'public/favicon.svg'),icon);
const mask=svg('<path fill="#102D28" d="M0 0h512v512H0z"/>'+mark('#EDF3F0','#D58C65',145,109,294),512,512);save('app-icon-maskable.svg',mask);
for(const n of [16,32,48,180,192,512]){let name=n<100?`favicon-${n}.png`:`icon-${n}.png`;await sharp(Buffer.from(icon)).resize(n,n).png().toFile(path.join(out,name));}
fs.copyFileSync(path.join(out,'icon-180.png'),path.join(root,'public/apple-touch-icon.png'));
await sharp(Buffer.from(mask)).resize(512,512).png().toFile(path.join(out,'icon-maskable-512.png'));
let w=word('FreightClaimKit',72,0,0,'#EDF3F0');w=word('FreightClaimKit',72,(1200-w.width)/2,414,'#EDF3F0');let t=word('Evidence before action',27,0,0,'#B0C2BA');t=word('Evidence before action',27,(1200-t.width)/2,474,'#B0C2BA');let note=word('CONCEPT PREVIEW',15,58,581,'#B0C2BA');
let og=svg('<path fill="#102D28" d="M0 0h1200v630H0z"/>'+mark('#EDF3F0','#D58C65',519,64,222)+w.body+t.body+note.body,1200,630);save('og-image.svg',og);await sharp(Buffer.from(og)).png().toFile(path.join(out,'og-image.png'));
fs.writeFileSync(path.join(root,'public/site.webmanifest'),JSON.stringify({name:'FreightClaimKit',short_name:'FreightClaimKit',start_url:'/',display:'standalone',background_color:'#102D28',theme_color:'#102D28',icons:[{src:'/brand/icon-192.png',sizes:'192x192',type:'image/png',purpose:'any'},{src:'/brand/icon-512.png',sizes:'512x512',type:'image/png',purpose:'any'},{src:'/brand/icon-maskable-512.png',sizes:'512x512',type:'image/png',purpose:'maskable'}]},null,2));
console.log('Exported outlined SVG identity, PNG favicons and OG image.');
}main().catch(e=>{console.error(e);process.exit(1)});
