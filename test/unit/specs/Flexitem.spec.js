import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import { FlexItem } from '@/components/Flex'

describe('FlexItem', () => {
  it('正常显示', () => {
    const wrapper = mount(FlexItem,{
    })
    expect(wrapper.classes()).to.include('um-flexbox-item')
  })
})


