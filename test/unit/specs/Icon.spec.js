import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import  Icon  from '@/components/Icon/Icon.vue'

describe(' Icon ', () => {
  it('"type"属性正常', () => {
    const wrapper = mount(Icon ,{
      propsData: {
        type: 'cross-circle-o'
          } 
     })
     expect(wrapper.props().type).to.be.equal('cross-circle-o')
     expect(wrapper.props().type).to.be.a('string')
  }) 

  it('"size"属性正常', () => {
    const wrapper = mount(Icon ,{
      propsData: {
        size: 'xxs'
        }
    })
    expect(wrapper.props().size).to.be.equal('xxs')
  })

  it('"color"属性正常', () => {
    const wrapper = mount(Icon ,{
        propsData: {
            color: '#000'
            } 
    })
    expect(wrapper.props().color).to.be.equal('#000')
  })

  it('"mounted"函数正常', () => {
    expect(typeof Icon.mounted).to.equal('function')
  })

})