import axios from 'axios'
import { TIMEOUT } from './constant'

export const utf8ToB64 = (str) => {
  return window.btoa(unescape(encodeURIComponent(str)))
}

export const b64ToUtf8 = (str) => {
  return decodeURIComponent(escape(window.atob(str)))
}

export const queryParse = (search = window.location.search) => {
  if (!search) return {}
  const queryString = search[0] === '?' ? search.substring(1) : search
  const query = {}
  queryString
    .split('&')
    .forEach(queryStr => {
      const [key, value] = queryStr.split('=')
      /* istanbul ignore else */
      if (key) query[decodeURIComponent(key)] = decodeURIComponent(value)
    })
  return query
}

export const axiosJSON = axios.create({
  headers: {
    'Accept': 'application/json'
  }
})

export const axiosGithub = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/json'
  }
})

// 只有23:00 - 4:00的时间可以进入，保证不为空
export const compareLate = (latest, current) => {
  // 分别比较时分秒
  const currentHours = current.getHours() === 23 ? -1 : current.getHours();
  const latestHours = latest.getHours() === 23 ? -1 : latest.getHours();
  if (currentHours > latestHours) {
    return current;
  } else if (currentHours === latestHours) {
    const currentMinutes = current.getMinutes();
    const latestMinutes = latest.getMinutes();
    if (currentMinutes > latestMinutes) {
      return current;
    } else if (currentMinutes === latestMinutes) {
      const currentSeconds = current.getSeconds();
      const latestSeconds = latest.getSeconds();
      if (currentSeconds > latestSeconds) {
        return current;
      }
    }
  }
  return latest;
};

// 对每个API请求增加超时机制
export const timeout = (octokitPromise) => {
  return Promise.race([
    octokitPromise,
    new Promise(function(resolve, reject) {
      setTimeout(() => reject(new Error('request timeout')), TIMEOUT);
    }),
  ]).catch((e)=>{
    console.log(octokitPromise)
  });
}

export const getWordCloudOption = (data) => {
  return {
      backgroundColor:'#fff',
      tooltip: {
          show: false
      },
      series: [{
          type: 'wordCloud',
          gridSize: 1,
          sizeRange: [12, 35],
          rotationRange: [-45, 0, 45, 90],
          textStyle: {
              normal: {
                  color: function() {
                      return 'rgb(' +
                              Math.round(Math.random() * 233) +
                              ', ' + Math.round(Math.random() * 150) +
                              ', ' + Math.round(Math.random() * 200) + ')'
                  }
              }
          },
          left: 'center',
          top: 'center',
          shape: 'circle',
          width: '100%',
          height: '100%',
          right: null,
          bottom: null,
          // width: 300,
          // height: 200,
          // top: 20,
          data: data
        }]
      };
}