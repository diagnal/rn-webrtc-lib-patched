Branch to Build From : `refs/branch-heads/5563`

webrtc/ios/src/sdk/objc/components/capturer/RTCCameraVideoCapturer.m

line no. 267

```c
    // switch (_orientation) {
  //   case UIDeviceOrientationPortrait:
  //     _rotation = RTCVideoRotation_0;
  //     break;
  //   case UIDeviceOrientationPortraitUpsideDown:
  //     _rotation = RTCVideoRotation_0;
  //     break;
  //   case UIDeviceOrientationLandscapeLeft:
  //     _rotation = usingFrontCamera ? RTCVideoRotation_180 : RTCVideoRotation_0;
  //     break;
  //   case UIDeviceOrientationLandscapeRight:
  //     _rotation = usingFrontCamera ? RTCVideoRotation_0 : RTCVideoRotation_180;
  //     break;
  //   case UIDeviceOrientationFaceUp:
  //   case UIDeviceOrientationFaceDown:
  //   case UIDeviceOrientationUnknown:
  //     // Ignore.
  //     break;
  // }
  _rotation = usingFrontCamera ? RTCVideoRotation_180 :RTCVideoRotation_0;
```
