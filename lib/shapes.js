// shapes.js

class Triangle {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    generateSvgTemplate() {
        return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,50 100,150 200,150" fill="${this.color}" />
                <text x="150" y="130" text-anchor="middle" fill="${this.textColor}" font-size="30px" font-weight="bold">${this.text}</text>
            </svg>`;
    }
}

class Square {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    generateSvgTemplate() {
        return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
                <text x="150" y="130" text-anchor="middle" fill="${this.textColor}" font-size="30px" font-weight="bold">${this.text}</text>
            </svg>`;
    }
}

class Circle {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    generateSvgTemplate() {
        return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="50" fill="${this.color}" />
                <text x="150" y="130" text-anchor="middle" fill="${this.textColor}" font-size="30px" font-weight="bold">${this.text}</text>
            </svg>`;
    }
}

module.exports = {
    Triangle,
    Square,
    Circle,
};
