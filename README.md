# Cybermen Screeps AI

Cybermen is an AI written in Typescript for the MMORPG Screeps. It's based on 5 Components:
    - Analysis modules
    - Controller modules
    - Util modules
    - Strategy modules
    - A `Cyberbrain`


## Analysis Modules
 Analysis Modules are a collection of classes with static functions to calculate different Values depending on different circumstances.

## Controller modules
Controller Modules are a collection of classes that implement the [`controller`](https://link) interface. They all feature a `nextMove()` function, which is called every tick by the `Cyberbrain` class. In the future, the `nextMove` function will feature a `Strategy` argument, which will be used to select the next move to be made.

## Utility Modules
Util modules are a collection of classes with static functions to provide quick (Zugriff) to their named counterparts. For example, the CreepUtil module features a function `getCreep()` that returns creeps based on their location and their (affirmity?) to the player.

## Strategy Modules
Strategy Modules are a collection of functions that can be given to the controller, and tell it how to behave. Strategy modules do not encompass the **why**, but moreso the **what**.

## The `Cyberbrain`
The Cyberbrain is, like it's name suggests, the brain behind the AI. It calls the Controller's `nextMove()` functions, with a `Strategy` as an argument.

## Basic Usage

Needed:

    - [Node.JS](https://nodejs.org/en/download) (>= 8.0.0)
    - ([Yarn](https://yarnpkg.com/en/docs/getting-started) or [npm](https://docs.npmjs.com/getting-started/installing-node))
    - Rollup CLI (Optional, install via `npm install -g rollup`)

## Installation

```bash
# npm
npm install

# yarn
yarn
```

### Rollup and code upload

Cybermen uses rollup to compile typescript and upload it to a screeps server.

Move or copy `screeps.sample.json` to `screeps.json` and edit it, changing the credentials and optionally adding or removing some of the destinations.

Running `rollup -c` will compile the code and do a "dry run", preparing the code for upload but not actually pushing it. Running `rollup -c --environment DEST:main` will compile the code, and then upload it to a screeps server using the `main` config from `screeps.json`.

You can use `-cw` instead of `-c` to automatically re-run when the source code changes - for example, `rollup -cw --environment DEST:main` will automatically upload the code to the `main` configuration every time the code is changed.

Finally, there are also NPM scripts that serve as aliases for these commands in `package.json` for IDE integration. Running `npm run push-main` is equivalent to `rollup -c --environment DEST:main`, and `npm run watch-sim` is equivalent to `rollup -cw --dest sim`.

#### Important! To upload code to a private server, [screepsmod-auth](https://github.com/ScreepsMods/screepsmod-auth) must be installed and configured!

## Typings

The type definitions for Screeps come from [typed-screeps](https://github.com/screepers/typed-screeps). If you find a problem or have a suggestion, please open an issue there.

## Documentation

As Cybermen is currently in the early stages, there is not documentation available yet.

### Screeps-Typescript-Starter Documentation

As Cybermen is based on `screeps-typescript-starter`, documentation for basic features can be found [here](https://screepers.gitbooks.io/screeps-typescript-starter/).
