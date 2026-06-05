export interface GraphNode {
  id: string;
  label: string;
  type: 'projekt' | 'artikel' | 'tag';
  tags?: string[];
  url?: string;
}

export interface GraphEdge {
  source: string;
  target: string;
}

export const nodes: GraphNode[] = [];
export const edges: GraphEdge[] = [];
