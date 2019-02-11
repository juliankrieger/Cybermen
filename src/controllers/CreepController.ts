import SpawnAnalyzer from "analysis/SpawnAnalysis";
import CreepUtils from "utils/CreepUtils";
import Controller from "./Controller";

export default class CreepController implements Controller {
    private Workers = CreepUtils.getWorkerCreeps();

    private commandWorkers() {
        _.map(this.Workers, (creep) => {
            if (creep.carry.energy < creep.carryCapacity) {
                console.log("Creep " + creep.name + " has not max enegery. Harvesting..");
                const sources = creep.room.find(FIND_SOURCES);
                if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                    console.log("Creep " + creep.name + " is not near energy source. going...");
                    creep.moveTo(sources[0]);
                }
            } else {
                console.log("Creep " + creep.name + " max enegery. Locating spawn...");
                const optimalSpawn = SpawnAnalyzer.calculateNearestSpawn(creep);
                if (optimalSpawn && creep.transfer(optimalSpawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    console.log("Creep " + creep.name + " is not near spawn. traveling...");
                    creep.moveTo(optimalSpawn);
                }
            }
        })
    }

    public nextMove(): void {
        this.commandWorkers();
    }
}
