import vue from '@vitejs/plugin-vue'

module.exports = {
  build: {
    chunkSizeWarningLimit: 1700
  },
  plugins: [
    vue()
  ]
}
