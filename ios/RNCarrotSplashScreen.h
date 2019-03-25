
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif
#import <Foundation/Foundation.h>
@interface RNCarrotSplashScreen : NSObject <RCTBridgeModule>
- (instancetype)init;
- (void)show;
- (void)hide;
@end
  
