

/**
 * Represents the options for the hook function.
 */
interface HookOpts {
    /**
     * The function to be executed before the wrapped function.
     */
    before?: Function;
    /**
     * The function to be executed after the wrapped function.
     */
    after?: Function;
}

/**
 * Wraps a function with before and after hooks.
 * 
 * @template T - The type of the wrapped function.
 * @param f - The function to be wrapped.
 * @param opts - The options for the hook.
 * @returns The wrapped function.
 */
export function hook<T extends (...args: any[]) => any>(f: T, opts: HookOpts): T {
    const { before, after } = opts;
    const wrapper: T = ((...args: Parameters<T>) => {
        before?.();
        const result = f(...args);
        after?.();
        return result;
    }) as T;
    return wrapper;
}
