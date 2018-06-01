import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import {CardHeader } from '@/components/Card'
describe('CardHeader', () => {
    it('卡片标题栏props传输正常', () => {
      const wrapper = mount(CardHeader, {
        propsData: {
          thumb: 'this is thumb',
          title: 'this is title',
          extra: 'this is extra',
        }
      })
      expect(wrapper.classes()).to.include('um-card-header')
      expect(wrapper.props().thumb).to.equal('this is thumb')
      expect(wrapper.props().title).to.equal('this is title')
      expect(wrapper.props().extra).to.equal('this is extra')
      
    })
})