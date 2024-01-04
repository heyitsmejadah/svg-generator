const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes');
const inquirer = require("inquirer");
const { init } = require('../index');

// Mock inquirnpr.prompt
jest.mock('inquirer', () => ({
    prompt: jest.fn().mockResolvedValueOnce({}),
}));

// Mock fs.writeFile
jest.mock('fs', () => ({
    writeFile: jest.fn(),
}));

describe('createLogo', () => {
    // Test cases for createLogo function
    test('should create logo with square shape', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

        createLogo('logo.svg', data);

        // Assertions for fs.writeFile
        expect(fs.writeFile).toHaveBeenCalledWith(
            'logo.svg',
            expect.stringContaining('<rect'),
            expect.any(Function)
        );
        expect(fs.writeFile).toHaveBeenCalledWith(
            'logo.svg',
            expect.stringContaining('<circle'),
            expect.any(Function)
        );
        expect(fs.writeFile).toHaveBeenCalledWith(
            'logo.svg',
            expect.stringContaining('<polygon'),
            expect.any(Function)
        );
    });
});

describe('init', () => {
    // Test cases for init function
    test('should call inquirer.prompt and createLogo', () => {
        // Mock inquirer.prompt response
        const mockData = {
            shape: 'Square',
            color: 'Red',
            text: 'ABC',
            textColor: 'White',
        };

        inquirer.prompt.mockResolvedValueOnce(mockData);

        init();

        // Assertions for inquirer.prompt and createLogo
        expect(inquirer.prompt).toHaveBeenCalledWith(expect.arrayContaining(questions));
        expect(createLogo).toHaveBeenCalledWith('logo.svg', mockData);
    });
});