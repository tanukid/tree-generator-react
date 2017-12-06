import React, {PureComponent} from 'react'
import Tree from 'react-d3-tree'
import BST from './tree-generators/bst'

const data = [
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
