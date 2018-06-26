import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import  Button  from '@/components/Button/Button.vue'

describe(' Button ', () => {
  it('"type"属性正常', () => {
        const wrapper = mount(Button ,{
            propsData: {
                type: 'warning'
                }
        })
        expect(wrapper.props().type).to.be.equal('warning')
      })

  it('"size"属性正常', () => {
    const wrapper = mount(Button ,{
      propsData: {
        size: 'small'
        }
    })
    expect(wrapper.props().size).to.be.equal('small')
  })

  it('"size"默认属性为large', () => {
    const wrapper = mount(Button ,{

    })
    expect(wrapper.props().size).to.be.equal('large')
  })

  it('"disabled"属性正常', () => {
    const wrapper = mount(Button ,{
        propsData: {
            disabled: false
            }
    })
    expect(wrapper.props().disabled).not.to.be.true
  })

  it('"inline"属性正常', () => {
    const wrapper = mount(Button ,{
        propsData: {
            inline: true
            }
    })
    expect(wrapper.props().inline).to.be.true
  })

  it('"loading"属性正常', () => {
    const wrapper = mount(Button ,{
        propsData: {
            loading: true
            }
    })
    expect(wrapper.props().loading).to.be.true
  })

  it('"icon"属性正常', () => {
    const wrapper = mount(Button ,{
        propsData: {
            icon: 'true'
            }
    })
    expect(wrapper.props().icon).to.be.a('string')
    expect(wrapper.props().icon).to.be.equal('true')
  })
})
