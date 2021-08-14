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
import ItemList from "@/components/ItemList";
import Chart from "@/components/Charts/Chart.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ItemList,
    Chart
  },
  data() {
    return {
      name: "",
      date: new Date()
    };
  },
  computed: {
    ...mapGetters(["displayStorageSize"])
  },
  methods: {
    resetState() {
      window.localStorage.clear();
      location.reload();
    }
  }
};
</script>
<style lang="scss">
.home {
  display: flex;
  flex-flow: column;
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
