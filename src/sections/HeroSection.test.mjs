import assert from 'node:assert/strict'
import test from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

test('hero social actions render compact icons with accessible names', async () => {
  const server = await createServer({
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
  })

  try {
    const { HeroSection } = await server.ssrLoadModule('/src/sections/HeroSection.tsx')
    const markup = renderToStaticMarkup(createElement(HeroSection))

    assert.match(markup, /class="cta-secondary-actions"/)
    assert.match(markup, /aria-label="LinkedIn"[^>]*>[\s\S]*?<svg/)
    assert.match(markup, /aria-label="GitHub"[^>]*>[\s\S]*?<svg/)
    assert.match(markup, /aria-label="Contato"[^>]*>[\s\S]*?<svg/)
    assert.match(
      markup,
      /href="\/curriculo-dennis-py\.pdf"[^>]*download="Curriculo-Dennis-Py\.pdf"[^>]*>[\s\S]*?<svg/,
    )
    assert.doesNotMatch(markup, /Ver projetos/)
  } finally {
    await server.close()
  }
})
