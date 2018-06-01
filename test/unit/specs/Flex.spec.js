import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import { Flex, FlexItem } from '@/components/Flex'

describe('Flex', () => {
  it('正常显示', () => {
    const wrapper = mount(Flex,{
      slots: {
        default: [FlexItem, FlexItem]
      }
    })
    expect(wrapper.findAll(FlexItem).length).to.be.equal(2)
  })


  it('属性"direction"类型与数据更改正常', () => {
    const wrapper = mount(Flex,{
      propsData: {
        direction: 'row'
        }
    })
    expect(wrapper.props().direction).to.be.a('string')
    expect(wrapper.props().direction).to.be.equal('row')
    expect(wrapper.classes()).to.include('um-flexbox-dir-row')
  })



  it('属性"wrap"类型与数据更改正常', () => {
    const wrapper = mount(Flex,{
      propsData: {
        wrap: 'wrap-reverse'
        }
    })
    expect(wrapper.props().wrap).to.be.a('string')
    expect(wrapper.props().wrap).to.be.equal('wrap-reverse')
    expect(wrapper.classes()).to.include('um-flexbox-wrap-reverse')
  })



  it('属性"justify"类型与数据更改正常', () => {
    const wrapper = mount(Flex,{
      propsData: {
        justify: 'around'
        }
    })
    expect(wrapper.props().justify).to.be.a('string')
    expect(wrapper.props().justify).to.be.equal('around')
    expect(wrapper.classes()).to.include('um-flexbox-justify-around')
  })



  it('"align"默认值正常', () => {
    const wrapper = mount(Flex,{
    })
    expect(wrapper.props().align).to.be.equal('center')
    expect(wrapper.classes()).to.include('um-flexbox-align-center')
  }) 
  it('属性"align"类型与数据更改正常', () => {
    const wrapper = mount(Flex,{
      propsData: {
        align: 'baseline'
        }
    })
    expect(wrapper.props().align).to.be.a('string')
    expect(wrapper.props().align).to.be.equal('baseline')
    expect(wrapper.classes()).to.include('um-flexbox-align-baseline')
  })
})

