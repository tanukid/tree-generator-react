import React from 'react'
import Tree from 'react-d3-tree'

const myTreeData = [
  {
    name: 'Top Level',
    children: [
      {
        name: 'Level 2: A',
      },
      {
        name: 'Level 2: B',
        children: [
          {
            name: 'Level 2: A',
          },
          {
            name: 'Level 2: B',
            children: [
              {
                name: 'Level 2: A',
              },
              {
                name: 'Level 2: B',
              },
            ],
          },
        ],
      },
    ],
  },
]

const Main = () => (
  <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
    <Tree data={myTreeData} />
  </div>
)

export default Main
