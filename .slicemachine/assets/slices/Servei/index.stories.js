import MyComponent from '../../../../slices/Servei';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Servei'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"servei":[{"type":"paragraph","text":"Voluptate nulla cillum ad duis ullamco Lorem nostrud deserunt eu ipsum esse qui aute fugiat do. Culpa amet velit id. Proident commodo nulla laborum.","spans":[]}]}],"primary":{"titol_servei":[{"type":"paragraph","text":"Culpa commodo dolore qui exercitation et. Aliqua ea adipisicing sunt exercitation occaecat sunt ea dolor fugiat.","spans":[]}],"paragraf_servei":[{"type":"paragraph","text":"Occaecat consequat Lorem laborum in aliqua elit est culpa.","spans":[]}]},"slice_type":"servei","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
