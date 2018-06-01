import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import { Card, CardBody, CardFooter,CardHeader } from '@/components/Card'

describe('Card', () => {
  it('卡片正常显示', () => {
    const wrapper = mount(Card, {
      slots: {
        default: [CardBody, CardBody, CardFooter]
      }
    })
    expect(wrapper.findAll(CardBody).length).to.be.equal(2)    
    expect(wrapper.findAll(CardFooter).length).to.be.equal(1) 
    expect(wrapper.classes()).to.include('um-card')
  })
  it('卡片props传输正常', () => {
    const wrapper = mount(Card, {   
        propsData: {
        full: true
        }
      })
      expect(wrapper.props().full).to.be.true
      expect(wrapper.props().full).to.be.a('Boolean')
  })
})
