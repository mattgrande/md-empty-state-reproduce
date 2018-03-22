import Vue from 'vue';
import {TableColumn} from '@/store/assetPage';

export const TableCell = Vue.component('TableCell', {
  functional: true,
  render(createElement, context) {
    const item = context.props.item;
    const column = context.props.column as TableColumn;

    // TODO -> Any formatting
    const value = item[column.dataField];

    return createElement('span', value);
  },
  props: {
    item: Object,
    column: {}
  }
});
