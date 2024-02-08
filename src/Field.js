// Speed param measured in degrees/second
// Radius measured in pixels
import * as React from "react"

function Field({ speed, radius }) {

    const square = React.useRef();
    const point = React.useRef();

    React.useEffect(() => {
        let isRunning = true;
        let angle = 0;
        let start = new Date().getTime()

        const update = () => {
            let frameTime = (new Date().getTime() - start) / 1000
            frameTime = frameTime || 60 / 1000
            if(point.current && square.current) {

                const x0 = point.current.offsetLeft;
                const y0 = point.current.offsetTop;

                let x = radius * Math.cos(angle) + x0;
                let y = radius * Math.sin(angle) + y0;

                angle += frameTime * speed * Math.PI / 180;

                square.current.style.left = x + 'px';
                square.current.style.top = y + 'px';

                start = new Date().getTime()
            }

            if(isRunning)
                return requestAnimationFrame(update);
        }

        update();

        return () => isRunning = false
    }, []);

  return (
    <div className="Field">
      <div className="Square" ref={square} />
      <div className="Point" ref={point} />
    </div>
  );
}

export default Field;
