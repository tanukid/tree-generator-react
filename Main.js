import React, { PureComponent } from 'react'
import Tree from 'react-d3-tree'
import BST from './tree-generators/bst'

const data = [
  {
    name: 'Top Level',
    children: [
      {
        name: 1,
      },
      {
        name: 2,
        children: [
          {
            name: 3,
          },
          {
            name: 4,
            children: [
              {
                name: 5,
              },
              {
                name: 6,
              },
            ],
          },
        ],
      },
    ],
  },
]

const containerStyles = {
  width: '100%',
  height: '100vh',
}

class Main extends React.PureComponent {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2
      }
    })
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          data={data}
          translate={this.state.translate}
          orientation={'vertical'}
        />
      </div>
    );
  }
}

export default Main
