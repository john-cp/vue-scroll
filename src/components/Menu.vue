<template>
  <div id='app'>
    <div class='dishs'>菜单</div>
    <ul>
      <li v-for='(item,index) in dishs' :key='index' @click='dishClick(item)'>{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      dishs: [
        {name: '勇闯', id: 0}, {name: '乌苏', id: 1}, {name: 'XO', id: 2}, {name: '雪花', id: 3}, 
        {name: '套餐', id: 4, details: [{name: '套餐分类一', details: ['雪花', '勇闯']}, 
      {name: '套餐分类二', details: ['雪花', '勇闯']}, {name: '套餐分类三', details: ['雪花', '勇闯']}, 
      {name: '套餐分类四', details: ['雪花', '勇闯']}, {name: '套餐分类五', details: ['雪花', '勇闯']}
        ]
      }]
    }
  },
  methods: {
    dishClick (dishs) {
      if (dishs.details && (dishs.details.length > 0)) {
        this.$router.push({
            path: '/Details'
        })
      }
    }
  }
}
</script>

<style scoped>
    ul{
        display: flex;
        width: 50%;
        justify-content: space-around;
    }
    ul li{
        list-style: none;
        width: calc((100%-20px)/5);
        height: 50px;
        margin: 5px;
        line-height: 50px;
        text-align: center;
        border: 1px solid;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
