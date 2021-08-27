import React, {useEffect, useRef} from 'react'
import { Network} from 'vis-network/standalone/esm/vis-network';
var nodes = [
  { id: 0, label: "0" },
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
  { id: 4, label: "4" },
  { id: 5, label: "5" },
  { id: 6, label: "6" },
  { id: 7, label: "7" },
  { id: 8, label: "8" },
  { id: 9, label: "9" },
  { id: 10, label: "10" },
  { id: 11, label: "11" },
  { id: 12, label: "12" },
  { id: 13, label: "13" },
  { id: 14, label: "14" },
  { id: 15, label: "15" },
  { id: 16, label: "16" },
  { id: 17, label: "17" },
  { id: 18, label: "18" },
];
var edges = [
  { from: 0, to: 1 },
  { from: 0, to: 6 },
  { from: 0, to: 13 },
  { from: 0, to: 11 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 2, to: 4 },
  { from: 3, to: 5 },
  { from: 1, to: 10 },
  { from: 1, to: 7 },
  { from: 2, to: 8 },
  { from: 2, to: 9 },
  { from: 3, to: 14 },
  { from: 1, to: 12 },
  { from: 16, to: 15 },
  { from: 15, to: 17 },
  { from: 18, to: 17 },
];
  
  var options = {
    nodes: {
      shape: "dot",
      size: 20,
      font: {
        size: 15,
        color: "#ffffff",
      },
      borderWidth: 2,
    },
    edges: {
      width: 2,
    },
    groups: {
      diamonds: {
        color: { background: "red", border: "white" },
        shape: "diamond",
      },
      dotsWithLabel: {
        label: "I'm a dot!",
        shape: "dot",
        color: "cyan",
      },
      mints: { color: "rgb(0,255,140)" },
      icons: {
        shape: "icon",
        icon: {
          face: "FontAwesome",
          code: "\uf0c0",
          size: 50,
          color: "orange",
        },
      },
      source: {
        color: { border: "white" },
      },
    },
  };

var data = {
      nodes: nodes,
      edges: edges,
  };

function NetworkGraph(props) {

    const network = useRef()
    const dom= useRef()

    useEffect(()=>{
        // create network 
        network.current = new Network(dom.current, data, options)

        // network click event
        network.current.on('click', function (properties){
          const node = network.current.body.nodes[properties['nodes']['0']]
          const edge = network.current.body.edges[properties['edges']['0']]
          // case of node click
          if (node){
            props.handleClickNode(node)
            return
          }
          if (edge){
            props.handleClickEdge(edge)
            return            
          }
        })
    },[])

    return (
        <div ref={dom} style={{height: '1266px',  
        border: '1px solid #444444',
        backgroundColor: '#222222'}}>
            
        </div>
    )
}

export default NetworkGraph
