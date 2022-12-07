

/**
 * Navigate player to a new location.
 * @param {GameLocationID} location String identifier of location to navigate.
 */
const go = (location) => {

  const handleLocations = () => {
    Object.keys(g$).map(dir => {
      if (g$[dir]?.location) {
        if (g$.currentLocationName === g$[dir]?.location) {
          const d = getDesc(dir)
          msg(d)
          if (g$[dir].talk) {
            const l = getTalkLabel(dir)
            const buttonOptions = {}
            buttonOptions[l] = talk(dir)
            buttonOptions.unshift = true
            btn(buttonOptions)
          }
        }
      }
    })
  }

  return () => {
    g$.currentLocationName = location
    const callback = () => {
      const v = g$[location]?.visited ?? 0
      g$.env = null
      g$.isTalking = ''
      g$[location]()
      handleLocations()
      g$[location].visited = v + 1
    }
    callback()
    g$.lastNode = callback
  }
}

