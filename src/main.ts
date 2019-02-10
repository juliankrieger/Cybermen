import Cyberbrain from "Cyberbrain";
import { ErrorMapper } from "utils/ErrorMapper";
import "utils/Util";
import Util from "utils/Util";


// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code

// log4js.configure({
//   appenders: { default: { type: 'file', filename: 'log.log' } },
//   categories: { default: { appenders: ['default'], level: 'info' } }
// });


// export const logger = log4js.getLogger("default");

const InitCyberbrain = new Cyberbrain();

export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);

  InitCyberbrain.nextMove();

  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
});
