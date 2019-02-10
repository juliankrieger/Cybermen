export default class Util {
    public static getCreepNames() {
        return Game.creeps;

    }

    public static getCreeps() {
        return _.collect(this.getCreepNames(), creep => {
            this.getCreepByName(creep.id);
        })
    }

    public static getCreepByName(creepName: string) {
        return Game.creeps[creepName];
    };
};
