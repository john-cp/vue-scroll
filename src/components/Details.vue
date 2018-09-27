<template>
  <div class='details'>
    <div class='types'>
      <ul>
        <li v-for='(item,index) in details' :key='index' :class='{activeType:selectType==index}' @click='typeClick(index)'>{{item.name}}</li>
      </ul>
    </div>
    <div class='dishs' @scroll='domScroll' ref='dishs'>
      <ul v-for='(item,index) in details' :key='index' ref='dish'>
        <li ref='top'>{{item.type}}</li>
        <li>
          <ul class='dish'>            
            <li v-for='(dish,index) in item.details' :key='index'>{{ dish }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      details: [
          {name: '套餐分类一', type: '任选种类x3', details: ['雪花','勇闯','XO','燕京','XO']},
          {name: '套餐分类二', type: '任选数量x5', details: ['XO','燕京','雪花','勇闯','XO','燕京','XO','燕京','XO']},
          {name: '套餐分类三', type: '任选种类x2', details: ['果盘','小吃','燕京','雪花','勇闯']},
          {name: '套餐分类四', type: '任选数量x5', details: ['洋酒','饮料','燕京','雪花','XO']},
          {name: '套餐分类五', type: '固定选项', details: ['雪花','勇闯','燕京','雪花','勇闯','勇闯','XO']}
        ],
      selectType: 0,
      top: 0,// 距离顶部初始值
      scrollLock: true// 点击左侧菜单时domScroll滚动事件不执行
    }
  },
  mounted () {
    this.top = this.$refs.top[0].getBoundingClientRect().top
  },
  methods: {
    typeClick (index) {
      let height = this.$refs.dish[index].getBoundingClientRect().top
      // console.log(this.$refs.dish[index].getBoundingClientRect())
      this.selectType = index
      let distance = height - this.top
      this.scroll(distance)
    },
    domScroll (e) {
      if (!this.scrollLock) return
      for (var i in this.details) {
        let client = this.$refs.dish[i].getBoundingClientRect()
        let scroll = this.$refs.dishs.scrollTop
        if (client.top < 0 && (scroll - client.top - this.top > client.height / 2)) {
          this.selectType = i
        } 
      }      
    },
    scroll (height) {
      let scroll = this.$refs.dishs.scrollTop
      let step = height / 30
      let self = this
      let n = 0
      myScroll()
      function myScroll () {
        setTimeout(() => {
          scroll += step
          n++// step可能为负数，用n记录是否滚动到目标距离
          if (n <= 30) {
            self.$refs.dishs.scrollTop = scroll
            myScroll()
            self.scrollLock = false
          } else {
            self.scrollLock = true
          }             
        }, 10) 
      }          
    }
  }
}
</script>

<style scoped>
  .details {
    display: flex;
    overflow: hidden;
    margin: 0;
    padding-left: 100px;
  }
  ul li {
    list-style: none;
  }
  .types ul li {
    width: 200px;
    height: 50px;
    margin: 5px;
    border: 1px solid;
    border-radius: 5px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
  }
  .types ul li:hover {
    background: #f7f303ee;
    color: white;
  }
  .types ul li.activeType {
    background: #f7f303ee;
    color: white;
  }
  .dishs {
    width: calc(100% - 400px);
    height: 700px;
    margin-left: 30px;
    overflow: auto;
    border: 1px solid;
    padding-left: 50px;
  }
  .dishs>ul {
    margin: 10px;
    
  }
  ul.dish {
    width: 350px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    
  }
  .dishs ul.dish li {
    width: 150px;
    height: 100px;
    margin: 5px;
    border: 1px solid;
    border-radius: 5px;
    font-size: 18px;
    text-align: center;
    line-height: 100px;
  }
</style>
