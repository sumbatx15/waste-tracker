<template>
  <SwipeOut ref="swipe" :threshold="10" @update:revealed="handleReveal">
    <div class="item" :style="style" @click="handleClick">
      <div class="name">
        <CategoryIcon routeOnClick :category="category" />
        <div>
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div class="end">
        <div class="cost">{{ item.cost.toLocaleString() }}₪</div>
        <div class="time">{{ item.timestamp | fromNow }}</div>
      </div>
    </div>
    <template v-slot:right>
      <div class="option edit">
        <i class="fa fa-pen"></i>
      </div>
    </template>
    <template v-slot:left>
      <div class="option delete" title="remove" @click="remove">
        <i class="fa fa-trash"></i>
      </div>
    </template>
  </SwipeOut>
</template>

<script>
import { SwipeOut } from "vue-swipe-actions";
import "vue-swipe-actions/dist/vue-swipe-actions.css";
import moment from "moment-with-locales-es6";
import { mapGetters } from "vuex";
import CategoryIcon from "../common/CategoryIcon.vue";

export default {
  name: "Item",
  props: {
    item: Object,
  },
  components: { SwipeOut, CategoryIcon },
  data() {
    return {
      isRevealed: false,
    };
  },
  computed: {
    ...mapGetters(["categories"]),
    category() {
      return this.categories.find((c) => c.id == this.item.categoryId);
    },
    style() {
      return {
        borderRadius: this.isRevealed ? "0px" : "",
      };
    },
  },
  mounted() {
    this.$emit("swipeRef", this.$refs.swipe);
  },
  methods: {
    remove() {
      this.$confirm().then(() =>
        this.$store.commit("removeItem", this.item.id)
      );
    },
    handleClick() {
      if (this.isRevealed) this.$refs.swipe.close();
    },
    handleReveal(dir) {
      this.isRevealed = !!dir;
      this.isRevealed && this.$emit("hide-others-actions", this.$refs.swipe);
    },
  },
  filters: {
    fromNow(date) {
      return moment(date).fromNow();
    },
  },
};
</script>

<style lang="scss">
.item {
  display: flex;
  align-items: flex-end;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  transition: border-radius 100ms;
  // background: #1d1e20; //rgba(255, 255, 255, 0.02);
  > :first-child {
    flex: 1;
  }
  .end {
    display: flex;
    flex-flow: column;
    text-align: end;
  }

  .time {
    font-size: 0.7em;
    color: rgba(255, 255, 255, 0.363);
  }
  .cost {
    line-height: 1.1;
    font-size: 1.2rem;
  }
}
.option {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  padding: 0 1.5rem;
  &.delete {
    background: rgb(246, 23, 98);
    border-radius: 15px 0 0 15px;
  }
  &.edit {
    background: #28292c;
    border-radius: 0 15px 15px 0;
  }
}
</style>
