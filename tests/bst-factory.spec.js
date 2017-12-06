import bst from '../tree-generators/bst-factory'

// const bst = new BST(100).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)
//   .insert(1).insert(1).insert(3).insert(1).insert(1).insert(502).insert(55000)
//   .insert(204).insert(205).insert(207).insert(206).insert(208).insert(203)
//   .insert(-51).insert(-403).insert(1001).insert(57).insert(60).insert(4500)

test('creates an empty node when invoked', () => {
  expect(bst('A')).toEqual({ name: 'A', children: [] })
})
