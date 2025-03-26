import { useRef, useEffect, useCallback } from 'react';

type AnyFunction = (...args: any[]) => any;

export const useDebounce = <T extends AnyFunction>(fn: T, delay: number) => {
    // 使用 useRef 存储 timer
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // 清理函数
    const cleanup = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    // 组件卸载时清理
    useEffect(() => {
        return cleanup;
    }, [cleanup]);

    // 返回防抖后的函数
    return useCallback((...args: Parameters<T>) => {
        cleanup();
        timerRef.current = setTimeout(() => {
            fn(...args);
            timerRef.current = null;
        }, delay);
    }, [fn, delay, cleanup]);
};