import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import {List,ListItem,Feedback}from '@/components/List'


describe('ListItem', () => {
  it('卡片正常显示', () => {
    const wrapper = mount(ListItem, {
        propsData: {
            multipleLine: true,
            wrap: true,
            disabled: true,
            align: 'baseline',
            platform: 'android',
            thumb: 'this is thumb',
            extra: 'this is extra',
            arrow: 'this is arrow',
        }
    })
    expect(wrapper.props().multipleLine).to.be.true
    expect(wrapper.props().wrap).to.be.true
    expect(wrapper.props().disabled).to.be.true 
    expect(wrapper.props().align).to.be.equal('baseline')
    expect(wrapper.props().platform).to.be.equal('android')
    expect(wrapper.props().thumb).to.equal('this is thumb')
    expect(wrapper.props().arrow).to.equal('this is arrow')
    expect(wrapper.props().extra).to.equal('this is extra')
  })

  it('props默认值正常', () => {
    const wrapper = mount(ListItem, {   
        slots: {
            default: '<div>"Block"</div>'
          }
      })
      expect(wrapper.props().multipleLine).not.to.be.true
      expect(wrapper.props().wrap).not.to.be.true
      expect(wrapper.props().disabled).not.to.be.true,
      expect(wrapper.props().align).to.equal('middle'),
      expect(wrapper.props().platform).to.equal('ios')
    })
})
