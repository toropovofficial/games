import { expect, describe, test, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import CustomInput from './index.vue'

let wrapper
afterEach(() => wrapper?.unmount())

describe('CustomInput', () => {
	let wrapper

	test('emits input value when changed', async () => {
		wrapper = mount(CustomInput, {
			props: {
				modelValue: 'Test Value',
				'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
			},
		})

		await wrapper.find('input').setValue('New Test Value')
		expect(wrapper.props('modelValue')).toBe('New Test Value')
	})
})

describe('BaseInput', () => {
	let wrapper

	beforeEach(() => {
		wrapper = mount(CustomInput, {
			propsData: {
				label: 'Test Label',
				modelValue: 'Test Value',
			},
		})
	})

	it('emits input value when changed', async () => {
		// Assert input value gets the new value
		await wrapper.find('input').setValue('New Test Value')
		expect(wrapper.find('input').element.value).toBe('New Test Value')

		await wrapper.vm.$nextTick()
		expect(wrapper.emitted().input).toBeTruthy()
	})
})
