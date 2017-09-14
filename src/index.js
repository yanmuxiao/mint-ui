import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)




// import MainVue from './views/Main.vue'
import MainVue from './views/Main1.vue'
import LoginVue from './views/Login.vue'


import JsVue from './views/JSComponents.vue'
import ToastVue from './views/JS/Toast.vue'
import IndicatorVue from './views/JS/Indicator.vue'
import LoadmoreVue from './views/JS/Loadmore.vue'
import InfiniteScrollVue from './views/JS/InfiniteScroll.vue'
import MessageBoxVue from './views/JS/MessageBox.vue'
import ActionSheetVue from './views/JS/ActionSheet.vue'
import PopupVue from './views/JS/Popup.vue'
import SwipeVue from './views/JS/Swipe.vue'
import LazyloadVue from './views/JS/Lazyload.vue'
import RangeVue from './views/JS/Range.vue'
import ProgressVue from './views/JS/Progress.vue'
import PickerVue from './views/JS/Picker.vue'
import DatetimePickerVue from './views/JS/DatetimePicker.vue'
import IndexListVue from './views/JS/IndexList.vue'
import PaletteButtonVue from './views/JS/PaletteButton.vue'


import CssVue from './views/CSSComponents.vue'

import HeaderVue from './views/CSS/Header.vue'
import TabbarVue from './views/CSS/Tabbars.vue'
import NavbarVue from './views/CSS/Navbar.vue'
import ButtonVue from './views/CSS/Button.vue'
import SpinnerVue from './views/CSS/Spinner.vue'
import SearchVue from './views/CSS/Search.vue'


import FormVue from './views/Form.vue'
import SwitchVue from './views/Form/Switch.vue'
import ChecklistVue from './views/Form/Checklist.vue'
import RadioVue from './views/Form/Radio.vue'
import FieldVue from './views/Form/Field.vue'
import BadgeVue from './views/Form/Badge.vue'



import './icon/iconfont.css'


export default new Router({
  routes: [
    {
      path: '/',
      component: LoginVue
    },
    // {
    //     path: '/main',
    //     component: MainVue,
    //     name: '',
    //     children: [
    //       { path: '/', component: JsVue},
    //       { path: '/js', component: JsVue},
    //       { path: '/css', component: CssVue},
    //       { path: '/form', component: FormVue}
    //     ]
    // },
    {
        path: '/main',
        name: '',
        component: MainVue
    },


    {
      path: '/toast',
      name: '',
      component: ToastVue
    },
    {
      path: '/indicator',
      name: '',
      component: IndicatorVue
    },
    {
      path: '/loadmore',
      name: '',
      component: LoadmoreVue
    },
    {
      path: '/infinitescroll',
      name: '',
      component: InfiniteScrollVue
    },
    {
      path: '/messagebox',
      name: '',
      component: MessageBoxVue
    },
    {
      path: '/actionsheet',
      name: '',
      component: ActionSheetVue
    },
    {
      path: '/popup',
      name: '',
      component: PopupVue
    },
    {
      path: '/swipe',
      name: '',
      component: SwipeVue
    },
    {
      path: '/lazyload',
      name: '',
      component: LazyloadVue
    },
    {
      path: '/range',
      name: '',
      component: RangeVue
    },
    {
      path: '/progress',
      name: '',
      component: ProgressVue
    },
    {
      path: '/picker',
      name: '',
      component: PickerVue
    },
    {
      path: '/datetimepicker',
      name: '',
      component: DatetimePickerVue
    },
    {
      path: '/indexlist',
      name: '',
      component: IndexListVue
    },
    {
      path: '/palettebutton',
      name: '',
      component: PaletteButtonVue
    },



    {
      path: '/header',
      name: '',
      component: HeaderVue
    },
    {
      path: '/tabbar',
      name: '',
      component: TabbarVue
    },
    {
      path: '/navbar',
      name: '',
      component: NavbarVue
    },
    {
      path: '/button',
      name: '',
      component: ButtonVue
    },
    {
      path: '/spinner',
      name: '',
      component: SpinnerVue
    },
    {
      path: '/search',
      name: '',
      component: SearchVue
    },





    {
      path: '/switch',
      name: '',
      component: SwitchVue
    },
    {
      path: '/checklist',
      name: '',
      component: ChecklistVue
    },
    {
      path: '/radio',
      name: '',
      component: RadioVue
    },
    {
      path: '/field',
      name: '',
      component: FieldVue
    },
    {
      path: '/badge',
      name: '',
      component: BadgeVue
    }


  ]
})
