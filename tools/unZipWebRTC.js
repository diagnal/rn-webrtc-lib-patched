const decompress = require('decompress');
const request = require('request');
const fs = require('fs');

(async () => {
  if (process.platform === 'darwin') {
    const fileUrl =
      'https://github.com/jabirmhd/react-native-webrtc/releases/download/patch%232/WebRTC.xcframework.zip';
    const source = './apple/WebRTC.xcframework.zip';
    const target = './apple/';

    request({ url: fileUrl, encoding: null }, function (err, resp, body) {
      if (err) throw err;
      fs.writeFile(source, body, function (err) {
        console.log('file written!');
        decompress(source, target).catch((error) => {
          console.log(error);
        });
      });
    });
  }
})();
