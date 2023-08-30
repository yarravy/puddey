import { setData } from './dataStore'

export function clearV1(): object {
    setData({
        users: [],
    });

    return {};
}