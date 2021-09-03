import React from 'react'
import ReactDOM from  'react-dom'

// 路由
import { Route, Switch,BrowserRouter } from 'react-router-dom'
// import { HashRouter } from 'react-router-dom'

// store
import { Provider } from 'react-redux'
import store from './redux/store';

import 'element-theme-default';

import 'animate.css'

import routers from './router/index.ts'

import './assets/css/common.css'

// ReactDOM.render((
//   <Provider store={ store }>
//     <HashRouter>
//       <Switch>
//         {
//           routers.map((router,index)=>{
//             return (
//               <Route
//                 key = { index }
//                 exact
//                 path = { router.path }
//                 component = { router.component }
//                 render={ (props)=>{
//                   return (
//                      <div>
//                          <router.component { ...props }>
//                              {
//                                  router.children?.map((item,itemIndex)=>{
//                                      return (
//                                          <Route
//                                              exact={ item.exact }
//                                              key={itemIndex}
//                                              path={item.path}
//                                              component = { item.component }
//                                          />
//                                      )
//                                  })
//                              }
//                          </router.component>
//                      </div>
//                   )
//               } }
//               ></Route>
//             )
//           })
//         }
//       </Switch>
//     </HashRouter>
//   </Provider>
// ), document.getElementById('root'))

ReactDOM.render((
  <Provider store={ store }>
    <BrowserRouter>
        <Switch>
        {
            routers.map((router,index)=>{
                return (
                    <Route
                        exact={ router.exact }
                        key={index}
                        path={router.path}
                        render={ (props)=>{
                            return (
                              <div>
                                  <router.component { ...props }>
                                      {
                                          router.children?.map((item,itemIndex)=>{
                                              return (
                                                  <Route
                                                      exact={ item.exact }
                                                      key={itemIndex}
                                                      path={item.path}
                                                      component = { item.component }
                                                  />
                                              )
                                          })
                                      }
                                  </router.component>
                              </div>
                            )
                        } }
                    />
                )
            })
        }
        </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))     