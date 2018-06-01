import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import { CardBody} from '@/components/Card'
describe('CardBody', () => {
    it('卡片主体插槽正常', () => {
      const wrapper = mount(CardBody, {
        slots: {
          default: '<div>Block</div>'
        }
      })
      expect(wrapper.html()).to.include('<div>Block</div>')
    })
  })
  