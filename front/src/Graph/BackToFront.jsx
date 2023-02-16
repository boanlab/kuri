import { useState } from "react";
import BackToFront2JSON from "./BackToFront2JSON.json";
import NetworkGraph from "./NetworkGraph";

const BackToFront = () => {
  const [nodes, setNodes] = useState(
    BackToFront2JSON.map((pod, index) => {
      return {
        id: index + 1,
        name: pod.name,
        namespace: pod.namespace,
        label: pod.labels,
        ip: pod.ip,
        port: pod.port,
      };
    })
  );

  const [edges, setEdges] = useState(
    BackToFront2JSON.flatMap((pod, index) => {
      return pod.nextPods.map((nextPod) => {
        return {
          from: index + 1,
          to: BackToFront2JSON.findIndex((p) => p.name === nextPod.name) + 1,
        };
      });
    })
  );

  return (
    <div>
      <NetworkGraph
        nodes={nodes}
        setNodes={setNodes}
        edges={edges}
        setEdges={setEdges}
      />
    </div>
  );
};

export default BackToFront;
