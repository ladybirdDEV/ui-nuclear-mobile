import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import WingBlank from '@/components/WingBlank'

describe('WingBlank', () => {
  it('默认大尺寸', () => {
    const wrapper = mount(WingBlank)
    expect(wrapper.classes()).to.include('um-wing-blank-lg')
  })

  it('根据属性改变尺寸', () => {
    const wrapper = mount(WingBlank, {
      propsData: {
        size: 'md'
      }
    })
    expect(wrapper.props().size).to.equal('md')
    expect(wrapper.classes()).to.include('um-wing-blank-md')
  })

  it('包含的内容应该插入插槽', () => {
    const wrapper = mount(WingBlank, {
      slots: {
        default: '<div>Block</div>'
      }
    })
    expect(wrapper.html()).to.include('<div>Block</div>')
  })
})
