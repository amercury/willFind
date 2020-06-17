import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '10 Июня, 2020', 'Евсеев Юра', 'У себя дома', 'Уставший', 'Дима'),
  createData(1, '15 Мая, 2020', 'Алеша Попович', 'На печи', 'Сонный', 'Холоп90'),
  createData(2, '22 Апреля, 2020', 'Снуп Дог', 'Бирюлево', 'Накуренный', 'ФифтиСент'),
  createData(3, '21 Февраля, 2020', 'Экономика РФ', 'На дне', 'Раздавленна', 'УзурпаторВова'),
  createData(4, '9 Февраля, 2020', 'Владилен Минин', 'У любовницы', 'Свеж и бодр', 'БывшаяЖена'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Последние найденные</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Дата</TableCell>
            <TableCell>Имя</TableCell>
            <TableCell>Место</TableCell>
            <TableCell>Состояние</TableCell>
            <TableCell align="right">Поисковик</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Показать больше
        </Link>
      </div>
    </React.Fragment>
  );
}
