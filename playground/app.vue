<template>
  <div id="app">
    <ul id="menu">
      <li data-menuanchor="page1" class="active">
        <a href="#page1">Section 1</a>
      </li>
      <li data-menuanchor="page2">
        <a href="#page2">Section 2</a>
      </li>
      <li data-menuanchor="page3">
        <a href="#page3">Section 3</a>
      </li>
      <li>
        <a
          href="https://twitter.com/imac2"
          target="_blank"
          rel="noopener"
          class="twitter-share"
        >
          <i>
            <svg viewBox="0 0 512 512">
              <path
                d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"
              />
            </svg>
          </i>
        </a>
      </li>
    </ul>
    <ul class="actions">
      <li>
        <a class="actions-button" href="#" rel="noopener" @click="addSection">
          Add section
        </a>
      </li>
      <li>
        <a class="actions-button" href="#" rel="noopener" @click="removeSection">
          Remove section
        </a>
      </li>
      <li>
        <a
          class="actions-button"
          href="#"
          rel="noopener"
          @click="toggleNavigation"
        >
          Toggle nav
        </a>
      </li>
      <li>
        <a
          class="actions-button"
          href="#"
          rel="noopener"
          @click="toggleScrollbar"
        >
          Toggle scrollBar
        </a>
      </li>
    </ul>

    <full-page id="fullpage" ref="fullpage" :options="options">
      <div class="section">
        <h3>Section 1</h3>
      </div>
      <div class="section">
        <div class="slide">
          <h3>Slide 2.1</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.3</h3>
        </div>
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HERE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu',
        navigation: true,
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: [
          '#41b883',
          '#ff5f45',
          '#0798ec',
          '#fec401',
          '#1bcee6',
          '#ee1a59',
          '#2c3e4f',
          '#ba5be9',
          '#b4b8ab'
        ]
      }
    }
  },
  methods: {
    afterLoad () {
      console.log('After load')
    },

    addSection (e) {
      e.preventDefault()
      const newSectionNumber =
        document.querySelectorAll('.fp-section').length + 1

      // creating the section div
      const section = document.createElement('div')
      section.className = 'section'
      section.innerHTML = `<h3>Section ${newSectionNumber}</h3>`

      // adding section
      document.querySelector('#fullpage').appendChild(section)

      // creating the section menu element
      const sectionMenuItem = document.createElement('li')
      sectionMenuItem.setAttribute(
        'data-menuanchor',
        'page' + newSectionNumber
      )
      sectionMenuItem.innerHTML = `<a href='#page${newSectionNumber}'>Section${newSectionNumber}</a>`

      // adding it to the sections menu
      const sectionsMenuItems = document.querySelector('#menu')
      sectionsMenuItems.appendChild(sectionMenuItem)

      // adding anchor for the section
      this.options.anchors.push(`page${newSectionNumber}`)

      // we have to call `update` manually as DOM changes won't fire updates
      // requires the use of the attribute ref='fullpage' on the
      // component element, in this case, <full-page>
      // ideally, use an ID element for that element too
      this.$refs.fullpage.build()
    },

    removeSection () {
      const sections = document
        .querySelector('#fullpage')
        .querySelectorAll('.fp-section')
      const lastSection = sections[sections.length - 1]

      // removing the last section
      lastSection.parentNode.removeChild(lastSection)

      // removing the last anchor
      this.options.anchors.pop()

      // removing the last item on the sections menu
      const sectionsMenuItems = document.querySelectorAll('#menu li')
      const lastItem = sectionsMenuItems[sectionsMenuItems.length - 1]
      lastItem.parentNode.removeChild(lastItem)
    },

    toggleNavigation () {
      this.options.navigation = !this.options.navigation
    },

    toggleScrollbar () {
      console.log('Changing scrollbar...')
      this.options.scrollBar = !this.options.scrollBar
    }
  }
}
</script>

<style>
blockquote,body,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,input,li,ol,p,pre,td,textarea,th,ul{padding:0;margin:0}a{text-decoration:none}table{border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var{font-weight:400;font-style:normal}strong{font-weight:700}ol,ul{list-style:none;margin:0;padding:0}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-weight:400;font-size:100%;margin:0;padding:0}q:after,q:before{content:''}abbr,acronym{border:0}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{font-family:arial,helvetica}.section{position:relative}#section-1{text-align:center}#section-1 h2:before{content:'';display:inline-block;height:200px;width:232px;background-image:url(imgs/vue-fullpage2.png);background-repeat:no-repeat;background-size:cover;vertical-align:bottom}#section-1 h2{color:#fff;font-size:10em;font-weight:900}#section-1 h1{font-size:2em;font-weight:100;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;margin:1.5em auto 1em auto;color:#35495e;padding-right:30px;padding-left:30px}#section-1 li{display:inline-block;margin:1.25em .3em}.section-1-button{padding:.93em 1.87em;background:#35495e;border-radius:5px;display:block;color:#fff}h3{font-size:5em;text-align:center;color:#fff;font-weight:700}#logo{position:fixed;top:20px;left:20px;color:#fff;font-weight:700;z-index:99;font-size:1.9em;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased}#menu-line{position:absolute;bottom:-4px;left:0;width:159px;height:2px;background:#fff}#menu{position:fixed;top:20px;right:20px;z-index:70;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;letter-spacing:1px;font-size:1.1em}#menu li{display:inline-block;margin:10px 0;position:relative}#menu a{color:#fff;padding:0 1.1em 1.1em 1.1em}#menu li.active a:after{content:'';margin:0 1.1em 0 1.1em;height:2px;background:#fff;display:block;position:absolute;bottom:-6px;left:0;right:0;display:block}.actions{position:fixed;bottom:2%;margin:0 auto;z-index:99;left:0;right:0;text-align:center}.actions li{display:inline-block;margin:.3em .3em}.actions-button{padding:.73em 1.47em;background:rgba(53,73,94,.47);border-radius:5px;display:block;color:#fff}.twitter-share i{vertical-align:middle;position:relative;top:2px;display:inline-block;width:38px;height:14px;color:#fff;top:-4px;left:-2px;fill:#fff}.twitter-share svg{height:40px;margin-top:-10px}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
