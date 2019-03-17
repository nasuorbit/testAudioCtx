import { playBtn, stopBtn, gainRange, sineLoadBtn, sineSpeed } from './constant'
import { ngPlayer } from './player/player'
import { sineWave } from './player/sample'

const player = new ngPlayer

//player.load()

playBtn.onclick = () => {player.play()}
stopBtn.onclick = () => {player.stop()}
gainRange.value = player.getMasterGain().toString()
gainRange.onchange = (e) => {
  player.setMasterGain(parseFloat(gainRange.value))
}
sineLoadBtn.onclick = () => {
  player.load(sineWave(parseFloat(sineSpeed.value)))
}