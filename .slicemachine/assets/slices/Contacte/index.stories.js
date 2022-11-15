import MyComponent from '../../../../slices/Contacte';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Contacte'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"link":[{"type":"paragraph","text":"Esse nisi laboris ullamco ullamco magna. Magna cillum sunt amet elit qui irure eu excepteur adipisicing et qui excepteur officia.","spans":[]}],"text":[{"type":"paragraph","text":"Ipsum do cupidatat labore mollit in. Aliqua cupidatat commodo non dolor sit sint ex adipisicing veniam est cupidatat ea esse laborum aliquip. Eu cupidatat sunt minim sit.","spans":[]}]},"slice_type":"contacte","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
