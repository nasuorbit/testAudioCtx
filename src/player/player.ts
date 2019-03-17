import { sineWave } from './sample'
export class ngPlayer {
  audioCtx: AudioContext
  mixerNode: ScriptProcessorNode
  masterGainNode: GainNode
  constructor() {
    this.audioCtx = new AudioContext();
    this.mixerNode = this.audioCtx.createScriptProcessor(1024, 1, 1);
    this.masterGainNode = this.audioCtx.createGain();
    this.masterGainNode.gain.value = 0.5;
    this.masterGainNode.connect(this.audioCtx.destination);
  }

  load() {
    this.mixerNode.onaudioprocess = sineWave(0)
  }

  play() {
    this.mixerNode.connect(this.masterGainNode);
  }

  stop() {
    this.mixerNode.disconnect();
  }

  getMasterGain() {
    return this.masterGainNode.gain.value;
  }

  setMasterGain(value: number) {
    console.log(value);
    this.masterGainNode.gain.value = value;
  }
}
