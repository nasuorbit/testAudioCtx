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
  const xmap = []
  const _max = 256;
  for (let i= 0; i < _max; i++) {
    const v = Math.sin( i/_max * (_max - i) ) * (_max - i) / _max * 1.5;
    xmap.push(Math.max(Math.min(v, 1), -1) );
  }
  let x = offset
  const baseSpeed = 0.04;
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

export const mouseChaos = (speed=1) => {
  let x = 0;
  let posx = 0.1, posy = 1;
  window.onmousemove = (e) => {
    posx = e.clientX / document.body.scrollWidth
    posy = e.clientY / document.body.scrollHeight
  }
  return (e: AudioProcessingEvent) => {
    const data = e.outputBuffer.getChannelData(0);
    for (let i = 0; i < data.length; ++i) {
      x += speed * posx;
      data[i] = Math.sin(x) - Math.sin(x) * Math.abs(Math.sin(x)) * posy;
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