import './scss/index.scss';
import { Exel } from '@/components/Exel/Exel';
import { Header } from '@/components/Header/Header';
import { Toolbar } from '@/components/Toolbar/Toolbar';
import { Formula } from '@/components/Formula/Formula';
import { Table } from '@/components/Table/Table';

const exel = new Exel('#app', {
  rootClassName: 'exel',
  components: [Header, Toolbar, Formula, Table],
});
exel.render();
