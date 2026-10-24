import { describe, expect, it } from 'vitest'
import { loadConfigFromFile } from 'vite'

describe('GitHub Pages build configuration', () => {
  it('uses relative asset paths so project pages can load the built site', async () => {
    const { config } = await loadConfigFromFile({
      configFile: 'vite.config.js',
      command: 'build',
      mode: 'production',
    })

    expect(config.base).toBe('./')
  })
})
