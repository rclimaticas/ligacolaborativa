/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
// /* eslint-disable no-plusplus */
// // export default function GraphComponent() {
// //   return <div> hello world </div>;
// // }

// // /* eslint-disable consistent-return */
// // /* eslint-disable @typescript-eslint/no-unused-vars */
// // /* eslint-disable no-plusplus */
// // /* eslint-disable import/no-extraneous-dependencies */

// 'use client';

// import ForceGraph3D from '3d-force-graph';
// import type React from 'react';
// import { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';

// interface GraphNode {
//   id: string;
//   name: string;
//   tipo: string;
//   local: string;
// }

// interface GraphLink {
//   source: string;
//   target: string;
// }

// interface GraphData {
//   nodes: GraphNode[];
//   links: GraphLink[];
// }

// const generateRandomGraph = (numNodes: number): GraphData => {
//   const nodes: GraphNode[] = [];
//   const links: GraphLink[] = [];

//   for (let i = 0; i < numNodes; i++) {
//     nodes.push({
//       id: `${i}`,
//       name: `Ocorrência ${i + 1}`,
//       tipo: ['Acidente', 'Roubo', 'Incêndio'][Math.floor(Math.random() * 3)],
//       local: `Rua ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
//     });
//   }

//   for (let i = 0; i < numNodes - 1; i++) {
//     links.push({ source: `${i}`, target: `${i + 1}` });
//   }

//   for (let i = 0; i < numNodes * 2; i++) {
//     const source = Math.floor(Math.random() * numNodes);
//     const target = Math.floor(Math.random() * numNodes);
//     if (
//       source !== target &&
//       !links.some(
//         (link) => link.source === `${source}` && link.target === `${target}`
//       )
//     ) {
//       links.push({ source: `${source}`, target: `${target}` });
//     }
//   }

//   return { nodes, links };
// };

// const NetworkGraph: React.FC = () => {
//   const graphRef = useRef<HTMLDivElement>(null);
//   const [graphData] = useState<GraphData>(generateRandomGraph(10));

//   useEffect(() => {
//     if (typeof window !== 'undefined' && graphRef.current) {
//       const Graph = new ForceGraph3D(graphRef.current)
//         .graphData(graphData)
//         .nodeLabel(
//           (node: GraphNode) =>
//             `Tipo: ${node.tipo}\nLocal: ${node.local}\nNome: ${node.name}`
//         )
//         .linkWidth(2)
//         .nodeAutoColorBy('tipo')
//         .nodeThreeObject((node: GraphNode) => {
//           return new THREE.Mesh(
//             new THREE.SphereGeometry(5),
//             new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff })
//           );
//         })
//         .linkDirectionalArrowLength(0);

//       Graph(graphRef.current).graphData(graphData);
//       Graph.cameraPosition({ x: 0, y: 0, z: 170 });

//       const resizeGraph = () => {
//         const width = graphRef.current?.offsetWidth || 0;
//         const height = graphRef.current?.offsetHeight || 0;
//         Graph.width(width).height(height);
//       };

//       window.addEventListener('resize', resizeGraph);
//       resizeGraph();

//       return () => {
//         window.removeEventListener('resize', resizeGraph);
//       };
//     }
//   }, [graphData]);

//   return (
//     <div
//       ref={graphRef}
//       style={{
//         // width: '80%',
//         // height: '500px',
//         width: '100%',
//         height: '100%',
//       }}
//     />
//   );
// };

// export default NetworkGraph;

'use client';

import ForceGraph3D from '3d-force-graph';
import Papa from 'papaparse';
import type React from 'react';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface GraphNode {
  id: string;
  name: string; // O código do entrevistador será o `name`
}

interface GraphLink {
  source: string;
  target: string;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

// Processa o conteúdo do CSV e retorna uma lista de códigos
const processCSV = (csvContent: string): string[] => {
  const parsed = Papa.parse(csvContent, { header: true });
  const data = parsed.data as { [key: string]: string }[];

  // Use o nome exato da coluna para acessar os valores
  const columnName = 'Entrevistador (utilize seu código)';
  return data.map((row) => row[columnName]).filter(Boolean);
};

// Gera o grafo a partir dos códigos
const generateGraphFromCodes = (codes: string[]): GraphData => {
  const nodes = codes.map((code, index) => ({
    id: `${index}`,
    name: code,
  }));

  // Conexões aleatórias, evitando loops
  const links: GraphLink[] = [];
  for (let i = 0; i < codes.length; i++) {
    const numConnections = Math.floor(Math.random() * 5) + 1;
    for (let j = 0; j < numConnections; j++) {
      const targetIndex = Math.floor(Math.random() * codes.length);
      if (
        targetIndex !== i &&
        !links.some(
          (link) =>
            (link.source === `${i}` && link.target === `${targetIndex}`) ||
            (link.source === `${targetIndex}` && link.target === `${i}`)
        )
      ) {
        links.push({ source: `${i}`, target: `${targetIndex}` });
      }
    }
  }

  return { nodes, links };
};

const NetworkGraph: React.FC = () => {
  const graphRef = useRef<HTMLDivElement>(null);
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  useEffect(() => {
    const loadCSV = async () => {
      try {
        const response = await fetch('/data/survey.csv');
        const csvContent = await response.text();
        const codes = processCSV(csvContent);
        const data = generateGraphFromCodes(codes);
        setGraphData(data);
      } catch (error) {
        console.log('error', error);
      }
    };

    loadCSV();
  }, []);

  useEffect(() => {
    if (graphData && typeof window !== 'undefined' && graphRef.current) {
      // @ts-ignore
      const Graph = new ForceGraph3D(graphRef.current)
        .graphData(graphData)
        // .nodeLabel((node: GraphNode) => `Código: ${node.name}`)
        .nodeAutoColorBy('name')
        // .nodeThreeObject((node: GraphNode) => {
        //   return new THREE.Mesh(
        //     new THREE.SphereGeometry(5),
        //     new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff })
        //   );
        // })
        .linkDirectionalArrowLength(0);

      Graph.cameraPosition({ x: 0, y: 0, z: 400 });

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
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default NetworkGraph;
