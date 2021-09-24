/**
 * Get object property by key
 *
 * Key can be written as path: eg. config.param.param2
 *
 * @param {object} obj
 * @param {string} key
 * @returns {null|*}
 */
export function getObjectValueByKey(obj, key, fallback)
{
    if (!key || !obj || typeof obj !== "object") {
        return fallback;
    }

    if (key.indexOf(".") !== -1) {
        let parts = key.split(".");

        for (let partIndex in parts) {
            let part = parts [partIndex];

            if (Object.prototype.hasOwnProperty.call(obj, part)) {
                obj = obj [part];
            } else {
                return fallback;
            }
        }

        return obj;
    }

    if (obj [key]) {
        return obj [key];
    }

    return fallback;
}