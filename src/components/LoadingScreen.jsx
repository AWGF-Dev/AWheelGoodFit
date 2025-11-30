import { Html, useProgress } from '@react-three/drei';

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div style={{
        fontSize: '20px',
        color: '#fff',
        padding: '20px',
        background: 'rgba(0,0,0,0.7)',
        borderRadius: '2px',
        border: '2px',
        borderColor: 'black',
        width: '175px',
        fontFamily: 'mono',
        textAlign: 'center'
      }}>
        Loading: {Math.floor(progress)}%
      </div>
    </Html>
  );
}
