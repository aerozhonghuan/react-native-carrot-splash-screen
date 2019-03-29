
package com.carrot.splashScreen;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RNCarrotSplashScreenModule extends ReactContextBaseJavaModule {

    public RNCarrotSplashScreenModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNCarrotSplashScreen";
    }

    @ReactMethod
    public void show() {
        SplashScreen.show(getCurrentActivity());
    }

    @ReactMethod
    public void hide() {
        SplashScreen.hide(getCurrentActivity());
    }
}