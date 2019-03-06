<template>
  <div class="about">
    <h1>This is an about page</h1>
    <md-button type="primary">hello</md-button>
  </div>
</template>
<script>
import {Button} from 'mand-mobile'
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
  components: {
      [Button.name]: Button,
  },
}
</script>
