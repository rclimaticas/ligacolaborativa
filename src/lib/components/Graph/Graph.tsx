/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import ForceGraph3D from '3d-force-graph';
import type React from 'react';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface GraphNode {
  id: string;
  name: string;
  tipo: string;
  local: string;
}

interface GraphLink {
  source: string;
  target: string;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

const generateRandomGraph = (numNodes: number): GraphData => {
  const nodes: GraphNode[] = [];
  const links: GraphLink[] = [];

  for (let i = 0; i < numNodes; i++) {
    nodes.push({
      id: `${i}`,
      name: `Ocorrência ${i + 1}`,
      tipo: ['Acidente', 'Roubo', 'Incêndio'][Math.floor(Math.random() * 3)],
      local: `Rua ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
    });
  }

  for (let i = 0; i < numNodes - 1; i++) {
    links.push({ source: `${i}`, target: `${i + 1}` });
  }

  for (let i = 0; i < numNodes * 2; i++) {
    const source = Math.floor(Math.random() * numNodes);
    const target = Math.floor(Math.random() * numNodes);
    if (
      source !== target &&
      !links.some(
        (link) => link.source === `${source}` && link.target === `${target}`
      )
    ) {
      links.push({ source: `${source}`, target: `${target}` });
    }
  }

  return { nodes, links };
};

const NetworkGraph: React.FC = () => {
  const graphRef = useRef<HTMLDivElement>(null);
  const [graphData] = useState<GraphData>(generateRandomGraph(10));

  useEffect(() => {
    if (typeof window !== 'undefined' && graphRef.current) {
      const Graph = new ForceGraph3D(graphRef.current)
        .graphData(graphData)
        .nodeLabel(
          (node: GraphNode) =>
            `Tipo: ${node.tipo}\nLocal: ${node.local}\nNome: ${node.name}`
        )
        .linkWidth(2)
        .nodeAutoColorBy('tipo')
        .nodeThreeObject((node: GraphNode) => {
          return new THREE.Mesh(
            new THREE.SphereGeometry(5),
            new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff })
          );
        })
        .linkDirectionalArrowLength(0);

      Graph(graphRef.current).graphData(graphData);
      Graph.cameraPosition({ x: 0, y: 0, z: 170 });

      const resizeGraph = () => {
        const width = graphRef.current?.offsetWidth || 0;
        const height = graphRef.current?.offsetHeight || 0;
        Graph.width(width).height(height);
      };

      window.addEventListener('resize', resizeGraph);
      resizeGraph();

      return () => {
        window.removeEventListener('resize', resizeGraph);
      };
    }
  }, [graphData]);

  return (
    <div
      ref={graphRef}
      style={{
        width: '80%',
        height: '500px',
        margin: '0 auto',
      }}
    />
  );
};

export default NetworkGraph;
