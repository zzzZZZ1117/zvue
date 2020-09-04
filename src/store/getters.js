/*
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-03 10:40:15
 * @LastEditTime: 2020-09-04 15:00:51
 * @LastEditors: ZQJ-1130123899
 * @Description:
 * @FilePath: \zvue\src\store\getters.js
 * @Additional information: NULL
 */
const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes
}

export default getters
