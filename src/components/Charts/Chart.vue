<template>
  <div v-if="hasItems" class="chart-container" :style="styleSize">
    <div class="chart-content">
      <span class="small">סה"כ הוצאות</span>
      <animated-number
        class="spend"
        :value="totalSpend"
        :formatValue="formatTotalSpend"
        :duration="500"
        round
        :easing="'easeInOutCubic'"
      />
      <span class="spend"></span>
    </div>
    <div ref="chart" class="pie-chart" :style="styleSize" />
  </div>
</template>

<script>
import * as echarts from "echarts";
import AnimatedNumber from "animated-number-vue";
import generateOptions from "./options";
import { mapGetters } from "vuex";
export default {
  props: {
    width: {
      type: Number,
      default: 320,
    },
    height: {
      type: Number,
      default: 320,
    },
  },
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    ...mapGetters(["rangeItems", "categories"]),
    hasItems() {
      return this.rangeItems.length;
    },
    totalSpend() {
      return this.rangeItems.reduce((acc, item) => {
        return acc + item.cost;
      }, 0);
    },

    totalsByCategory() {
      return this.rangeItems.reduce((acc, item) => {
        const index = acc.findIndex((c) => c.category.id == item.categoryId);
        if (index > -1) {
          acc[index].value += item.cost;
        } else {
          const category = this.categories.find((c) => c.id == item.categoryId);
          acc.push({
            category,
            value: item.cost,
          });
        }
        return acc;
      }, []);
    },
    styleSize() {
      return {
        minHeight: this.height + "px",
        minWidth: "100%", //this.width + 'px',
        // height: this.height + 'px',
        // width: this.width + 'px'
      };
    },
  },
  mounted() {
    this.initChart();
    window.addEventListener("resize", this.initChart);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.initChart);

    if (!this.chart) return;
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    handleEasing(...args) {
      console.log("args:", args);
    },
    formatTotalSpend(value) {
      return `₪${value.toFixed(0)}`;
    },
    setOptions() {
      const options = generateOptions(this.totalsByCategory);
      this.chart.setOption(options);
    },
    initChart() {
      this.chart = echarts.init(this.$refs.chart);
      this.setOptions();
    },
  },

  watch: {
    totalsByCategory: {
      deep: true,
      handler() {
        this.setOptions();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-container {
  position: relative;
  > .chart-content {
    border-radius: 250px;
    width: 194px;
    height: 194px;
    color: white;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    .spend {
      font-weight: bold;
      font-size: 1.7em;
      line-height: 0.9em;
    }
  }
  > .pie-chart {
    // position: absolute;
    // top: 0;
    // left: 0;
  }
}
</style>
