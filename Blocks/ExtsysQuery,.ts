import ExtsysConnectorApi from './ExtsysConnectorApi';

export default class ExtsysQuery extends ExtsysConnectorApi {
    protected suffix: string = 'query';
    calcParams: string[] = ['filer', 'limit', 'offset'];
}