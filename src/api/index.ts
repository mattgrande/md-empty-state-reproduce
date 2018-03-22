import axios from 'axios';
import {AxiosResponse} from 'axios';
import {TableColumn} from '@/store/assetPage.ts';

const url = `http://localhost:3000/?query=`;

export function get(view: string, tableColumns: TableColumn[]) {
    const columns = tableColumns.map((tc) => tc.dataField);
    columns.push('id');
    const graphQl = `{${view} {${columns.join(' ')}}}`;
    const query = encodeURIComponent(graphQl);

    return axios.get(`${url}${query}`)
        .then((response: AxiosResponse<any>) => response.data.data);
}
