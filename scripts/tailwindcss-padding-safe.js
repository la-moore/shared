module.exports = function () {
  return function({ addUtilities, config }) {
    const variants = config('variants.paddingSafe', config('variants.padding', {}))

    const utils = {
      '.p-safe': {
        'padding-top': 'env(safe-area-inset-top)',
        'padding-right': 'env(safe-area-inset-right)',
        'padding-bottom': 'env(safe-area-inset-bottom)',
        'padding-left': 'env(safe-area-inset-left)'
      },
      '.py-safe': {
        'padding-top': 'env(safe-area-inset-top)',
        'padding-bottom': 'env(safe-area-inset-bottom)'
      },
      '.px-safe': {
        'padding-right': 'env(safe-area-inset-right)',
        'padding-left': 'env(safe-area-inset-left)'
      },
      '.pt-safe': {
        'padding-top': 'env(safe-area-inset-top)'
      },
      '.pr-safe': {
        'padding-right': 'env(safe-area-inset-right)'
      },
      '.pb-safe': {
        'padding-bottom': 'env(safe-area-inset-bottom)'
      },
      '.pl-safe': {
        'padding-left': 'env(safe-area-inset-left)'
      },
    }

    addUtilities(utils, variants)
  }
}
