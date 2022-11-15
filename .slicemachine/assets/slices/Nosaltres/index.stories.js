import MyComponent from '../../../../slices/Nosaltres';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Nosaltres'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"nom":[{"type":"paragraph","text":"Laboris occaecat minim sit cupidatat Lorem adipisicing nulla aliqua ad cupidatat sit est ea. Sunt ad ad amet labore laborum sint mollit minim laboris et reprehenderit.","spans":[]}],"carrec":[{"type":"paragraph","text":"Aliquip mollit nostrud nisi dolore pariatur dolore consectetur fugiat ut. Nisi commodo velit minim nulla et. Anim do eiusmod dolor commodo elit ex tempor cillum occaecat.","spans":[]}],"paragraf":[{"type":"paragraph","text":"Aute ut commodo esse Lorem elit officia officia proident ea laborum qui.","spans":[]}]},"slice_type":"nosaltres","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
