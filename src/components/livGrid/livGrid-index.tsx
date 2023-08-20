// livGrid-index.tsx
import React, { useEffect, useState } from 'react';
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
import LivPaginacao from '../livPaginacao/livPaginacao-index';

interface LivGridProps {
  data: Record<string, any>[];
}

const LivGrid: React.FC<LivGridProps> = ({ data }) => {
  const columns = Object.keys(data[0] || {});
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [editingColumn, setEditingColumn] = useState<string | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
    setItemsPerPage(10);
  }, [filters]);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
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
        ? row[column]
            .toString()
            .toLowerCase()
            .includes(filters[column].toLowerCase())
        : true;
    });
  });

  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

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
              {paginatedData.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column}>{row[column]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <LivPaginacao
          count={filteredData.length}
          itemsPerPage={itemsPerPage}
          onChangePage={handleChangePage}
          onItemsPerPageChange={handleItemsPerPageChange} // Passando a função de callback
        />
      </div>
    </Quadro>
  );
};

export default LivGrid;
