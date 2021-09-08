import React, {useEffect, useRef, useState} from 'react'
import { Network} from 'vis-network/standalone/esm/vis-network';

var changeChosenLabelColor = function (values, id, selected, hovering) {
  values.color = "#FFFFFF"
  values.size += 1
  values.face = "serif"
  values.mod = "bold italic"
  values.strokeWidth = 5
  values.strokeColor = "#000000"
};

const options = {
  autoResize:true,
  height: '100%',
  width: '100%',
  clickToUse:false,
  
layout: {
    // this would make the tree directed
    hierarchical: {
        enabled:true,
        levelSeparation: 75,
        nodeSpacing:100,
        direction:'UD',
        edgeMinimization: false,
        parentCentralization: false,
        sortMethod:"directed",
        shakeTowards:"leaves",
        blockShifting:true
    },
    randomSeed:2,
    improvedLayout:true,
    clusterThreshold:100
  },
  interaction: {
    tooltipDelay:10,
    selectConnectedEdges:true,
    hoverConnectedEdges:true,
    hover:true,
    hideEdgesOnDrag:true,
    hideNodesOnDrag:false,
    dragView:true,
    dragNodes :true,
    navigationButtons: true,
    keyboard: {
      enabled: false,
      speed: {x: 10, y: 10, zoom: 0.02},
      bindToWindow: true
    },
    zoomSpeed: 1,
    zoomView:true
  },
    nodes: {
      size:18,
      borderWidth:2,
      borderWidthSelected:3,
      chosen:{
        label:changeChosenLabelColor,
      },
        //image, circularImage, diamond, dot, star, triangle, triangleDown, hexagon, square and icon.
      shape: "hexagon",
      scaling: {
          label: {
            min: 8,
            max: 20,
            
          },
      },

    },
    edges:{
      smooth:true,
      arrows:{
        to:true
      }
    },
   
    physics: {
    
      hierarchicalRepulsion: {
        centralGravity: 0,
        avoidOverlap: 0.5,
      },
      solver: "hierarchicalRepulsion",
      adaptiveTimestep:true,
      enabled: true
    },
}


function NetworkGraph(props) {

    // useRef
    const network = useRef()
    const dom= useRef()

    // useState
    const [nodes, setNodes] = useState([])
    const [edges, setEdges] = useState([])

    // useEffect

    // setInitialDataNetwork
    useEffect(()=>{

      if(props.dataNetwork!=null){
        props.dataNetwork.nodes.forEach(element => {
          element.label=element.name
        }) 
        setNodes(props.dataNetwork.nodes)
        setEdges(props.dataNetwork.edges)
      }
    },[props.dataNetwork])

    // create the initial network    
    useEffect(()=>{
        // create network 
        network.current = new Network(dom.current, {nodes,edges}, options)

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
    },[nodes, edges])

    // filter network 
    useEffect(()=>{
      if(props.dataNetwork!=null){
        // filter by factor entropy value
        const nodesFilterFactorEntropy = props.dataNetwork.nodes.filter(node=>node.entropy>props.factorEntropyValue)
        // filter by relation entropy value
        const edgesFilterFactorEntropy = props.dataNetwork.edges.filter(edge=>edge.entropy>props.relationEntropyValue)   
        // filter by categories
        const resultNodesByCategories = nodesFilterFactorEntropy.filter(node=>props.chosenCategories.includes(node.category))
        // update nodes and edges 
        setNodes(resultNodesByCategories)
        setEdges(edgesFilterFactorEntropy)
      } 
    },[props.factorEntropyValue, props.relationEntropyValue, props.chosenCategories])

    useEffect(()=>{
     if(props.zoomIn != null){ 
      network.current.moveTo({
          position: {x: 0, y: 0},
          offset: {x: 1, y: 0},
          scale: network.current.getScale()*1.02,
      })
    } 
    },[props.zoomIn])

    useEffect(()=>{
     if(props.zoomOut != null){ 
      network.current.moveTo({
          position: {x: 0, y: 0},
          offset: {x: 1, y: 0},
          scale: network.current.getScale()*0.98,
      })
    }
    },[props.zoomOut])

    return (
        <div ref={dom} style={{height: '1266px',  
        border: '1px solid #444444',
        backgroundColor: '#FFFFFF'}}>      
        </div>
    )
}

export default React.memo(NetworkGraph)
