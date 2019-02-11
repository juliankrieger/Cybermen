import { spawnSync } from "child_process";

export default class SpawnAnalyzer {

    public static getOptimalSpawns(room?: Room): StructureSpawn[] {
        return Object.values(Game.spawns);
    }

    public static calculateNearestSpawn(creep: Creep): StructureSpawn | undefined {
        return _.first(_.filter(Game.spawns, spawn => {
            return spawn.energy < spawn.energyCapacity;
        }));
    }
}
