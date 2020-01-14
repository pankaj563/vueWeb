//libs
import Vue from "vue";
import Router from "vue-router";

import LoginFront from "./components/Login/index";
import Signup from "./components/Signup/index";
import Dashboard from "./components/Dashboard/dashboadlayout";

//-----Not Found
import NotFound from "./components/NotFound";

Vue.use(Router);

export default new Router({
  routes: [
    //default route redirection
    { path: "/", redirect: { name: "loginfront" } },
    //not found route redirection
    { path: "*", component: NotFound },
    { path: "/signup", name:"signup", component: Signup },
    { path: "/dashboard", name:"dashboard", component: Dashboard },
    {
      path: "/",
      name: "loginfront",
      component: LoginFront,
      meta: {
        label: "Login"
      }
    }
      /*children: [
        {
          path: "/signup",
          name: "signup",
          component: Signup,
          children: [
            {
              path: "sub-child-1",
              name: "SubChild1",
              component: Parent1SubChild1,
              meta: { label: "Sub child 1", display: false }
            }
          ],
          meta: { label: "child 1" }
        },
        
    {
      path: "/not-found",
      name: "not Found",
      component: NotFound,
      meta: {
        display: false // this attribute i use it to show/hide route in th menu
      }
    },
    
  ]*/
  
  ]
});
