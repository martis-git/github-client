/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

/**
 * Получение env-переменной
 * @throwable
 */
const getEnvVar = (key: string) => {
    if (process.env[key] === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }
    return process.env[key] || "";
};

/** API entrypoint */
export const API_URL = getEnvVar("REACT_APP_API_URL");

/** Режим запуска программы */
export const NODE_ENV = getEnvVar("NODE_ENV");
/** Режим разработки */
export const isDevEnv = NODE_ENV === "development";
/** Режим продакшена */
export const isProdEnv = NODE_ENV === "production";

export const firebaseConfig = {
    apiKey: getEnvVar("REACT_APP_FIREBASE_apiKey"),
    authDomain: getEnvVar("REACT_APP_FIREBASE_authDomain"),
    databaseURL: getEnvVar("REACT_APP_FIREBASE_databaseURL"),
    projectId: getEnvVar("REACT_APP_FIREBASE_projectId"),
    storageBucket: getEnvVar("REACT_APP_FIREBASE_storageBucket"),
    messagingSenderId: getEnvVar("REACT_APP_FIREBASE_messagingSenderId"),
    appId: getEnvVar("REACT_APP_FIREBASE_appId"),
};
