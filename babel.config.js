module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    [
      "import",
      {
        "libraryName": "vxe-table",
        "style": true // 是否按需加载样式
      }
    ]
  ]
}
