import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import  Calendar  from '@/components/Calendar/Calendar.vue'

describe(' Calendar ', () => {
  it('"enterDirection"属性正常', () => {
        const wrapper = mount(Calendar ,{
            propsData: {
                enterDirection: 'horizontal'
                } 
        })
        expect(wrapper.props().enterDirection).to.be.equal('horizontal')
      }) 
  
  it('"rowSize"属性正常', () => {
     const wrapper = mount(Calendar ,{
            propsData: {
                rowSize: 'xl',
                } 
        })
        expect(wrapper.props().rowSize).to.equal('xl')
    }) 

  it('"locale"属性正常', () => {
     var point ={}  
     const wrapper = mount(Calendar ,{
            propsData: {
                locale: point,
                } 
        })
        expect(wrapper.props().locale).to.equal(point)
    }) 

  it('"pickTime"属性正常', () => {
    const wrapper = mount(Calendar ,{
           propsData: {
            pickTime: true
               } 
       })
       expect(wrapper.props().pickTime).to.be.true
   })

   it('"prefixCls"属性正常', () => {
    const wrapper = mount(Calendar ,{
           propsData: {
            prefixCls: 'mobile-calendar'
               } 
       })
       expect(wrapper.props().prefixCls).to.equal('mobile-calendar')
   })

   it('"title"属性正常', () => {
    const wrapper = mount(Calendar ,{
           propsData: {
            title: 'test title'
               } 
       })
       expect(wrapper.props().title).to.equal('test title')
   })

   it('"showShortcut"属性正常', () => {
    const wrapper = mount(Calendar ,{
           propsData: {
            showShortcut: true
               } 
       })
       expect(wrapper.props().showShortcut).to.be.true
   })

   it('"visible"属性正常', () => {
    const wrapper = mount(Calendar ,{
           propsData: {
            visible :true
               } 
       })
       expect(wrapper.props().visible).to.be.true
   })

   it('"defaultDate"默认类型正常', () => {
    var d = new Date();
    const wrapper = mount(Calendar ,{

       })
       expect(wrapper.props().defaultDate).to.be.a('Date')
   })

   it('"defaultDate"属性正常', () => {
    var d = new Date();
    const wrapper = mount(Calendar ,{
           propsData: {
            defaultDate :d,
               } 
       })
       expect(wrapper.props().defaultDate).to.equal(d)
   })

   it('"maxDate"属性正常', () => {
    var d = new Date();
    const wrapper = mount(Calendar ,{
           propsData: {
            maxDate :d,
               } 
       })
       expect(wrapper.props().maxDate).to.equal(d)
   })

   it('"defaultTimeValue"属性正常', () => {
    var d = new Date();
    const wrapper = mount(Calendar ,{
           propsData: {
            defaultTimeValue :d,
               } 
       })
       expect(wrapper.props().defaultTimeValue).to.equal(d)
   })

   it('"minDate"属性正常', () => {
    var d = new Date();
    const wrapper = mount(Calendar ,{
           propsData: {
            minDate :d,
               } 
       })
       expect(wrapper.props().minDate).to.equal(d)
   })

   it('"infiniteOpt"属性正常', () => {
    const wrapper = mount(Calendar ,{
           propsData: {
            infiniteOpt: true
               } 
       })
       expect(wrapper.props().infiniteOpt).to.be.true
   })

   it('"initalMonths"属性正常', () => {  
    const wrapper = mount(Calendar ,{
           propsData: {
            initalMonths: 8
               } 
       })
       expect(wrapper.props().initalMonths).to.equal(8)
   })



  it('"onCancel"函数正常', () => {
    function test(x){
        return true
    }
    const wrapper = mount(Calendar ,{
           propsData: {
            onCancel: test,
               } 
       })
       expect(wrapper.props().onCancel).to.be.equal(test)
       expect(wrapper.props().onCancel(1)).to.be.true
   })
   
   it('"onConfirm"函数正常', () => {
    function test(startTime, endTime){
        return true
    }
    const wrapper = mount(Calendar ,{
           propsData: {
            showShortcut: false,
            onConfirm: test,
               } 
       })
       expect(wrapper.props().onConfirm).to.be.equal(test)
       expect(wrapper.props().onConfirm(1)).to.be.true
   })   

   it('"renderShortcut"函数正常', () => {
    function test(x){
        return true
    }
    const wrapper = mount(Calendar ,{
           propsData: {
            renderShortcut: test,
               } 
       })
       expect(wrapper.props().renderShortcut).to.be.equal(test)
       expect(wrapper.props().renderShortcut(1)).to.be.true
   })

   it('"renderHeader"函数正常', () => {
    function test(x){
        return true
    }
    const wrapper = mount(Calendar ,{
           propsData: {
            renderHeader: test,
               } 
       })
       expect(wrapper.props().renderHeader).to.be.equal(test)
       expect(wrapper.props().renderHeader(1)).to.be.true
   })

   it('"getDateExtra"函数正常', () => {
    function test (date){
        return true
    }
    const wrapper = mount(Calendar ,{
           propsData: {
            getDateExtra: test,
               } 
       })
       expect(wrapper.props().getDateExtra).to.be.equal(test)
       expect(wrapper.props().getDateExtra(1)).to.be.true
   })

   it('"onSelectHasDisableDate"函数正常', () => {
    function test (date){
        return true
    }
    const wrapper = mount(Calendar ,{
           propsData: {
            onSelectHasDisableDate: test,
               } 
       })
       expect(wrapper.props().onSelectHasDisableDate).to.be.equal(test)
   })

   it('"onSelect"函数正常', () => {
    function test (date){
        return true
    }
    const wrapper = mount(Calendar ,{
           propsData: {
            onSelect: test,
               } 
       })
       expect(wrapper.props().onSelect).to.be.equal(test)
   })
  
   it('"defaultValue"函数正常', () => {
    var arr = [1, 2, 3];
    const wrapper = mount(Calendar ,{
           propsData: {
            defaultValue: arr,
               } 
       })
       expect(wrapper.props().defaultValue).to.be.equal(arr)
       expect(wrapper.props().defaultValue).to.be.a('Array') 
    })   

})















