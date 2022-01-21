import stringify from 'stringify-object'
import path from 'path'

type ConfigOptions = {
  global: Record<string, unknown>
  e2e: Record<string, unknown>
  component: Record<string, unknown>
}

export async function createConfigString (cfg: Partial<Cypress.ConfigOptions>) {
  return createCypressConfigJs(reduceConfig(cfg), getPluginRelativePath(cfg))
}

function getPluginRelativePath (cfg: Partial<Cypress.ConfigOptions>) {
  const DEFAULT_PLUGIN_PATH = path.normalize('/cypress/plugins/index.js')

  return cfg.pluginsFile ? cfg.pluginsFile : DEFAULT_PLUGIN_PATH
}

function reduceConfig (cfg: Partial<Cypress.ConfigOptions>) {
  const excludedFields = ['pluginsFile', '$schema', 'componentFolder']

  return Object.entries(cfg).reduce((acc, [key, val]) => {
    if (excludedFields.includes(key)) {
      return acc
    }

    if (key === 'e2e' || key === 'component') {
      const value = val as Record<string, unknown>

      return { ...acc, [key]: { ...acc[key], ...value } }
    }

    if (key === 'testFiles') {
      return {
        ...acc,
        e2e: { ...acc.e2e, specPattern: val },
        component: { ...acc.component, specPattern: val },
      }
    }

    if (key === 'baseUrl') {
      return {
        ...acc,
        e2e: { ...acc.e2e, [key]: val },
      }
    }

    return { ...acc, global: { ...acc.global, [key]: val } }
  }, { global: {}, e2e: {}, component: {} })
}

function createCypressConfigJs (config: ConfigOptions, pluginPath: string) {
  const globalString = Object.keys(config.global).length > 0 ? `\n${formatObjectForConfig(config.global, 2)},` : ''
  const componentString = Object.keys(config.component).length > 0 ? createTestingTypeTemplate('component', pluginPath, config.component) : ''
  const e2eString = Object.keys(config.e2e).length > 0 ? createTestingTypeTemplate('e2e', pluginPath, config.e2e) : ''

  return `const { defineConfig } = require('cypress')

module.exports = defineConfig({${globalString}${e2eString}${componentString}
})`
}

function formatObjectForConfig (obj: Record<string, unknown>, spaces: number) {
  return stringify(obj, {
    indent: Array(spaces).fill(' ').join(''),
  }).replace(/^[{]|[}]$/g, '') // remove opening and closing {}
  .trim() // remove trailing spaces
}

function createTestingTypeTemplate (testingType: 'e2e' | 'component', pluginPath: string, options: Record<string, unknown>) {
  return `
  ${testingType}: {
    setupNodeEvents(on, config) {
      return require('${pluginPath}')
    },
    ${formatObjectForConfig(options, 4)}
  },`
}
