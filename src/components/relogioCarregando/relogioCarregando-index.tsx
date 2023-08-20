import React, { useEffect, useState } from 'react';

interface RelogioCarregandoProps {
  carregando: boolean;
}

const RelogioCarregando: React.FC<RelogioCarregandoProps> = ({
  carregando,
}) => {
  const [angulo, setAngulo] = useState(0);

  useEffect(() => {
    if (carregando) {
      const intervalId = setInterval(() => {
        setAngulo((prevAngulo) => (prevAngulo + 6) % 360);
      }, 16.67); // Atualiza a cada 16.67ms para uma rotação completa em 1 segundo

      return () => clearInterval(intervalId);
    }
  }, [carregando]);

  return (
    <div
      style={{
        position: 'relative',
        width: '150px', // Comprimento do retângulo
        height: '50px', // Altura do retângulo
        backgroundColor: 'rgba(225, 225, 225, 0.3)', // Cor e transparência
        display: carregando ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="15px" // Diâmetro fixo de 15px
        height="15px"
      >
        {/* Borda externa */}
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="black"
          fill="none"
          strokeWidth="2"
        />
        {/* Fundo do relógio */}
        <circle cx="50" cy="50" r="46" stroke="black" fill="white" />
        {/* Ponteiro das horas */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="10" // Aumentado em 3x
          stroke="black"
          strokeWidth="5" // Engrossar o ponteiro
          style={{
            transformOrigin: '50% 50%',
            transform: `rotate(${angulo}deg)`,
          }}
        />
        {/* Centro do relógio */}
        <circle cx="50" cy="50" r="5" stroke="black" fill="black" />
      </svg>
    </div>
  );
};

export default RelogioCarregando;
