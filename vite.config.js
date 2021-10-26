import path from 'path'
import vue from '@vitejs/plugin-vue'

module.exports = {
  build: {
    chunkSizeWarningLimit: 1700
  },
  resolve: {
    alias: {
      '/~': path.resolve(__dirname, 'src'),
      '/-': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    vue()
  ]
}
