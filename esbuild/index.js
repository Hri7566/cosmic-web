import('./style.scss');

class Vector2 {
    /**
     * Vector2
     * @param {number} x X magnitude
     * @param {number} y Y magnitude
     */
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    static getMagnitude(v1, v2) {
        return (v2.x - v1.x) / (v2.y - v1.y);
    }
}

const DEFAULT_RATIO = new Vector2(1920, 1080);

const PIXI = require('pixi.js');
let app = new PIXI.Application({
    width: DEFAULT_RATIO.x,
    height: DEFAULT_RATIO.y
});

document.body.appendChild(app.view);
