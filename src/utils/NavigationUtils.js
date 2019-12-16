/*
 * @Author: liub
 * @Date: 2019-12-14 13:04:12
 * @LastEditors: liub
 * @LastEditTime: 2019-12-14 16:07:01
 */
export default class NavigationUtils {
  static NavigationToPage = pages => {
    NavigationUtils.homeNavigation.navigate(pages);
  };
  static NavigationToHome = navigation => {
    navigation.navigate('Main');
  };
  static NavigationBack = navigation => {
    navigation.goBack();
  };
}
