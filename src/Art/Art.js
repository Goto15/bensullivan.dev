import React, { useEffect } from 'react';
import canvasSketch from 'canvas-sketch';
import { lerp } from 'canvas-sketch-util/math';
import random from 'canvas-sketch-util/random';

const mobile = false;

//'❙', '●', '◯'
const CHARSET = {
  0: '❘',
  1: '❘',
  2: '◯',
  3: '❘',
  4: '❘',
  5: '●',
  6: '❘',
  7: '❘',
};

const Sketch = (props) => {
  // TODO: figure out which color is the darkest and set that as the rectangle color.
  //'#40bad5', '#fcbf1e', '#035aa6', '#120136'
  //const PALETTE = props.palette

  const settings = {
    dimensions: mobile ? [1280, 640] : [1280, 1280],
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createGrid = () => {
    const points = [];
    const count = 25;

    for (let x = 0; x < count; x += 1) {
      for (let y = 0; y < count; y += 1) {
        const u = count <= 1 ? 0.5 : x / (count - 1);
        const v = count <= 1 ? 0.5 : y / (count - 1);

        let char = CHARSET[Math.floor(Math.random() * Math.floor(8))];
        let radius = null;
        // horizontal flip if the art is on the left props.left === true
        let position = props.left ? [1 - u, v] : [u, v];

        if(char === '❙' || char === '❘'){
          radius = Math.floor(Math.random() * (13 - 1)) + 1;
        } else {
          radius = Math.floor(Math.random() * Math.floor(4))
        }

        points.push({
          char: char,
          color: random.pick(props.palette),
          position,
          radius,
          rotation: random.noise2D(u, v, .001) * (80 * Math.PI),
        });
      }
    }
    return points;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sketch = () => {
    const points = createGrid();

    return ({ context, width, height }) => {
      context.fillStyle = 'white';
      context.fillRect(0, 0, width, height);

      const margin = width * .15;

      points.forEach((data) => {
        const { radius, position, char, color, rotation } = data;
        const [u, v] = position;

        const x = (Math.random() * (1 - .5) + .5 ) * lerp(margin, width - margin, u);
        const y = lerp(margin, height - margin, v);

        context.save();
        context.fillStyle = color;
        context.font = `${radius * 15}px "Arial`;
        context.translate(x, y);
        context.rotate(rotation);
        context.fillText(char, 0, 0);
        context.restore();
      });
    };
  };

  const ref = React.createRef();
  useEffect(() => {
    canvasSketch(sketch, {
      ...settings,
      canvas: ref.current,
    });
  }, [props.palette, createGrid, ref, sketch, settings]);

  return <canvas className='canvas' ref={ref}></canvas>;
};

export default Sketch;
