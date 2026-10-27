import { Composition } from 'remotion';
import { IntroComposition } from './IntroComposition';
import './style.css';
export const RemotionRoot = () => <>
  <Composition id="EvidenceIntro" component={IntroComposition} durationInFrames={300} fps={30} width={1480} height={800} defaultProps={{reduce:false,portrait:false,showBrand:true}} />
  <Composition id="EvidenceIntroMobile" component={IntroComposition} durationInFrames={300} fps={30} width={780} height={1250} defaultProps={{reduce:false,portrait:true,showBrand:true}} />
  <Composition id="EvidenceIntroReduced" component={IntroComposition} durationInFrames={300} fps={30} width={1480} height={800} defaultProps={{reduce:true,portrait:false,showBrand:true}} />
</>;
