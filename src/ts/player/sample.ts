export const sineWave = (defx: number) => {
  let x = defx;
  return (e: AudioProcessingEvent) => {
    const data = e.outputBuffer.getChannelData(0);
    for (let i = 0; i < data.length; ++i) {
      x+=0.2;
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