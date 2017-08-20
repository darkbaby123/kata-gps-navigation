function navigate(totalNum, roads, start, finish) {
  if (start === finish) return [start]

  const pathMap = {}
  const visited = {}

  let curr = start
  while (curr !== undefined) {
    visited[curr] = true

    roads.filter(r => r.from === curr).forEach(r => {
      const path = pathMap[curr]
        ? {time: pathMap[curr].time + r.drivingTime, routes: pathMap[curr].routes.concat([r.to])}
        : {time: r.drivingTime, routes: [start, r.to]}

      if (!pathMap[r.to] || pathMap[r.to].time > path.time) {
        pathMap[r.to] = path
      }
    })

    let nextCurr
    let fastestTime
    for (let p in pathMap) {
      p = Number(p)
      if (!visited[p] && (!fastestTime || pathMap[p].time < fastestTime)) {
        nextCurr = p
        fastestTime = pathMap[p].time
      }
    }
    curr = nextCurr
  }

  return (pathMap[finish] && pathMap[finish].routes.length <= totalNum)
    ? pathMap[finish].routes
    : null
}

module.exports = navigate
