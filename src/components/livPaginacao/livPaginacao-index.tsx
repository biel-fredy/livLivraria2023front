import React from 'react';
import {
  Pagination,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import {
  PaginationContainer,
  CustomPaginationItem,
} from './livPaginacao-styles';

interface LivPaginacaoProps {
  count: number;
  itemsPerPage: number;
  onChangePage: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const LivPaginacao: React.FC<LivPaginacaoProps> = ({
  count,
  itemsPerPage,
  onChangePage,
  onItemsPerPageChange,
}) => {
  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    onChangePage(value);
  };

  const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
    onItemsPerPageChange(event.target.value as number);
  };

  return (
    <PaginationContainer>
      <Pagination
        count={Math.ceil(count / itemsPerPage)}
        page={page}
        onChange={handleChange}
        color="primary"
        renderItem={(item) => <CustomPaginationItem {...item} />}
      />
      <FormControl>
        <Select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
    </PaginationContainer>
  );
};

export default LivPaginacao;
