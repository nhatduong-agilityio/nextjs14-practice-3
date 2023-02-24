// Libs
import { Box, Container, useTheme } from '@mui/material';
import {
  FunctionComponent,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

// Constants
import { LOCATION } from '~/constants/location';
import { STATUS } from '~/constants/status';

// Store
import { IUserContext, UserContext } from '~/store/providers/user';

// Types
import { DialogState } from '~/types/dialogForm';
import { IUser } from '~/types/user';

// Components
import { AppBarCustomize } from '~/components/AppBar/AppBarCustomize';
import { TableCustomize } from '~/components/Table/TableCustomize';
import { BoxControl } from '@components/BoxControl';
import { FormDialog } from '~/components/Dialog/FormDialog';

const useUsers = () => useContext<IUserContext>(UserContext);

export const LayoutContainer: FunctionComponent = memo(() => {
  const theme = useTheme();
  const { users } = useUsers();

  const [entries, setEntries] = useState('5');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(Number(entries));
  const [filteredStatus, setFilteredStatus] = useState(STATUS.ANY);
  const [filteredLocation, setFilteredLocation] = useState(LOCATION.ALL);
  const [rows, setRows] = useState<IUser[]>(users.data ? users.data : ({} as IUser[]));

  useEffect(() => {
    if (users.data) {
      setRows(users.data);
    }
  }, [users.data]);

  const [dialogForm, setDialogForm] = useState<DialogState>({
    open: false,
    idSelected: 0,
  });

  /**
   * component handle change row per page
   * @param rowsPerPage row number want to show.
   * @param page page number of pagination
   */
  const onChangeRowsPerPage = useCallback((rowsPerPage: number, page: number) => {
    setRowsPerPage(rowsPerPage);
    setPage(page);
  }, []);

  const handleRefresh = () => {
    if (users.data) {
      setRows(users.data);
    }
  };

  const handleOpenDialog = useCallback((id: number) => {
    setDialogForm({
      open: true,
      idSelected: id,
    });
  }, []);

  const handleCloseDialog = useCallback(() => {
    setDialogForm({
      open: false,
      idSelected: dialogForm.idSelected,
    });
  }, [dialogForm.idSelected]);

  const renderDialog = useMemo(() => {
    return (
      <FormDialog
        openDialog={dialogForm.open}
        orderSelected={dialogForm.idSelected}
        onCloseDialog={handleCloseDialog}
      />
    );
  }, [dialogForm.idSelected, dialogForm.open, handleCloseDialog]);

  return (
    <>
      <Container maxWidth='xl'>
        <AppBarCustomize onHandleRefresh={handleRefresh} />
        <Box
          sx={{
            width: '100%',
            padding: '15px 25px 20px 25px ',
            backgroundColor: theme.palette.background.default,
          }}
        >
          <BoxControl
            entries={entries}
            onSelectEntries={setEntries}
            onChangeRowsPerPage={onChangeRowsPerPage}
            onFilteredStatus={setFilteredStatus}
            onFilteredLocation={setFilteredLocation}
            rows={rows}
            onRows={setRows}
          />
          <TableCustomize
            rows={rows}
            page={page}
            onSetPage={setPage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={onChangeRowsPerPage}
            filteredStatus={filteredStatus}
            filteredLocation={filteredLocation}
            onOpenDialog={handleOpenDialog}
          />
        </Box>
      </Container>
      {dialogForm.open && renderDialog}
    </>
  );
});

LayoutContainer.displayName = 'LayoutContainer';