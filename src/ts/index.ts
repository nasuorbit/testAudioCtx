import { playBtn, stopBtn, gainRange } from './constant'
import { ngPlayer } from './player/player'

const player = new ngPlayer

player.load()

playBtn.onclick = () => {player.play()}
stopBtn.onclick = () => {player.stop()}
gainRange.value = player.getMasterGain().toString()
gainRange.onchange = (e) => {
  player.setMasterGain(parseFloat(gainRange.value))
}
