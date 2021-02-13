<template>
  <div>
    <fa icon="user"></fa>
    <VSwatches
      v-model="color"
      row-length="5"
      shapes="circles"
      :swatches="colors"
    />
    <fa v-for="cat in categories" :icon="[cat.icon.prefix, cat.icon.name]"></fa>
  </div>
</template>

<script>
import VueAwesomeIconPicker from '@rightbraintechbd/vue-awesome-icon-picker';
import VueIconPicker from 'vue-icon-picker';
import palettes from 'nice-color-palettes';
import VSwatches from 'vue-swatches';
import 'vue-swatches/dist/vue-swatches.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { mapGetters } from 'vuex';
console.log('fas:', fas);

export default {
  components: {
    VueAwesomeIconPicker,
    VSwatches,
    VueIconPicker
  },
  data() {
    return {
      fas,
      icon: {},
      color: '#1CA085'
    };
  },
  computed: {
    ...mapGetters(['categories']),
    colors() {
      return palettes.slice(0, 7); //[palettes[0], palettes[1], palettes[2]];
    }
  },
  methods: {
    onIconSelected(icon) {
      console.log('icon:', icon);
      // your code here
    }
  }
};
</script>

<style lang="scss" scoped></style>
