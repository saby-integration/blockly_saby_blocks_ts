import ExtsysConnectorApi, {updateIni} from './ExtsysConnectorApi';
import Context, {IDebugContext} from '../../blockly_executor_ts/Core/Context';
import Block from '../../blockly_executor_ts/Core/Block';

export default class ExtsysCalcIni extends ExtsysConnectorApi {
    // tslint:disable-next-line:max-line-length
    async _calcMutation(node: Element, path: string, context: Context, blockContext: IDebugContext, mutationNumber: any): Promise<{name: string, value: any}> {
        const nodeKey = node.querySelector(`field[name=KEY${mutationNumber}]`);
        const key = nodeKey.textContent;
        const nodeValue = node.querySelector(`value[name=VALUE${mutationNumber}]`);
        if (key && nodeValue) {
            // tslint:disable-next-line:max-line-length
            const result = await this.executeAllNext(nodeValue, `${path}.param${mutationNumber}`, context, blockContext);
            return {
                name: key,
                value: result
            };
        }
        return null;
    }

    async _calcValue(node: Element, path: string, context: Context, blockContext: IDebugContext): Promise<any> {
        if (Block.commandSended(blockContext)) {
            try {
                this.commandsGetResult(blockContext.__deferred);
            } catch (e) {
                throw new Error(`Command CalcIni: ${e.message}`);
            }
        } else {
            const paramsCount = +Block.getMutation(node, 'items', 0);
            const iniName = blockContext.INI_NAME;
            const params = {
                ini_name: iniName
            };
            for (let i = 0; i < paramsCount; i++) {
                const key = blockContext[`PARAM${i}_NAME`];
                params[key] = blockContext[`PARAM${i}_VALUE`];
            }
            updateIni(this._executor, context, iniName);
            this.commandSend('calc_ini', params, context, blockContext);
        }
    }
}