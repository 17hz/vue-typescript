import Vue from 'vue'
import Component from 'vue-class-component'

import "./base.module.css"
@Component({
  template: require("./base.module.html"),
})
export default class BaseModule extends Vue {
  tableData = [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
  ]
  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  };


  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
}
