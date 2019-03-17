export const sineWave = (speed=0.2, gain=1.0, offset=0) => {
  let x = offset
  return (e: AudioProcessingEvent) => {
    const data = e.outputBuffer.getChannelData(0);
    for (let i = 0; i < data.length; ++i) {
      x+=speed;
      data[i] = Math.sin(x) * gain;
    }
  }
}

export const kick = (speed=1, gain=1.0, offset=0, loop=true) => {
  const xmap = [0.75, 0.9, 1, 0.9, 0.5, 0.1, 0, 0.1, 0.5, 0.75, 0.85, 0.9, 0.85, 0.75, 0.5, 0.25, 0.15, 0.1, 0.15, 0.25, 0.4, 0.5, 0.6, 0.75, 0.8, 0.85, 0.8, 0.75, 0.6, 0.5, 0.4, 0.3, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.66, 0.62, 0.6, 0.55, 0.5, 0.48, 0.45, 0.44, 0.45, 0.46, 0.48, 0.5, 0.52, 0.54, 0.55, 0.54, 0.52, 0.51, 0.5 ]
  let x = offset
  const baseSpeed = 0.02;
  speed = baseSpeed * speed;
  return (e: AudioProcessingEvent) => {
    const data = e.outputBuffer.getChannelData(0);
    for (let i = 0; i < data.length; ++i) {
      x += speed;
      if (loop === true && x > xmap.length) x=0;
      if (x > xmap.length) {data[i] = 0.5; continue;}
      const base = Math.floor(x);
      const diff = x - base
      const next = base === xmap.length ?  xmap[0] : xmap[base+1];
      const value = (xmap[base] - (xmap[base] - next) * diff);
      data[i] = value;
    }
  }
}

/*
export const rhythm = (bpm=160) => {
  let x = 0
  return (e: AudioProcessingEvent) => {
    const data = e.outputBuffer.getChannelData(0);
    for (let i = 0; i < data.length; ++i) {
      x+=speed;
      data[i] = Math.sin(x);
    }
  }
}
*/
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