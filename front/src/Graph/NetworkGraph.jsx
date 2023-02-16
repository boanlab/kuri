import { Network } from "vis-network";

import React, { useState, useEffect } from "react";

import "./../scss/NetworkGraph.scss";

const NetworkGraph = ({ nodes, edges }) => {
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    const container = document.querySelector("#myNetwork");
    const data = {
      nodes: nodes.map((node) => ({
        ...node,
        label: node.name,
        shape: "dot",
<<<<<<< HEAD
        size: 50,
        font: { size: 20 },
        color: {
          background: "#18415c",
          border: "#0a1d2a",
          highlight: {
            background: "#18415c",
            border: "#0a1d2a",
          },
        },
=======
        size: 70,
        font: { size: 30 },
>>>>>>> parent of e7ed5a8 (UI with Sidebar)
      })),
      edges: edges,
    };
    const options = {
<<<<<<< HEAD
      width: "1200px",
      height: "700px",

=======
      width: "1000px",
      height: "1000px",
>>>>>>> parent of e7ed5a8 (UI with Sidebar)
      interaction: {
        zoomView: false,
      },
      nodes: {
        shape: "circle", // ��� ��� ����
        size: 30, // ����� ũ��
        font: {
          size: 20, // �� ��Ʈ ũ��
        },

        borderWidth: 4,
        borderWidthSelected: 10,
      },
      edges: {
        width: 5, // ���� ����
        length: 300,
        color: {
          color: "gray", // ���� ����
          highlight: "black", // ���õ� ���� ����
        },
        smooth: {
          type: "curvedCCW", // ���� ��� ����
        },
        arrows: {
          to: { enabled: true, scaleFactor: 0.5, type: "arrow" },
        },
      },
    };
    const network = new Network(container, data, options);

    network.on("click", (params) => {
      if (params.nodes.length) {
        setSelectedNode(nodes.find((node) => node.id === params.nodes[0]));
      }
    });
  }, []);

  return (
    <div className="parent">
      <h2 id="myNetwork"></h2>
      {selectedNode && (
        <div className="node-info-container">
          <div className="node-info">
            <h1>{selectedNode.name}</h1>
            <p>namespace: {selectedNode.namespace}</p>
            <p>label:</p>
            {Object.entries(selectedNode.label).map(([key, value]) => (
              <p key={key} style={{ paddingLeft: "20px" }}>
                {key}: {value}
              </p>
            ))}
            <p>ip: {selectedNode.ip}</p>
            <p>port: {selectedNode.port}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NetworkGraph;
