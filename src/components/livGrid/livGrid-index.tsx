// livGrid-index.tsx
import React from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { GridContainerStyle, BoldTableCellStyle } from './livGrid-styles'; // Importe os estilos
import Quadro from '../quadro/quadro-index';

interface LivGridProps {
  data: any[];
}

const LivGrid: React.FC<LivGridProps> = ({ data }) => {
  const columns = Object.keys(data[0] || {});
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Quadro titulo="Grid">
      <div style={GridContainerStyle}>
        {' '}
        {/* Aplicar estilo aqui */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column} style={BoldTableCellStyle}>
                    {capitalizeFirstLetter(column)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column}>{row[column]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Quadro>
  );
};

export default LivGrid;
