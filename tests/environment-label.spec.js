import Vue from 'vue';
import component from '~/components/environment-label.vue';

describe('[EnvironmentLabel]', () => {
    let vm;

    beforeEach(() => {
        const Component = Vue.extend(component);
        vm = new Component({ propsData: {} }).$mount();
    });

    afterEach(() => {
        vm.$destroy();
    });

    it('should render single .env-label', () => {
        expect(vm.$el.querySelector('.env-label:visible').length()).toEqual(1);
    });
});