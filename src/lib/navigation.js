

/**
 * Navigate player to a new location.
 * @param {GameLocationID} location String identifier of location to navigate.
 */
const go = (location) => {
  const handleLocations = () => {
    Object.keys(g$).map((dir) => {
      if (g$[dir]?.location) {
        if (g$.currentLocationName === g$[dir]?.location) {
          const d = getDesc(dir)
          msg(d)
          if (g$[dir].talk) {
            btn(getTalkLabel(dir), talk(dir), true)
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
      g$.isTalking = ""
      g$[location]()
      handleLocations()
      g$[location].visited = v + 1
      if (g$.showFastTravelTip === 1) {
        if (g$[g$.map[0]].location !== g$.currentLocationName) {
          g$.showFastTravelTip = 2
          showTipBox(
            "Hey there! You can now fast travel to characters you meet by tapping the top ⤴ of the screen"
          )
        }
      }
    }
    callback()
    g$.lastNode = callback
  }
}

