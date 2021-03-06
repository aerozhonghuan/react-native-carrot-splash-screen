
#import "RNCarrotSplashScreen.h"
#import <React/RCTBridge.h>
@interface RNCarrotSplashScreen ()
@end

static bool waiting = true;
static bool addedJsLoadErrorObserver = false;

@implementation RNCarrotSplashScreen

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

/**
 *持续显示闪屏界面方法---供原生调用，必须写在didFinishLaunchingWithOptions方法return上面一行
 */
+ (void)show {
    if (!addedJsLoadErrorObserver) {
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(jsLoadError:) name:RCTJavaScriptDidFailToLoadNotification object:nil];
        addedJsLoadErrorObserver = true;
    }
    
    while (waiting) {
        NSDate* later = [NSDate dateWithTimeIntervalSinceNow:0.1];
        [[NSRunLoop mainRunLoop] runUntilDate:later];
    }
}

+ (void)hide {
    dispatch_async(dispatch_get_main_queue(),
                   ^{
                       waiting = false;
                   });
}

+ (void) jsLoadError:(NSNotification*)notification
{
    // If there was an error loading javascript, hide the splash screen so it can be shown.  Otherwise the splash screen will remain forever, which is a hassle to debug.
    [RNCarrotSplashScreen hide];
}

/**
 *关闭闪屏界面方法-供js端调用，一般写在主页面的componentDidMount方法中
 */
RCT_EXPORT_METHOD(hide) {
    [RNCarrotSplashScreen hide];
}

RCT_EXPORT_METHOD(show) {
    [RNCarrotSplashScreen show];
}

@end
