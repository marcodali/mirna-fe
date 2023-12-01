// prod
export const CREATE_SOCKET_API = "https://api.mirna.cloud/sockets";
export const GET_CODE_API =
  "https://api.mirna.cloud/sockets/1?username=__USERNAME__&project=__PROJECT__";
export const WSS_PROJECT_URI = "wss://api.mirna.cloud/__USERNAME__/__PROJECT__";

// local
// export const CREATE_SOCKET_API = "http://localhost:4000/sockets";
// export const GET_CODE_API =
//   "http://localhost:4000/sockets/1?username=__USERNAME__&project=__PROJECT__";
// export const WSS_PROJECT_URI = "ws://localhost:4000/__USERNAME__/__PROJECT__";

// general
const sampleFiles = [
  "/broadcastServerSample.txt",
  "/echoServerSample.txt",
  "/librariesUsage.txt",
];
export const CODE_SAMPLE =
  sampleFiles[Math.floor(Math.random() * sampleFiles.length)];
export const RANDOM_USER_API = "https://randomuser.me/api/?inc=login&noinfo";
export const DURAZNO_WEBSITE = "https://durazno.io";
export const DURAZNO_NAME = "Durazno Technologies";
export const SERVER_PROJECT_EXAMPLE =
  "https://gist.github.com/marcodali/f71c88953f648d9c90fe25fd254f88c4";
export const CLIENT_PROJECT_EXAMPLE = "https://playcode.io/1604700";
export const LIVE_DEMO_PROJECT_EXAMPLE = "https://1604700.playcode.io";
