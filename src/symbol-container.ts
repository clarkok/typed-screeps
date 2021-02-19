/**
 * Contains a symbol resource which can be withdrawn by creeps with a CARRY part.
 *
 * **Only available in the Season 2 world.**
 */
interface SymbolContainer<T extends SymbolConstant = SymbolConstant> extends RoomObject {
    /**
     * A unique object identificator.
     * You can use {@link Game.getObjectById} method to retrieve an object instance by its id.
     */
    id: Id<this>;

    /**
     * The symbol type that this object accepts, one of the RESOURCE_* constants from SYMBOLS.
     */
    resourceType: T;

    /**
     * A {@link Store} object that contains resources of this object.
     */
    store: Store<T, false>;

    /**
     * The amount of game ticks before this container decays.
     */
    ticksToDecay: number;
}

interface SymbolContainerConstructor extends _Constructor<SymbolContainer>, _ConstructorById<SymbolContainer> {}

declare const SymbolContainer: SymbolContainerConstructor;
