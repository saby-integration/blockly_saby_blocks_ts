import BlocklyExecutor from '../../blockly_executor_ts/Core/BlocklyExecutor';
import Context, {IDebugContext} from '../../blockly_executor_ts/Core/Context';
import SimpleBlock from '../../blockly_executor_ts/BlockTemplates/SimpleBlock';
import Block from '../../blockly_executor_ts/Core/Block';

export function updateIni(executor: BlocklyExecutor, context: Context, iniName: string): void {
    let cache = context.data.cache_ini;
    if (cache) {
        context.data.cache_ini = {};
        cache = context.data.cache_ini;
    }
    if (iniName in cache) return;
}

export default class ExtsysConnectorApi extends SimpleBlock {
    protected suffix: string = 'find';
    calcParams: string[] = ['object'];

    async _calcValue(node: Element, path: string, context: Context, blockContext: IDebugContext): Promise<any> {
        if (Block.commandSended(blockContext)) {
            return this.commandsGetResult(blockContext.__deferred);
        } else {
            const iniName = `${blockContext.ini_name}_${this.suffix}`;
            updateIni(this._executor, context, iniName);
            const param = {
                ini_name: iniName
            };
            for (const elem of this.calcParams) {
                param[elem] = blockContext[elem];
            }
            return this.commandSend('calc_ini', param, context, blockContext);
        }
    }
}