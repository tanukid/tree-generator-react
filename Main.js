import React from 'react'
import Tree from 'react-d3-tree'

const myTreeData = [
  {
    name: 'Top Level',
    children: [
      {
        name: 'A',
      },
      {
        name: 'B',
        children: [
          {
            name: 'C',
          },
          {
            name: 'D',
            children: [
              {
                name: 'E',
              },
              {
                name: 'E',
              },
            ],
          },
        ],
      },
    ],
  },
]

const Main = () => (
  <div id="treeWrapper" style={{ width: "100vh", height: "100vh" }}>
    <Tree data={myTreeData} />
  </div>
)

export default Main
