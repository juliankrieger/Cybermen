import log4js from "log4js";
import { ErrorMapper } from "utils/ErrorMapper";


// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code

log4js.configure({
  appenders: { default: { type: 'file', filename: 'log.log' } },
  categories: { default: { appenders: ['default'], level: 'info' } }
});

export const logger = log4js.getLogger("default");

export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);


  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
});
