<template>
  <div class="home">
    <div class="storage-size">{{ displayStorageSize }} | 5 MB</div>
    <!-- <DatePicker/> -->
    <!-- <button @click="resetState" style="position: fixed; top:0; left: 0; margin: 1rem">Reset State</button> -->
    <chart />
    <item-list class="items-list" />
  </div>
</template>

<script>
import ItemList from '@/components/ItemList';
import Chart from '@/components/Charts/Chart.vue';
import DatePicker from '@/components/DatePicker.vue';
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
import AddItemDialog from '../components/Dialogs/AddItemDialog.vue';
import boxSvg from '@/assets/icons/box.svg';
import SvgUse from '../components/common/SvgUse.vue';

export default {
  components: {
    ItemList,
    Chart,
    DatePicker,
    Navbar,
    AddItemDialog,
    SvgUse
  },
  data() {
    return {
      boxSvg
    };
  },
  computed: {
    ...mapGetters(['displayStorageSize'])
  },
  methods: {
    handleCategorySelect(category) {
      this.item.category = category.name;
    },
    resetState() {
      window.localStorage.clear();
      location.reload();
    },
    handleResult(item) {
      item.category = 'כללי';
      item.timestamp = Date.now();
      this.item = item;
      this.active = true;
    },
    handleAdd() {
      this.$store.dispatch('addItem', this.item);
      this.active = false;
    }
  }
};
</script>
<style lang="scss">
.home {
  display: flex;
  flex-flow: column;
  height: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  .storage-size {
    direction: ltr;
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.466);
  }
  .items-list {
    flex: 1;
    padding: 0 1em;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
