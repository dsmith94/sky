
/**
 * Set callback that will be used for environmental effects at the current location.
 * @param {msgCallback} environmentalCallback Callback for environment effects. Must return string.
 */
const env = (environmentalCallback) => {
    g$.env = environmentalCallback
}
