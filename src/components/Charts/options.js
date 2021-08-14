const tMain = "white";
export default data => {
  const mocData = [
    { value: 40, name: "Heir - 1" },
    { value: 30, name: "Heir - 2" },
    { value: 23, name: "Heir - 3" },
    { value: 17, name: "Heir - 4" }
  ];
  const sortedData = (data || mocData).sort(function(a, b) {
    return a.value - b.value;
  });
  const colors = sortedData.map(d => d.category.color);
  return {
    tooltip: {
      // trigger: 'item',
      formatter: ""
    },

    // visualMap: {
    //   show: false,
    //   min: 0,
    //   max: 50,
    //   inRange: {
    //     colorLightness: [0.2, 0.6]
    //   }
    // },
    series: [
      {
        type: "pie",
        radius: ["51%", "65%"],
        center: ["50%", "50%"],
        color: colors,
        label: {
          overflow: "break",
          ellipsis: "",
          textBorderWidth: 0,
          normal: {
            formatter: "{title|{b}}\n{price|₪{c}}",
            shadowColor: "#999",
            shadowBlur: 3,
            borderRadius: 4,
            rich: {
              container: {
                backgroundColor: "#000",
                padding: 5,
                borderRadius: 5
              },
              title: {
                fontFamily: "arial",
                align: "center",
                color: tMain
              },
              price: {
                overflow: "break",
                ellipsis: "",
                fontSize: 15,
                textBorderWidth: 0,
                fontWeight: "bold",
                align: "center",
                color: tMain
              }
            }
          }
        },
        // labelLine: {
        //   length: 2,
        //   length1: 2,
        //   smooth: 0.3
        // },
        data: sortedData,
        roseType: "radius",
        itemStyle: {
          normal: {
            shadowBlur: 30,
            shadowColor: "rgba(0, 0, 0, 0.2)"
          }
        },

        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function() {
          return Math.random() * 200;
        }
      }
    ]
  };
};
