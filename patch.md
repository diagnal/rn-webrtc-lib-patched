webrtc/ios/src/sd/objc/components/capturer/RTCCameraVideoCapture.m

line no. 262

```c
  switch (_orientation) {
    case UIDeviceOrientationPortrait:
      _rotation = usingFrontCamera ? RTCVideoRotation_180 :RTCVideoRotation_0;
      break;
    case UIDeviceOrientationPortraitUpsideDown:
      _rotation = usingFrontCamera ? RTCVideoRotation_180 :RTCVideoRotation_0;
      break;
    case UIDeviceOrientationLandscapeLeft:
      _rotation = usingFrontCamera ? RTCVideoRotation_180 : RTCVideoRotation_0;
      break;
    case UIDeviceOrientationLandscapeRight:
      _rotation = usingFrontCamera ? RTCVideoRotation_0 : RTCVideoRotation_180;
      break;
    case UIDeviceOrientationFaceUp:
    case UIDeviceOrientationFaceDown:
    case UIDeviceOrientationUnknown:
      // Ignore.
      break;
  }
  // _rotation = usingFrontCamera ? RTCVideoRotation_180 :RTCVideoRotation_0;
```
