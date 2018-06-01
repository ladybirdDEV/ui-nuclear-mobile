/* eslint-disable */
import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import {List,Listitem,ListitemBrief}from '@/components/List'

describe('List', () => {
  it('上/下标题修改', () => {
    const wrapper = mount(List, {
      slots: {
        default: '<div>Block</div>'
      },
      propsData: {
        renderHeader: 'header test',
        renderFooter: 'footer test'
      }
    })
    expect(wrapper.props().renderHeader).to.equal('header test')
    expect(wrapper.props().renderFooter).to.equal('footer test')
    expect(wrapper.html()).to.include('<div>Block</div>')
    expect(wrapper.classes()).to.include('um-list')
  })
})

