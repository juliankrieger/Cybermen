import { getOptimalCreepCount } from "analysis/CreepAnaylsis";
import { getOptimalSpawns } from "analysis/SpawnAnalysis";
import CreepController from "controllers/CreepController";


export default class SpawnController {
    private CyberWorkerCount = 0;

    public createSimpleCyberworker(spawn: StructureSpawn): boolean {

        console.log("Creating simple Cyberworker");

        return (
            spawn.createCreep([WORK, MOVE, CARRY], this.getCyberWorkerName()) ? true : false
        )
    };

    private getCyberWorkerName() {
        return "Cyberworker No. " + this.CyberWorkerCount.toString();
    }

    public nextMove() {
        if (CreepController.getGameCreepCount() < getOptimalCreepCount()) {
            _.map(getOptimalSpawns(), spawn => {
                this.createSimpleCyberworker(spawn);
            })
        }
    }
}
