// livGrid-index.tsx
import React, { useState } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Input,
  IconButton,
} from '@mui/material';

import { GridContainerStyle, BoldTableCellStyle } from './livGrid-styles';
import Quadro from '../quadro/quadro-index';
import { Close, FilterList } from '@mui/icons-material';

interface LivGridProps {
  data: any[];
}

const LivGrid: React.FC<LivGridProps> = ({ data }) => {
  const columns = Object.keys(data[0] || {});
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [editingColumn, setEditingColumn] = useState<string | null>(null);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleFilterChange = (column: string, value: string) => {
    setFilters({ ...filters, [column]: value });
  };

  const handleEditClick = (column: string) => {
    setEditingColumn(column);
  };

  const handleCancelFilter = (column: string) => {
    const newFilters = { ...filters };
    delete newFilters[column];
    setFilters(newFilters);
    setEditingColumn(null);
  };

  const filteredData = data.filter((row) => {
    return Object.keys(filters).every((column) => {
      return filters[column]
        ? row[column].toString().includes(filters[column])
        : true;
    });
  });

  return (
    <Quadro titulo="Grid">
      <div style={GridContainerStyle}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column} style={BoldTableCellStyle}>
                    {editingColumn === column ? (
                      <>
                        <Input
                          defaultValue={filters[column] || ''}
                          onChange={(e) =>
                            handleFilterChange(column, e.target.value)
                          }
                          autoFocus
                        />
                        <IconButton onClick={() => handleCancelFilter(column)}>
                          <Close />
                        </IconButton>
                      </>
                    ) : (
                      <>
                        {capitalizeFirstLetter(column)}
                        <IconButton onClick={() => handleEditClick(column)}>
                          <FilterList />
                        </IconButton>
                      </>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row, index) => (
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
