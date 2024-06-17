import {createStore, Store} from 'vuex'
import {InjectionKey} from "vue";


interface State {
    theme: string;
}

export const key: InjectionKey<Store<State>> = Symbol()

// Create a new store instance.
export const store = createStore<State>( {
    state: {
        theme: 'light',
    },
    getters: {
        theme: (state: { theme: any; }) => state.theme,
    },
    mutations: {
        setTheme(state: { theme: any; }, theme: any) {
            state.theme = theme;
        }
    },
    actions: {
        setTheme({commit}: any, theme: any) {
           commit('setTheme', theme);
        },
    }
})

