import Vue from 'vue';
import component from '~/components/environment-label.vue';

import without from 'lodash/without';

describe('1', () => {
    let vm;

    beforeEach(() => {
        const Component = Vue.extend(component);
        vm = new Component({
            propsData: {}
        }).$mount();
    });

    afterEach(() => {
        vm.$destroy();
    });

    it('should render with provided data', () => {
        expect(
            vm.$el.querySelector('.element').textContent.trim()
        ).toEqual('foo');
    });
});

describe('2', () => {
    const interceptor = (request, next) => {
        next(request.respondWith(JSON.stringify({ foo: 'bar'}), {
            status: 200
        }));
    };

    beforeEach(() => {
        Vue.http.interceptors.push(interceptor);
    });

    afterEach(() => {
        Vue.http.interceptors = without(Vue.http.interceptor, interceptor);
    });

    it('should render the received data', (done) => {
        // ? const Component = Vue.extend(component);
        const vm = new Component({}).$mount();

        setTimeout(() => {
            expect(vm.$el.textContent).toEqual('bar');
            done();
        })
    });
});