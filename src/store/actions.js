/**
 * Created by user-pc on 2017/7/31.
 */
export default {
    showHeader:({commit})=>{
        commit('showHeader');
    },
    hideHeader:({commit})=>{
        commit('hideHeader');

    },
    showFooter:({commit})=>{
        commit('showFooter');
    },
    hideFooter:({commit})=>{
        commit('hideFooter')
    }


}