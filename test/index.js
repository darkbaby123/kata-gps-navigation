const navigate = require('../lib/index')

describe('GPS Navigation', () => {
  it('case 1', () => {
    const roads = [
      {from: 0, to: 1, drivingTime: 5},
      {from: 0, to: 2, drivingTime: 10},
      {from: 1, to: 2, drivingTime: 10},
      {from: 1, to: 3, drivingTime: 2},
      {from: 2, to: 3, drivingTime: 2},
      {from: 2, to: 4, drivingTime: 5},
      {from: 3, to: 2, drivingTime: 2},
      {from: 3, to: 4, drivingTime: 10},
    ]

    // should return [0, 1, 3, 2, 4]. Fastest time is 5 + 2 + 2 + 5 = 14 minutes
    expect(navigate(5, roads, 0, 4)).toEqual([0, 1, 3, 2, 4])
  })
})
