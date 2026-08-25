import assert from 'node:assert/strict'
import test from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

test('closed accordion keeps its panel mounted but inaccessible', async () => {
  const server = await createServer({
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
  })

  try {
    const { AccordionItem } = await server.ssrLoadModule('/src/components/AccordionItem.tsx')
    const markup = renderToStaticMarkup(
      createElement(
        AccordionItem,
        { id: 'experience', title: 'Experience', isOpen: false, onToggle: () => {} },
        createElement('a', { href: '#details' }, 'Details'),
      ),
    )

    assert.match(markup, /aria-hidden="true"/)
    assert.match(markup, /inert=""/)
    assert.match(markup, /accordion-panel-inner/)
    assert.doesNotMatch(markup, /hidden=""/)
  } finally {
    await server.close()
  }
})
