import { askClaude } from './llmClient';
import { useState } from 'react';
import { FiMove, FiCamera } from 'react-icons/fi';

export default function App() {
  const [drag, setDrag] = useState(false);
  const [pos, setPos] = useState({x: 40, y: 40});
  const [reply, setReply] = useState<any>(null);

  const startDrag = (e: React.MouseEvent) => {
    setDrag(true);
    const shiftX = e.clientX - pos.x;
    const shiftY = e.clientY - pos.y;
    const onMove = (ev: MouseEvent) => {
      if (!drag) return;
      setPos({x: ev.clientX - shiftX, y: ev.clientY - shiftY});
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', () => {
      setDrag(false);
      document.removeEventListener('mousemove', onMove);
    }, { once: true });
  };

  const snap = async () => {
    const tab = await chrome.tabs.captureVisibleTab({format:'png'});
    const res = await askClaude(tab);
    setReply(res);
  };

  return (
    <div style={{
      position:'fixed', top:pos.y, left:pos.x, zIndex:999999,
      background:'rgba(0,0,0,0.4)', backdropFilter:'blur(4px)',
      padding:'12px', borderRadius:'8px', width:'300px', color:'#fff'
    }}>
      <div onMouseDown={startDrag} style={{cursor:'move',display:'flex',gap:'6px'}}>
        <FiMove/> snap n8n
      </div>
      <button onClick={snap} style={{
        marginTop:'8px', background:'#1e88e5', border:'none',
        padding:'6px 12px', borderRadius:'4px', width:'100%', color:'#fff'
      }}>
        <FiCamera/> Snap & Debug
      </button>
      {reply && (
        <div className="mt-2 text-sm">
          <b>Root cause:</b> {reply.content.cause}<br/>
          <b>Steps:</b>
          <ol className="list-decimal ml-4">
            {reply.content.steps.map((s: string,i:number)=><li key={i}>{s}</li>)}
          </ol>
        </div>
      )}
    </div>
  );
} 