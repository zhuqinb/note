<template>
  <el-row>
    <div :class="['error']" :style="{display: ['-webkit-box', '-ms-flexbox', 'flex']}">这是一个消息,看我颜色就知道重不重要</div>
    <el-button>默认按钮</el-button>
    <el-button type="primary" @click="isQQ = !isQQ">切换QQ和微信</el-button>
    <el-button @click="addTag" type="success">add tag</el-button>
    <el-button @click="updateTagLength" type="info">update tag length</el-button>
    <el-button @click="removeTag" type="warning">remove tag</el-button>
    <el-button @click="updateTag" type="danger">updateTag</el-button>

    <!-- <el-tag type="danger" v-for="(item, index) of tagList" :key="index">{{item}}</el-tag> -->
    <el-tag type="info" v-for="(item, key, index) of tagObj" :key="index">{{item }}</el-tag>

    <ul @click="testClick(1)">
      <li is="todoItem" v-for="(item,index) of tagList" :key="index"></li>
    </ul>

    <input placeholder="测试" type="checkbox" v-model.lazy="wechat" true-value="yes" false-value="no" @keyup.enter="submit"  />
    {{wechat}}
  </el-row>
</template>

<script>

import MapBase from '@/utils/MapBase'
import todoItem, { year } from './todo-item'
export default {
  name: 'app',
  data () {
    let tagObj = {}
    new Array(10).fill(1).forEach((v, i) => {
      tagObj[`name${i + 1}`] = `标签${i + 1}`
    })
    return {
      msg: 'hello world!',
      map: null,
      qq: '',
      wechat: '',
      isQQ: true,
      tagList: new Array(10).fill(1).map((v, i) => `标签${i + 1}`),
      tagObj
    }
  },
  provide: function () {
    return {
      map: this.map
    }
  },
  components: {
    todoItem
  },
  mounted () {
    console.log(year)
  },

  methods: {
    addTag () {
      this.tagObj['name20'] = '标签20'
    },
    updateTagLength () {
      this.tagObj = Object.assign({}, this.tagObj)
    },
    removeTag () {
      this.tagObj['name1'] = undefined
    },
    updateTag () {
      this.tagObj.name1 = '调遣'
    },
    testClick (val) {
      console.log(val)
    },
    submit () {
      console.log('124')
    }
  },

  computed: {
    msgChange: {
      get () {
        this.msgChange = 21
        return this.msg + Math.random()
      },

      set (newValue) {
        this.msg = newValue + 'set'
      }
    }
  },

  beforeUpdate () {
    console.group('beforeUpdate')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.msg)
    console.groupEnd()
  },

  updated () {
    console.group('updated')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.msg)
    console.groupEnd()
  },

}

</script>

<style scoped lang="scss">
.error {
  color: red;
}
.info {
  color: blue;
}
</style>