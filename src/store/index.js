import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cursos: [{
                title: 'Curso de Guitarra',
                description: 'cLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                img: 'https://i.pinimg.com/originals/69/cb/2a/69cb2a95fdd0b5ff4b98c41ae9115e23.png'
            },
            {
                title: 'Curso de Piano',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                img: 'https://palomavaleva.com/site/wp-content/uploads/2018/11/8-conseils-pour-apprendre-%C3%A0-jouer-du-violon.jpg'
            },
            {
                title: 'Curso de Violin',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                img: 'https://www.superprof.cl/blog/wp-content/uploads/2017/12/piano-virtual-aprender.jpg'
            }
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})