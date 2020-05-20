// test.js

// test utils から mount() メソッドをインポート
// テストするコンポーネント
import { mount } from '@vue/test-utils'
import Counter from ''

// コンポーネントがマウントされ、ラッパが作成されます。
const wrapper = mount(Counter)

// wrapper.vmを 介して実際の Vue インスタンスにアクセスできます
const vm = wrapper.app_20200519

// ラッパをより深く調べるためにコンソールに記録してみましょう。
// vue-test-utils でのあなたの冒険はここから始まります。
console.log(wrapper)