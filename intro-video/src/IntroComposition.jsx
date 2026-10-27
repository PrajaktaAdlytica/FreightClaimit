import React from 'react';
import {AbsoluteFill, Img, interpolate, Easing, useCurrentFrame, useVideoConfig, staticFile} from 'remotion';

const ease = {extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.bezier(.16,1,.3,1)};
const linear = {extrapolateLeft:'clamp',extrapolateRight:'clamp'};

function EvidenceCard({file,left,top,width,delay,entryX=0,entryY=0,reduce=false}) {
  const frame=useCurrentFrame(); const {fps}=useVideoConfig();
  const t=frame/fps;
  return <Img src={staticFile(`assets/${file}`)} style={{position:'absolute',left,top,width,
    opacity:interpolate(t,[delay,delay+.75],[0,1],linear),
    translate:reduce?'0px 0px':`${interpolate(t,[delay,delay+1.5,5.2,7.4],[entryX,0,0,(440-left)*.035],ease)}px ${interpolate(t,[delay,delay+1.5,5.2,7.4],[entryY,0,0,8],ease)+Math.sin(t*1.15+delay)*1.5}px`,
    scale:reduce?1:interpolate(t,[delay,delay+1.7,5.2,7.4],[.96,1,1,.98],ease),
    objectFit:'contain'}}/>;
}

export function IntroComposition({reduce=false,portrait=false,showBrand=false}) {
  const frame=useCurrentFrame(); const {fps}=useVideoConfig(); const t=frame/fps;
  const label=t<2?'01 / SOURCES ARRIVE':t<5?'02 / GAPS BECOME VISIBLE':t<8?'03 / EVIDENCE ASSEMBLES':'04 / YOUR REVIEW STARTS HERE';
  const caption=t<2?'Every record has an origin.':t<5?'An unclear signature. A conflicting value.':t<8?'Linked sources. Uncertainty kept visible.':'One dossier. A human decides what happens next.';
  return <AbsoluteFill style={{background:'#ffffff',color:'#08251f',fontFamily:'Manrope Variable, Manrope, Arial, sans-serif',overflow:'hidden'}}>
    {showBrand&&<Img src={staticFile('brand/logo-primary.svg')} style={{position:'absolute',top:30,left:portrait?40:60,width:portrait?300:260}}/>}
    <div style={{position:'absolute',left:portrait?40:60,top:portrait?170:255,width:portrait?700:600,zIndex:3}}>
      <div style={{overflow:'hidden'}}><div style={{fontSize:portrait?77:82,whiteSpace:'nowrap',fontWeight:800,letterSpacing:'-.065em',lineHeight:1.02,translate:reduce?'none':`0 ${interpolate(t,[.15,1.3],[105,0],ease)}px`,opacity:interpolate(t,[.15,.8],[0,1],linear)}}>Every source.</div></div>
      <div style={{overflow:'hidden',paddingBottom:12}}><div style={{fontSize:portrait?77:82,whiteSpace:'nowrap',fontWeight:800,letterSpacing:'-.065em',lineHeight:1.02,translate:reduce?'none':`0 ${interpolate(t,[.55,1.7],[105,0],ease)}px`,opacity:interpolate(t,[.55,1.2],[0,1],linear)}}>One clear case.</div></div>
      <div style={{marginTop:30,opacity:interpolate(t,[1.3,2],[0,1],linear),maxWidth:470}}>
        <div style={{fontSize:portrait?18:12,fontWeight:650,letterSpacing:'.15em',color:'#8d532e'}}>{label}</div>
        <div style={{fontSize:portrait?24:19,lineHeight:1.55,color:'#54665f',marginTop:12}}>{caption}</div>
      </div>
    </div>
    <div style={{position:'absolute',left:portrait?0:600,top:portrait?465:40,width:880,height:690,transformOrigin:'50% 70%',scale:portrait?.82:reduce?1:interpolate(t,[0,7.8,10],[1.02,1.02,.98],ease),translate:portrait?'-30px 0px':'0px 0px'}}>
      <Img src={staticFile('assets/intro-vault.png')} style={{position:'absolute',left:160,top:115,width:600,height:600,objectFit:'contain',opacity:interpolate(t,[.1,1.25],[0,1],linear),translate:reduce?'none':`0 ${interpolate(t,[0,2],[32,0],ease)}px`,scale:reduce?1:interpolate(t,[0,2,5,7.4],[.96,.98,.98,1],ease)}}/>
      <EvidenceCard file="intro-bol.png" left={0} top={125} width={270} delay={.1} entryX={-70} entryY={30} reduce={reduce}/>
      <EvidenceCard file="intro-pod.png" left={280} top={-10} width={260} delay={.45} entryX={0} entryY={-65} reduce={reduce}/>
      <EvidenceCard file="intro-invoice.png" left={565} top={145} width={270} delay={.85} entryX={70} entryY={30} reduce={reduce}/>
      <div style={{position:'absolute',left:300,top:240,padding:'8px 12px',background:'#fffaf5',border:'1px solid #e0b58c',borderRadius:4,color:'#8e4b20',fontSize:12,fontWeight:650,opacity:interpolate(t,[2.3,3,5.1,5.7],[0,1,1,0],linear),translate:reduce?'none':`0 ${interpolate(t,[2.3,3],[15,0],ease)}px`}}>POD signature · review required</div>
      <div style={{position:'absolute',left:570,top:420,padding:'8px 12px',background:'#fffaf5',border:'1px solid #e0b58c',borderRadius:4,color:'#8e4b20',fontSize:12,fontWeight:650,opacity:interpolate(t,[3.1,3.8,5.4,6],[0,1,1,0],linear)}}>$240 discrepancy · unresolved</div>
      <div style={{position:'absolute',left:315,top:628,padding:'12px 20px',background:'#fff',border:'1px solid #bccdc5',borderRadius:4,fontSize:15,letterSpacing:'.04em',opacity:interpolate(t,[6.3,7.2],[0,1],linear),translate:reduce?'none':`0 ${interpolate(t,[6.3,7.2],[25,0],ease)}px`}}>FC-208 · Ready for human review</div>
    </div>
  </AbsoluteFill>;
}
