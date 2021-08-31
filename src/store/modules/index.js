const modules = {}
const requireModules = require.context('.', true, /index.js/)

requireModules.keys().forEach((fileName) => {
    if (fileName === './index.js') return
    const modelNmae = fileName.replace(/^\.\//, '').replace(/\/index.\w+$/, '')
    modules[modelNmae] = {
        namespaced: true,
        ...requireModules(fileName).default
    }
})

export default modules
