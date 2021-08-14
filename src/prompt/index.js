import Vue from "vue";
import Prompt from "@/components/Dialogs/Prompt";
export function confirm({ title, message, component, props }) {
  console.log("props:", props);
  return new Promise((resolve, reject) => {
    const dialog = new Vue({
      methods: {
        closeHandler(fn, arg) {
          return function() {
            fn(arg);
            dialog.$destroy();
            dialog.$el.remove();
          };
        }
      },
      render(h) {
        return h(component, {
          props: {
            title,
            message,
            ...props
          },
          on: {
            confirm: this.closeHandler(resolve),
            cancel: this.closeHandler(reject, new Error("canceled"))
          }
        });
      }
    }).$mount();
    document.body.appendChild(dialog.$el);
  });
}

export const custom_confirm = (window.custom_confirm = args => {
  return confirm({ ...args, component: Prompt });
});
export default {
  install: function(Vue, options) {
    Vue.prototype.$confirm = custom_confirm;
  }
};
