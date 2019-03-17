import { playBtn, stopBtn, gainRange, sineLoadBtn, sineSpeed, kickLoadBtn, sampleSpeed } from './constant'
import { ngPlayer } from './player/player'
import { sineWave, kick } from './player/sample'

const player = new ngPlayer

//player.load()

playBtn.onclick = () => {player.play()}
stopBtn.onclick = () => {player.stop()}
gainRange.value = player.getMasterGain().toString()
gainRange.onchange = (e) => {
  player.setMasterGain(parseFloat(gainRange.value))
}
sineSpeed.value = "0.2"
sineLoadBtn.onclick = () => {
  player.load(sineWave(parseFloat(sineSpeed.value)))
}
kickLoadBtn.onclick = () => {
  player.load(kick(parseFloat(sampleSpeed.value)))
}

player.load(sineWave(parseFloat(sineSpeed.value)))