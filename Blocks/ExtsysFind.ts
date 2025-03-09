import ExtsysConnectorApi from './ExtsysConnectorApi';

export default class ExtsysFind extends ExtsysConnectorApi {
    protected suffix: string = 'find';
    calcParams: string[] = ['find'];
}