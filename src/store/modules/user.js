// import Cookies from 'js-cookie';
// import UserClientService from '../../service/client/auth/userclient/UserClientService'
// import {LoginReqBody,PasswordChange,FastRegisterBody,UserDetail} from '../../service/client/auth/userclient/LoginReqBody'
// import MyException from '../../settings/auth/MyException'
// const user = {
//   state: {
//     welcome:{
//       welcomeTabValue: 'login'
//     },
//     loginForm:{
//       userName: Cookies.get('userName') === undefined? 'tanweiping':Cookies.get('userName'),
//       password: '',
//       errorUserName: '',
//       errorPwd: '',
//       notice: {
//         code: '',
//         content: ''
//       },
//     },
//     changePwdForm:{
//       userName: Cookies.get('userName') === undefined? 'tanweiping':Cookies.get('userName'),
//       oldPassword: '',
//       newPassword: '',
//       errorUserName: '',
//       errorOldPwd: '',
//       errorNewPwd: '',
//       notice: {
//         code: '',
//         content: ''
//       },
//     },
//     registerForm:{
//       userName: '',
//       password: '',
//       sex: 'man',
//       name: '',
//       phoneNumber: '',
//       errorUserName: '',
//       errorPwd: '',
//       errorPhoneNumber: '',
//       notice: {
//         code: '',
//         content: ''
//       },
//     },
//
//     name: '',
//     userName:'',
//     userStatus: false,
//     accessToken:'',
//     refreshToken:'',
//     services:{
//       userClientService: (new UserClientService().build())
//     }
//   },
//   mutations: {
//     login (state, payload) {
//       let {loginForm,result} = {...payload};
//       loginForm.notice = {
//         code: `${result.code}`,
//         content: result.message
//       }
//
//       if (result.isSuccess){
//         //清空密码栏目
//         loginForm.password = '';
//         Cookies.set('userName', loginForm.userName);
//         Cookies.set('accessToken', loginForm.userName);
//         this.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
//         if (loginForm.userName === 'tanweiping') {
//           Cookies.set('access', 0);
//         } else {
//           Cookies.set('access', 1);
//         }
//         Cookies.set("userStatus",new Object(true))
//         Cookies.set("name",result.data.name)
//         state.accessToken = result.data.accessToken;
//         state.refreshToken = result.data.refreshToken;
//         state.name = result.data.name;
//         /*
//         路由跳转
//          */
//         state.userStatus = new Object(true);
//       }else{
//         state.userStatus = new Object(false)
//         //登陆失败
//         if (result.code === MyException.errorPwd) {
//           loginForm.errorPwd = new Object(result.message);
//           loginForm.password = '';
//         }else {
//           loginForm.errorUserName = new Object(result.message);
//           this.commit('resetLoginForm',loginForm)
//         }
//       }
//     },
//     logout (state, loginForm) {
//       loginForm.notice = {
//         code: '200',
//         content: `${state.userName}退出登陆成功`
//       }
//       state.userStatus = {valid: false};
//       Cookies.remove('userName');
//       Cookies.remove('name');
//       Cookies.remove('access');
//       Cookies.remove('userStatus');
//       // 恢复默认样式
//       //let themeLink = document.querySelector('link[name="theme"]');
//       //themeLink.setAttribute('href', '');
//       // 清空打开的页面等数据，但是保存主题数据
//       let theme = '';
//       if (localStorage.theme) {
//         theme = localStorage.theme;
//       }
//       localStorage.clear();
//       if (theme) {
//         localStorage.theme = theme;
//       }
//     },
//     resetLoginForm(state){
//       state.loginForm.userName = '';
//       state.loginForm.password = '';
//     },
//     changePwd(state, payload) {
//       let {changePwdForm,result} = {...payload};
//       //更新通知
//       changePwdForm.notice = {
//         code: `${result.code}`,
//         content: result.message
//       }
//       if (result.isSuccess) {
//         Cookies.set('userName', changePwdForm.userName);
//         changePwdForm.errorOldPwd = ''
//         changePwdForm.errorNewPwd = ''
//         state.welcome.welcomeTabValue = 'login'
//       }else {
//         //失败需要给出具体提示
//         const message = new Object(result.message)
//         if (result.code === MyException.NoneUser) {
//           changePwdForm.errorUserName = message
//         }else if (result.code === MyException.errorOldPwd) {
//           changePwdForm.errorOldPwd = message
//         }else {
//           changePwdForm.errorNewPwd = message
//         }
//       }
//       changePwdForm.oldPassword = ''
//       changePwdForm.newPassword = ''
//     },
//     FastRegister(state, payload) {
//       let {registerForm,result} = {...payload};
//       //更新通知
//       registerForm.notice = {
//         code: `${result.code}`,
//         content: result.message
//       }
//       if (result.isSuccess){
//         Cookies.set('userName', registerForm.userName);
//         state.loginForm.userName = registerForm.userName;
//         state.loginForm.password = registerForm.password;
//         state.registerForm = {
//           ...registerForm,
//           ...{
//             userName: '',
//             password: '',
//             sex: 'man',
//             name: '',
//             phoneNumber: '',
//             errorUserName: '',
//             errorPwd: '',
//             errorPhoneNumber: '',
//           }
//         }
//         state.welcome.welcomeTabValue = 'login'
//       }else {
//         //失败需要给出具体提示
//         const message = new Object(result.message)
//         if (result.code === MyException.existUser) {
//           registerForm.errorUserName = message
//         }
//       }
//     }
//   },
//   actions: {
//     async login({ commit, state }, loginForm){
//       console.log('loginForm:' ,loginForm)
//       let result = await  state.services.userClientService.login(new LoginReqBody(loginForm.userName,loginForm.password));
//       commit('login',{loginForm,result})
//     },
//     async changePwd({ commit, state }, changePwdForm){
//       console.log('resetPwdForm:', changePwdForm)
//       if (changePwdForm.oldPassword === changePwdForm.newPassword) {
//         const message = new Object('新旧密码不能相同')
//         changePwdForm.notice = {
//           code: '500',
//           content: message
//         }
//         changePwdForm.errorOldPwd = message
//         return
//       }
//       let result = await  state.services.userClientService.pwdChange(
//         new PasswordChange(
//           changePwdForm.userName,
//           changePwdForm.oldPassword,
//           changePwdForm.newPassword,
//         )
//       );
//       commit('changePwd',{changePwdForm,result})
//     },
//     async FastRegister({ commit, state }, registerForm){
//       console.log('registerForm:', registerForm)
//       let {userName, password, name, sex, phoneNumber} = {...registerForm}
//       let result = await state.services.userClientService.registry(
//         new FastRegisterBody(
//           userName, password, name, sex,
//           new UserDetail(phoneNumber)
//         )
//       )
//       commit('FastRegister',{registerForm,result})
//     }
//   }
// };
//
// export default user;
