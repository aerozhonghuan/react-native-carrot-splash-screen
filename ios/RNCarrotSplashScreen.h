
#import <React/RCTBridgeModule.h>
@interface RNCarrotSplashScreen : NSObject <RCTBridgeModule>
/**
 *持续显示闪屏界面方法---供原生调用，必须写在didFinishLaunchingWithOptions方法return上面一行
 */
+ (void)show;
/**
 *关闭闪屏界面方法-供js端调用，一般写在主页面的componentDidMount方法中
 */
+ (void)hide;
@end
