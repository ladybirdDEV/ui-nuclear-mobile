import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import  Drawer  from '@/components/Drawer/Drawer.vue'
import { ENETRESET } from 'constants';

describe('Drawer ', () => {
  it('"position"默认值正常', () => {
        const wrapper = mount(Drawer ,{
        })
        expect(wrapper.props().position).to.be.equal('left')
        expect(wrapper.classes()).to.include('um-drawer-left')
      }) 

  it('"position"属性正常', () => {
    const wrapper = mount(Drawer ,{
      propsData: {
        position: 'bottom'
        }
    })
    expect(wrapper.props().position).to.be.a('string')
    expect(wrapper.props().position).to.be.equal('bottom')
    expect(wrapper.classes()).to.include('um-drawer-bottom')
  })

  it('"docked"默认值正常', () => {
    const wrapper = mount(Drawer ,{
    })
    expect(wrapper.props().docked).not.to.be.true
  })

  it('"docked"属性正常', () => {
    const wrapper = mount(Drawer ,{
      propsData: {
        docked: true
        }
    })
    expect(wrapper.props().docked).to.be.a('boolean')
    expect(wrapper.props().docked).to.be.true
    expect(wrapper.classes()).to.include('um-drawer-docked')
  })

  it('"sidebarStyle"属性正常', () => {
    var test = { bar: 'hello' };
    const wrapper = mount(Drawer ,{
      propsData: {
        sidebarStyle: test
        }
    })
    expect(wrapper.props().sidebarStyle).to.equal(test)

  })

  it('"contentStyle"属性正常', () => {
    var test = { bar: 'hello' };
    const wrapper = mount(Drawer ,{
      propsData: {
        contentStyle: test
        }
    })
    expect(wrapper.props().contentStyle).to.equal(test)

  })

  it('"overlayStyle"属性正常', () => {
    var test = { bar: 'hello' };
    const wrapper = mount(Drawer ,{
      propsData: {
        overlayStyle: test
        }
    })
    expect(wrapper.props().overlayStyle).to.equal(test)

  })

  it('"dragHandleStyle "属性正常', () => {
    var test = { bar: 'hello' };
    const wrapper = mount(Drawer ,{
      propsData: {
        dragHandleStyle : test
        }
    })
    expect(wrapper.props().dragHandleStyle ).to.equal(test)

  })

  it('"open"状态切换正常', () => {
    const wrapper = mount(Drawer ,{
      propsData: {
        open: true
        }
    })
    expect(wrapper.props().open).to.be.a('boolean')
    expect(wrapper.props().open).to.be.true
  })

  it('"dragToggleDistance"默认值正常', () => {
    const wrapper = mount(Drawer ,{
    })
    expect(wrapper.props().dragToggleDistance).to.be.equal(30)
  }) 

  it('"dragToggleDistance"属性正常', () => {
    const wrapper = mount(Drawer ,{
      propsData: {
        dragToggleDistance: 40
        }
    })
    expect(wrapper.props().dragToggleDistance).to.be.a('number')
    expect(wrapper.props().dragToggleDistance).to.be.equal(40)
  })

  it('"enableDragHandle"默认值正常', () => {
    const wrapper = mount(Drawer ,{
    })
    expect(wrapper.props().enableDragHandle).to.be.a('boolean')
    expect(wrapper.props().enableDragHandle).not.to.be.true
  })
})