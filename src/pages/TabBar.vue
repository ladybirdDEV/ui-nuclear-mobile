<script>
import { TabBar, TabBarItem } from '@/components/TabBar'
export default {
  components: {
    TabBar,
    TabBarItem
  },
  data () {
    return {
      hidden: false,
      fullScreen: false
    }
  },
  render (h) {
    return (
      <div style={ this.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0, backgroundColor: 'white' } : { height: 400 + 'px', backgroundColor: 'white' }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.hidden}
        >
          <TabBarItem
            title="Life"
            key="Life"
            icon="https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg"
            selectedIcon="https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg"
            badge={1}
            >
            {this.renderContent('Life')}
          </TabBarItem>
          <TabBarItem
            title="Koubei"
            key="Koubei"
            icon="https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg"
            selectedIcon="https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg"
            badge="new"
            >
            {this.renderContent('Koubei')}
          </TabBarItem>
          <TabBarItem
            title="Friend"
            key="Friend"
            icon="https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg"
            selectedIcon="https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg"
            dot
            >
            {this.renderContent('Friend')}
          </TabBarItem>
          <TabBarItem
            title="My"
            key="My"
            icon="https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
            selectedIcon="https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
            >
            {this.renderContent('My')}
          </TabBarItem>
      </TabBar>
    </div>
    )
  },
  methods: {
    renderContent (pageText) {
      return (
        <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
          <div style={{ paddingTop: 60 + 'px' }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
          <a style={{ display: 'block', marginTop: 40 + 'px', marginBottom: 20 + 'px', color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault()
            this.hidden = !this.hidden
          }}
          >
            Click to show/hide tab-bar
          </a>
          <a style={{ display: 'block', marginBottom: 600 + 'px', color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault()
            this.fullScreen = !this.fullScreen
          }}
          >
            Click to switch fullscreen
          </a>
        </div>
      )
    }
  }
}
</script>

