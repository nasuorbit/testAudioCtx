export const sineWave = (speed=0.2) => {
  let x = 0
  return (e: AudioProcessingEvent) => {
    const data = e.outputBuffer.getChannelData(0);
    for (let i = 0; i < data.length; ++i) {
      x+=speed;
      data[i] = Math.sin(x);
    }
  }
}
/*

export const sineWave = {
  x: 0,
  play: (e: AudioProcessingEvent) => {
    var data = e.outputBuffer.getChannelData(0);
    for (var i = 0; i < data.length; ++i) {
      data[i] = Math.sin(this.x++);
    }
  }
}
*/