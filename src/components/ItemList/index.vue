<template>
  <div class="item-list" v-if="hasItems">
    <RemovePrompt v-model="removePrompt" @yes="removeItem" />
    <div
      class="group"
      v-for="[date, items] in Object.entries(itemsChunksByDay)"
      :key="date"
    >
      <div class="header-date">{{ date | calendarDate }}</div>
      <Item
        v-for="item in items"
        :key="item.id"
        :item="item"
        @swipeRef="addSwipeRef"
        @remove="promptRemoveItem(item)"
        @hide-others-actions="hideOthersActions"
      />
    </div>
  </div>
  <div class="empty-list" v-else>
    <svg-use :src="boxSvg" svgId="box" height="150" stroke-width="0.1" />
    <div>אין עדיין מוצרים</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import boxSvg from '@/assets/icons/box.svg';
import Item from './Item.vue';
import moment from 'moment-with-locales-es6';
import RemovePrompt from './RemovePrompt.vue';
import SvgUse from '../common/SvgUse.vue';
moment.locale('he');
export default {
  components: {
    Item,
    RemovePrompt,
    SvgUse
  },
  data() {
    return {
      boxSvg,
      removePrompt: false,
      itemToRemove: null,
      swipeRefs: []
    };
  },
  computed: {
    ...mapGetters(['items', 'rangeItems']),
    hasItems() {
      return this.items.length;
    },
    itemsSortedByDate() {
      return this.rangeItems.slice().sort((a, b) => b.timestamp - a.timestamp);
    },
    itemsChunksByDay() {
      return this.itemsSortedByDate.reduce((chunks, item) => {
        const date = new Date(item.timestamp).toDateString();
        chunks[date] = chunks[date] || [];
        chunks[date].push(item);
        return chunks;
      }, {});
    }
  },
  methods: {
    addSwipeRef(ref) {
      // this.swipeRefs.push(ref);
    },
    hideOthersActions() {
      // this.swipeRefs.forEach(ref => {
      //   ref?.close();
      // });
    },
    removeItem() {
      this.$store.commit('removeItem', this.itemToRemove.id);
      this.itemToRemove.id = '';
    },
    promptRemoveItem(item) {
      this.itemToRemove = item;
      this.removePrompt = true;
    }
  },
  filters: {
    calendarDate(date) {
      return moment(date).calendar(null, {
        sameDay: '[היום]',
        lastDay: '[אתמול]',
        lastWeek: '[יום] dddd DD/MM/YYYY',
        sameElse: 'DD/MM/YYYY'
      });
    }
  },
  watch: {
    'items.length'(current, prev) {
      if (current > prev) {
        setTimeout(() => {
          this.$el.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.item-list {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  position: relative;
  // overflow-x: hidden;
  // overflow-y: auto;
  overflow: visible;
  border-radius: 15px;
  > *:not(:last-child) {
    margin-bottom: 5px;
  }
  .group {
    display: flex;
    flex-flow: column;
    .header-date {
      position: sticky;
      z-index: 1;
      top: 0;
      margin: 8px;
      margin: 0 auto;
      font-size: 0.9rem;
      align-self: center;
      border-radius: 15px;
      background: #2b2d30;
      padding: 0 12px;
    }
    .items {
      min-width: 100%;
    }
    > *:not(:last-child) {
      margin-bottom: 5px;
    }
  }
}
.empty-list {
  font-weight: bold;
  font-size: 25px;
  text-align: center;
}
</style>
