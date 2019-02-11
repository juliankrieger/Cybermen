
import CreepAnalyzer from "analysis/CreepAnaylsis";
import SpawnAnalyzer from "analysis/SpawnAnalysis";
import CreepUtils from "utils/CreepUtils";
import Controller from "./Controller";


export default class SpawnController implements Controller {
    private CyberWorkerCount = 0;

    private createSimpleCyberworker(spawn: StructureSpawn): void {
        spawn.createCreep([WORK, MOVE, CARRY], this.getCyberWorkerName());
        this.CyberWorkerCount += 1;
    }

    private getCyberWorkerName() {
        return "Cyberworker No. " + this.CyberWorkerCount.toString();
    }

    public nextMove() {
        if (CreepUtils.getGameCreepCount() < CreepAnalyzer.calculateOptimalCreepCount()) {
            _.map(SpawnAnalyzer.getOptimalSpawns(), spawn => {
                this.createSimpleCyberworker(spawn);
            })
        }
    }
}
