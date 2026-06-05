'use client';

import { useState } from 'react';
import GraphCanvas, { DEFAULT_READOUT, type ReadoutData } from './GraphCanvas';

export default function GraphExplorer() {
  const [readout, setReadout] = useState<ReadoutData>(DEFAULT_READOUT);
  return <GraphCanvas readout={readout} onReadout={setReadout} />;
}
