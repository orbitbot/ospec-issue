function MyComponent() {
  return {
      view: function (vnode) {
          return m("div", vnode.attrs.text)
      }
  }
}

module.exports = MyComponent