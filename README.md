
# react-native-carrot-splash-screen
Solve the problem of launching a white screen in a React Native project

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


## Methods

| Method  | Params  | Description |
| :------------ |:---------------:| :---------------:|
| show | - |Called in native, When you want to keep the splash screen |
| hide | - | Call in js when you want to close the splash screen |

## Usage
`javascript`
`
import RNCarrotSplashScreen from 'react-native-carrot-splash-screen';`
### iOS
`AppDelegate.m `
```
#import "AppDelegate.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import "RNCarrotSplashScreen.h"
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  ...
  [self.window makeKeyAndVisible];
  [RNCarrotSplashScreen show];//Please be sure to write in the last line
  return YES;
}
```
### javascript
```
export default class App extends Component<Props> {
  render() {
  ...
  componentDidMount(){
		//Hide the splash screen
    CarrotSplashScreen.hide();
	}
	...
}
```
### Android
1. Create a layout file under ./res/layout, named launch_screen.
2. Call the CarrotSplashScreen.show() method in the onCreate lifecycle of MainActivity.
```
import android.os.Bundle;
import com.awesomeproject.splash.SplashScreen;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
    ...
}
```

  