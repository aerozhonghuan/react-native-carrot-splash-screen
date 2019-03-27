/*
 * @Description: The module for eact-native-carrot-splash-screen,Solve the problem of launching a white screen in a React Native project
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-03-25 16:03:18
 * @LastEditTime: 2019-03-27 15:02:37
 */

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
