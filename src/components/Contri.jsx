import React from 'react';

const Contri = ({ data }) => {
  const daysInMonth = 31; // Assuming a 31-day month
  const cellSize = 15;
  const cellGap = 2;
  const width = 6 * (cellSize + cellGap);
  const height = 5 * (cellSize + cellGap);

  const getColor = (count) => {
    if (count === 0) return '#ebedf0';
    if (count < 5) return '#9be9a8';
    if (count < 10) return '#40c463';
    if (count < 15) return '#30a14e';
    return '#216e39';
  };

  const renderCells = () => {
    return Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const count = data[day] || 0;
      const x = (i % 7) * (cellSize + cellGap);
      const y = Math.floor(i / 7) * (cellSize + cellGap);

      return (
        <rect
          key={day}
          x={x}
          y={y}
          width={cellSize}
          height={cellSize}
          fill={getColor(count)}
          rx={2}
          ry={2}
        >
        </rect>
      );
    });
  };

  return (
    <div className="flex flex-col items-center">
      <svg width={width} height={height}>
        {renderCells()}
      </svg>
    </div>
  );
};

export default Contri;