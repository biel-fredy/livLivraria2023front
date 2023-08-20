
import { PaginationItem } from '@mui/material';
import { styled } from '@mui/system';

export const PaginationContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
});

export const CustomPaginationItem = styled(PaginationItem)({
  '&.Mui-selected': {
    backgroundColor: '#0B521B',
  },
});