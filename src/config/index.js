import env from 'react-native-config'

const config = {
  api: {
    host: 'http://api.tynb0622.com',
    timeout: 20000
  }
};

const API_HOST = config.api.host;

export {
  API_HOST
}

export default config