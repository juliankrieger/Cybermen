export default class CreepController {
    public static getGameCreepCount(): number {
        return _.size(Game.creeps)
    }

    public static getCreepsByRoom(room: Room): Creep[] {
        return room.find(FIND_CREEPS);
    }

    public static getCreepCountByRoom(room: Room): number {
        return _.size(this.getCreepsByRoom(room));
    }

    public static getOwnedCreepsByRoom(room: Room): Creep[] {
        return room.find(FIND_MY_CREEPS);
    }

    public static getOwnedCreepCountByRoom(room: Room): number {
        return _.size(this.getOwnedCreepsByRoom(room));
    }
}
