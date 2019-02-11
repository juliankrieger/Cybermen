
type CreepFilterConstants =
    FIND_CREEPS
    | FIND_MY_CREEPS
    | FIND_HOSTILE_CREEPS
    ;

const WorkerCreepBody = [WORK, CARRY, MOVE];

export default class CreepUtils {

    public static getCreepCount(opt?: CreepFilterConstants, room?: Room, ): number {
        return _.size(this.getCreeps(opt = opt, room = room));
    }

    public static getCreeps(opt?: CreepFilterConstants, room?: Room, ): Creep[] {
        if (!room) {
            return _.filter(Game.creeps, (creep) => {
                switch (opt) {
                    case FIND_CREEPS:
                        return true;
                    case FIND_MY_CREEPS:
                        return creep.my;
                    case FIND_HOSTILE_CREEPS:
                        return !creep.my;
                    default:
                        return false;
                }
            })
        } else {
            return (room.find(opt || FIND_CREEPS));
        }
    }

    public static getGameCreepCount(): number {
        return _.size(Game.creeps)
    }

    public static getWorkerCreeps(room?: Room) {
        return this.getCreeps(FIND_MY_CREEPS);
        // return _.filter(this.getCreeps(FIND_MY_CREEPS), creep => {
        //    return _.difference(WorkerCreepBody, creep.body).length === 0
        // })
    }
}
