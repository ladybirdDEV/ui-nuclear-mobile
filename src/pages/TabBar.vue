<script>
import TabBar from '@/components/tab-bar'
import TabBarItem from '@/components/tab-bar-item'
export default {
  components: {
    TabBar,
    TabBarItem
  },
  data () {
    return {
      hidden: false,
      fullScreen: false,
      selectedTab: 'redTab'
    }
  },
  render (h) {
    return (
      <div
        style={
          this.fullScreen
            ? {
              position: 'fixed',
              height: '100%',
              width: '100%',
              top: 0,
              backgroundColor: 'white'
            }
            : { height: 400 + 'px', backgroundColor: 'white' }
        }
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.hidden}
        >
          <TabBarItem
            title="Life"
            key="Life"
            selected={this.selectedTab === 'blueTab'}
            badge={1}
            press={() => {
              this.selectedTab = 'blueTab'
            }}
          >
            <div
              slot="icon"
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
              }}
            />
            <div
              slot="selectedIcon"
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
              }}
            />
            {this.renderContent('Life')}
          </TabBarItem>
          <TabBarItem
            title="Koubei"
            key="Koubei"
            badge="new"
            selected={this.selectedTab === 'redTab'}
            press={() => {
              this.selectedTab = 'redTab'
            }}
          >
            <div
              slot="icon"
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
              }}
            />
            <div
              slot="selectedIcon"
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              }}
            />
            {this.renderContent('Koubei')}
          </TabBarItem>
          <TabBarItem
            title="Friend"
            key="Friend"
            dot
            selected={this.selectedTab === 'greenTab'}
            press={() => {
              this.selectedTab = 'greenTab'
            }}
          >
            <div
              slot="icon"
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
              }}
            />
            <div
              slot="selectedIcon"
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
              }}
            />
            {this.renderContent('Friend')}
          </TabBarItem>
          <TabBarItem
            title="My"
            key="My"
            selected={this.selectedTab === 'yellowTab'}
            press={() => {
              this.selectedTab = 'yellowTab'
            }}
          >
            <div
              slot="icon"
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  21px 21px no-repeat'
              }}
            />
            <div
              slot="selectedIcon"
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg) center center /  21px 21px no-repeat'
              }}
            />
            {this.renderContent('My')}
          </TabBarItem>
        </TabBar>
      </div>
    )
  },
  methods: {
    renderContent (pageText) {
      return (
        <div
          style={{
            backgroundColor: 'white',
            height: '100%',
            textAlign: 'center'
          }}
        >
          <div style={{ paddingTop: 60 + 'px' }}>
            Clicked “{pageText}” tab， show “{pageText}” information
          </div>
          <a
            style={{
              display: 'block',
              marginTop: 40 + 'px',
              marginBottom: 20 + 'px',
              color: '#108ee9'
            }}
            onClick={e => {
              e.preventDefault()
              this.hidden = !this.hidden
            }}
          >
            Click to show/hide tab-bar
          </a>
          <a
            style={{
              display: 'block',
              marginBottom: 600 + 'px',
              color: '#108ee9'
            }}
            onClick={e => {
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

