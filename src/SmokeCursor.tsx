import { useEffect, useState } from 'react';

interface SmokeParticleProps {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
}

const SmokeCursor: React.FC = () => {
  const [smokeParticles, setSmokeParticles] = useState<SmokeParticleProps[]>([]);

  const createSmokeParticle = (x: number, y: number) => {
    const newParticle: SmokeParticleProps = {
      id: Date.now(),
      x,
      y,
      size: Math.random() * 20 + 10,
      color: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
    };
    setSmokeParticles((prevParticles) => [...prevParticles, newParticle]);
    setTimeout(() => {
      setSmokeParticles((prevParticles) =>
        prevParticles.filter((particle) => particle.id !== newParticle.id)
      );
    }, 2000); // Particle lifetime
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      createSmokeParticle(event.clientX + window.scrollX, event.clientY + window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {smokeParticles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            position: 'absolute',
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: '15px', // Adjust the width to control the size of the star
            height: '15px', // Adjust the height to control the size of the star
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', // Define the clip path for the star
            backgroundColor: particle.color,
            animation: 'fadeInOut 1s forwards',
            boxShadow: `0 0 100px 100px ${particle.color}`,
            
          }}
        />
      ))}
      <style>{`
        @keyframes fadeInOut {
          0% {
            opacity: 2;
            transform: translate(-100%) scale(5);
          }
          25% {
            opacity: 1;
            transform: translate(-50%) scale(4);
          }
          100% {
            opacity: 0;
            transform: translate(-10%) scale(2); // Drift effect
          }
        }
      `}</style>
    </>
  );
};

export default SmokeCursor;