import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import { CardFooter } from '@/components/Card'
describe('CardFooter', () => {
    it('props传输正常', () => {
      const wrapper = mount(CardFooter, {
        propsData: {
          content: 'this is content',
          extra: 'this is extra'
        }
      })
      expect(wrapper.classes()).to.include('um-card-footer')
      expect(wrapper.props().content).to.equal('this is content')
      expect(wrapper.props().extra).to.equal('this is extra')
    })
  })