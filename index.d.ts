/*
 * @Description: react-native-carrot-splash-screen
 *  Solve the problem of launching a white screen in a React Native project
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-03-25 16:03:18
 * @LastEditTime: 2019-03-27 15:00:37
 */

declare module "react-native-carrot-splash-screen" {
    declare const CarrotSplashScreen:{
        /**
         * @description: Keep the display splash screen,Called in the native side
         * @return: void
         */
        show():void;

        /**
         * @description: Hidden splash screen,Called on the js side
         * @return: void
         */
        hide():void;
    }
    export default CarrotSplashScreen;
}