<template>
  <div class="home">
  <div class="storage-size">
      {{displayStorageSize}} | 5 MB
    </div>
    <DatePicker/>
    <!-- <button @click="resetState" style="position: fixed; top:0; left: 0; margin: 1rem">Reset State</button> -->
    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">הוסף מוצר</b></h4>
      </template>
      <div class="input-text">{{item.str}}</div>
      <div class="inputs"> 
        <vs-input v-model="item.name"  />
        <vs-input type="number" v-model="item.amount" />
        <vs-input type="number" v-model="item.cost" />
        <vs-input type="date" v-model="itemDate" />
        <vs-input v-model="item.category" />
        <Categories @select="handleCategorySelect"/>
      </div>
      <template #footer>
        <vs-button dark block @click="handleAdd">
          אישור
        </vs-button>
      </template>
    </vs-dialog>
    <ChartVue/>
    <ItemList style="flex:1" />
    <!-- <div class="analyze">
      <Analyze @result="handleResult" class="" />
    </div> -->
    <NavbarVue/>
  </div>
</template>

<script>
// @ is an alias to /src

import Analyze from '@/components/Recorder/Analyze.vue';
import ItemList from '@/components/ItemList';
import Categories from '@/components/Chips/Categories.vue';
import ChartVue from '@/components/Charts/Chart.vue';
import { mapGetters } from 'vuex';
import DatePicker from '@/components/DatePicker.vue';
import NavbarVue from '../components/Navbar.vue';
export default {
  components: {
    Analyze,
    ItemList,
    Categories,
    ChartVue,
    DatePicker,
    NavbarVue,
  },
  data() {
    return {
      active: true,
      item: {},
    };
  },
  mounted() {
    // this.$el.style.maxHeight = `${window.innerHeight}px`;
  },
  computed: {
    ...mapGetters(['displayStorageSize']),
    itemDate: {
      get() {
        if (!this.item.timestamp) return;
        return new Date(this.item.timestamp).toISOString().split('T')[0];
      },
      set(value) {
        this.item.timestamp = new Date(value).getTime();
      },
    },
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
    },
  },
};
</script>
<style lang="scss" >
.home {
  display: flex;
  flex-flow: column;
  height: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  .analyze {
    flex: 0 0 96px;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .storage-size {
    direction: ltr;
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.466);
  }
  & > :last-child {
  }
  .input-text {
    text-align: center;
    margin-bottom: 10px;
  }
  .inputs {
    > * {
      > .vs-input-content > input {
        width: 100%;
      }
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>
