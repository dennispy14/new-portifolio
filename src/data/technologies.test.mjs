import assert from 'node:assert/strict'
import test from 'node:test'
import * as technologyModule from './technologies.ts'

test('splitTechnologies creates two balanced rows without losing items', () => {
  assert.equal(typeof technologyModule.splitTechnologies, 'function')

  const items = [
    { name: 'A', category: 'tool' },
    { name: 'B', category: 'tool' },
    { name: 'C', category: 'tool' },
    { name: 'D', category: 'tool' },
    { name: 'E', category: 'tool' },
  ]
  const [firstRow, secondRow] = technologyModule.splitTechnologies(items)

  assert.deepEqual(firstRow.map((item) => item.name), ['A', 'C', 'E'])
  assert.deepEqual(secondRow.map((item) => item.name), ['B', 'D'])
  assert.ok(Math.abs(firstRow.length - secondRow.length) <= 1)
})
