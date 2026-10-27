import React,{useContext,useEffect,useRef,useState,useCallback,useMemo} from 'react';
import {Player} from '@remotion/player';
import {ArrowRight,Pause,Play,ArrowCounterClockwise} from '@phosphor-icons/react';
import {MotionContext} from './MotionContext';
import {IntroComposition} from './video/IntroComposition';
import './intro.css';

const FPS=30, FRAMES=300;
export function Intro(){
  const {reduce,toggleMotion}=useContext(MotionContext);
  const player=useRef(null),section=useRef(null),cancelled=useRef(false),transitioning=useRef(false);
  const [frame,setFrame]=useState(0),[playing,setPlaying]=useState(false),[ended,setEnded]=useState(false);
  const [portrait,setPortrait]=useState(()=>window.innerWidth<800);
  const [ready,setReady]=useState(false),[failed,setFailed]=useState(false);
  const videoProps=useMemo(()=>({reduce,portrait}),[reduce,portrait]);
  useEffect(()=>{const media=matchMedia('(max-width:799px)');const change=()=>setPortrait(media.matches);media.addEventListener('change',change);return()=>media.removeEventListener('change',change)},[]);
  useEffect(()=>{let active=true;Promise.all(['vault','bol','pod','invoice'].map(name=>new Promise((resolve,reject)=>{const img=new Image();img.onload=resolve;img.onerror=reject;img.src=`/assets/intro-${name}.png`;}))).then(()=>document.fonts.ready).then(()=>{if(active)setReady(true)}).catch(()=>{if(active)setFailed(true)});return()=>{active=false}},[]);
  const continueToHero=useCallback((automatic=false)=>{
    if(automatic&&(reduce||cancelled.current||document.hidden||window.scrollY>40))return;
    player.current?.pause();cancelled.current=true;transitioning.current=true;
    const hero=document.getElementById('homepage-hero');if(!hero)return;
    const y=hero.getBoundingClientRect().top+window.scrollY;
    const done=()=>{transitioning.current=false;if(!automatic){hero.focus({preventScroll:true});}};
    if(reduce){window.scrollTo({top:y,behavior:'instant'});done()}
    else if(window.__fckLenis){window.__fckLenis.scrollTo(y,{duration:1.5,easing:t=>1-Math.pow(1-t,4),onComplete:done})}
    else {window.scrollTo({top:y,behavior:'smooth'});transitioning.current=false}
  },[reduce]);
  useEffect(()=>{
    const p=player.current;if(!p||!ready)return;
    const update=e=>setFrame(e.detail.frame);
    const play=()=>setPlaying(true),pause=()=>setPlaying(false);
    const end=()=>{setEnded(true);setPlaying(false);continueToHero(true)};
    p.addEventListener('frameupdate',update);p.addEventListener('play',play);p.addEventListener('pause',pause);p.addEventListener('ended',end);
    if(!cancelled.current&&window.scrollY<40)p.play();
    return()=>{p.removeEventListener('frameupdate',update);p.removeEventListener('play',play);p.removeEventListener('pause',pause);p.removeEventListener('ended',end)};
  },[ready,continueToHero]);
  useEffect(()=>{
    const interrupt=()=>{cancelled.current=true;transitioning.current=false;player.current?.pause()};
    const key=e=>{if(['PageDown','PageUp','ArrowDown','ArrowUp','Home','End'].includes(e.key))interrupt()};
    const scroll=()=>{if(!transitioning.current&&window.scrollY>40)interrupt()};
    const visibility=()=>{if(document.hidden)player.current?.pause()};
    window.addEventListener('wheel',interrupt,{passive:true});window.addEventListener('touchmove',interrupt,{passive:true});window.addEventListener('keydown',key);window.addEventListener('scroll',scroll,{passive:true});document.addEventListener('visibilitychange',visibility);
    return()=>{window.removeEventListener('wheel',interrupt);window.removeEventListener('touchmove',interrupt);window.removeEventListener('keydown',key);window.removeEventListener('scroll',scroll);document.removeEventListener('visibilitychange',visibility)};
  },[]);
  function playback(){const p=player.current;if(!p)return;if(ended||p.getCurrentFrame()>=FRAMES-1){p.seekTo(0);setEnded(false);cancelled.current=false;p.play()}else if(p.isPlaying())p.pause();else p.play()}
  function seek(e){cancelled.current=true;player.current?.pause();player.current?.seekTo(Number(e.target.value));setFrame(Number(e.target.value));setEnded(Number(e.target.value)>=FRAMES-1)}
  return <section className="cinematic-intro" ref={section} aria-label="FreightClaimKit introduction" data-intro-state={failed?'failed':!ready?'loading':ended?'ended':playing?'playing':'paused'}>
    <div className="intro-top"><img src="/brand/logo-primary.svg" alt="FreightClaimKit" width="260" height="58"/><button className="intro-motion" onClick={toggleMotion}>{reduce?'Full motion':'Reduce motion'}</button></div>
    <div className="intro-screen" aria-hidden="true">{ready?<Player ref={player} component={IntroComposition} inputProps={videoProps} durationInFrames={FRAMES} compositionWidth={portrait?780:1480} compositionHeight={portrait?1250:800} fps={FPS} controls={false} loop={false} initiallyMuted clickToPlay={false} doubleClickToFullscreen={false} spaceKeyToPlayOrPause={false} moveToBeginningWhenEnded={false} style={{width:'100%',height:'100%'}}/>:<div className="intro-loading"><strong>Every source.<br/>One clear case.</strong><span>{failed?'The intro could not load. Continue to explore the site.':'Preparing the evidence…'}</span></div>}</div>
    <p className="sr-only">Ten-second synthetic evidence animation. Documents arrive, uncertainty is flagged, and a dossier assembles for human review. {reduce?'Reduced motion uses dissolves and waits for you to continue.':'The page moves to the hero when playback finishes. Scroll to leave at any time.'}</p>
    <div className="intro-controls"><div className="intro-playback"><button onClick={playback} disabled={!ready} aria-label={ended?'Replay intro':playing?'Pause intro':'Play intro'}>{ended?<ArrowCounterClockwise size={18}/>:playing?<Pause weight="fill" size={16}/>:<Play weight="fill" size={16}/>}</button><input aria-label="Intro playback position" type="range" min="0" max={FRAMES-1} value={frame} onChange={seek} disabled={!ready} style={{'--intro-progress':`${frame/(FRAMES-1)*100}%`}}/><span className="intro-time">00:{String(ended?10:Math.min(10,Math.floor(frame/FPS))).padStart(2,'0')} / 00:10</span></div><div className="intro-exit"><button onClick={()=>continueToHero(false)}>{reduce||ended||failed?'Continue to website':'Skip intro'} <ArrowRight size={19}/></button><span>CONCEPT PREVIEW · SYNTHETIC DATA</span></div></div>
  </section>
}
