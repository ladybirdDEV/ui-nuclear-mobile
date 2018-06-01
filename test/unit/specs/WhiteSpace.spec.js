import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import WhiteSpace from '@/components/WhiteSpace'

describe('WhiteSpace', () => {
  it('默认尺寸是中等', () => {
    const wrapper = mount(WhiteSpace)
    expect(wrapper.classes()).to.include('um-white-space-md')
  })

  it('根据属性改变大小', () => {
    const wrapper = mount(WhiteSpace, {
      propsData: {
        size: 'xs'
      }
    })
    expect(wrapper.props().size).to.equal('xs')
    expect(wrapper.classes()).to.include('um-white-space-xs')
  })
})
