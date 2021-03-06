import { getParams } from '@/libs/util'

export const getReport = req => {
  let params = getParams(' ?' + req.body)
  if ( params.device_type == '1') {
    return {  "code": 0,
      "data": {
        "0008010101_1": {
          "2019-01-01": 0,
          "2019-01-02": 0,
          "2019-01-03": 0,
          "2019-01-04": 0.16,
          "2019-01-05": 0,
          "2019-01-06": 0
        },
        "0008010101_2": {
          "2019-01-01": 8.85,
          "2019-01-02": 6.27,
          "2019-01-03": 5.47,
          "2019-01-04": 2.9,
          "2019-01-05": 3.95,
          "2019-01-06": 3.91
        }
      }}
  } else {
    return {
      "code": 0,
      "data": {
        "0008010101_1": {
          "2019-01-01": 445,
          "2019-01-02": 332,
          "2019-01-03": 303,
          "2019-01-04": 179,
          "2019-01-05": 263,
          "2019-01-06": 276
        },
        "0008010101_2": {
          "2019-01-01": 187,
          "2019-01-02": 335,
          "2019-01-03": 117,
          "2019-01-04": 108,
          "2019-01-05": 129,
          "2019-01-06": 156
        }
      }
    }
  }
}