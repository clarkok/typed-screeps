/**
 * Accepts symbols and enrolls it into your account. Use {@link Creep.transfer} to put scores into the collector.
 *
 * **Only available in the Season 2 world.**
 */
interface SymbolDecoder extends RoomObject {
    /**
     * A unique object identificator.
     * You can use {@link Game.getObjectById} method to retrieve an object instance by its id.
     */
    id: Id<this>;

    /**
     * The symbol type that this object accepts, one of the RESOURCE_* constants from SYMBOLS.
     */
    resourceType: SymbolConstant;

    /**
     * The number of symbols to be enrolled into your account for each resource unit accepted by this object.
     * The score multiplier depends on the level of the room controller (see {@link CONTROLLER_LEVEL_SCORE_MULTIPLIERS} constant).
     */
    scoreMultiplier: number;
}

interface SymbolDecoderConstructor extends _Constructor<SymbolDecoder>, _ConstructorById<SymbolDecoder> {}

declare const SymbolDecoder: SymbolDecoderConstructor;
