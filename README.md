
# react-native-carrot-splash-screen

## Getting started

`$ npm install react-native-carrot-splash-screen --save`

### Mostly automatic installation

`$ react-native link react-native-carrot-splash-screen`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-carrot-splash-screen` and add `RNCarrotSplashScreen.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCarrotSplashScreen.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.carrot.splashScreen.RNCarrotSplashScreenPackage;` to the imports at the top of the file
  - Add `new RNCarrotSplashScreenPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-carrot-splash-screen'
  	project(':react-native-carrot-splash-screen').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-carrot-splash-screen/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-carrot-splash-screen')
  	```


## Usage
```javascript
import RNCarrotSplashScreen from 'react-native-carrot-splash-screen';

// TODO: What to do with the module?
RNCarrotSplashScreen;
```
  