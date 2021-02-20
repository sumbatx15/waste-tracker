<template>
  <div class="colors">
    <div
      class="color"
      :style="{ background: color }"
      v-for="color in sorted"
      :key="color"
    ></div>
  </div>
</template>

<script>
function colorDistance(color1, color2) {
  // This is actually the square of the distance but
  // this doesn't matter for sorting.
  var result = 0;
  for (var i = 0; i < color1.length; i++)
    result += (color1[i] - color2[i]) * (color1[i] - color2[i]);
  return result;
}

function sortColors(colors) {
  // Calculate distance between each color
  var distances = [];
  for (var i = 0; i < colors.length; i++) {
    distances[i] = [];
    for (var j = 0; j < i; j++)
      distances.push([
        colors[i],
        colors[j],
        colorDistance(colors[i], colors[j]),
      ]);
  }
  distances.sort(function (a, b) {
    return a[2] - b[2];
  });

  // Put each color into separate cluster initially
  var colorToCluster = {};
  for (var i = 0; i < colors.length; i++)
    colorToCluster[colors[i]] = [colors[i]];

  // Merge clusters, starting with lowest distances
  var lastCluster;
  for (var i = 0; i < distances.length; i++) {
    var color1 = distances[i][0];
    var color2 = distances[i][1];
    var cluster1 = colorToCluster[color1];
    var cluster2 = colorToCluster[color2];
    if (!cluster1 || !cluster2 || cluster1 == cluster2) continue;

    // Make sure color1 is at the end of its cluster and
    // color2 at the beginning.
    if (color1 != cluster1[cluster1.length - 1]) cluster1.reverse();
    if (color2 != cluster2[0]) cluster2.reverse();

    // Merge cluster2 into cluster1
    cluster1.push.apply(cluster1, cluster2);
    delete colorToCluster[color1];
    delete colorToCluster[color2];
    colorToCluster[cluster1[0]] = cluster1;
    colorToCluster[cluster1[cluster1.length - 1]] = cluster1;
    lastCluster = cluster1;
  }

  // By now all colors should be in one cluster
  return lastCluster;
}
import colors from 'nice-color-palettes';
import hexSorter from 'hexsorter';
const palette = [...colors[0], ...colors[1], ...colors[2]];
const sorted = hexSorter.sortColors(palette, 'mostSaturatedColor');
const sorted2 = sortColors(palette, 'mostSaturatedColor');
console.log('sorted:', sorted);
console.log('sorted2:', sorted2)
export default {
  data() {
    return {
      sorted,
    };
  },
};
</script>

<style lang="scss" scoped>
.colors {
  display: flex;
  justify-content: center;
}
.color {
  width: 3rem;
  height: 3rem;
}
</style>