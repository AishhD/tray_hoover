# Tray hoover

Navigates a imaginary robotic hoover (much like a Roomba) through an equally imaginary room.

## Meeting Requirements

- Placing the hoover on a patch of dirt ("hoovering") removes the patch of dirt so that patch is then clean for the remainder of the program run.
- Driving into a wall has no effect (the robot skids in place).
- Takes the room dimensions, the locations of the dirt patches, the hoover location and the driving instructions as input and to then output the final hoover position (X, Y) and the number of patches of dirt the robot cleaned up.
- The program runs in the command line
- Is written in JS

## Getting Started

To run the program

```
node index.js
```

## Run the tests

First run

```
$ npm install
```

then

```
$ npm test
```

If all tests haven't run enter

```
a
```

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript runtime for building fast network applications.
- [Jest](https://jestjs.io/) - Frontend testing library

## Author

**Aisha D'Souza**
