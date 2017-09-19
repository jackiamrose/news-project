/**
 * Created by user-pc on 2017/7/31.
 */
import getters from './getters.js'

const state={
  headerFlag:true,
  footerFlag:true
};

const mutations={
    showHeader(state){
        state.headerFlag=true;
    },
    hideHeader(state){
        state.headerFlag=false;
    },
    showFooter(state){
        state.footerFlag=true;
    },
    hideFooter(state){
        state.headerFlag=false;
    }
};

export default {
    state,
    mutations,
    getters
}