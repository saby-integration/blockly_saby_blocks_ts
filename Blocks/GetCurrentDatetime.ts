import SimpleBlock from '../../blockly_executor_ts/BlockTemplates/SimpleBlock';
import Context, {IDebugContext} from '../../blockly_executor_ts/Core/Context';
import {dateFormat} from '../../blockly_executor_ts/Core/timeHelper';

export default class GetCurrentDatetime extends SimpleBlock {
    async _calcValue(node: Element, path: string, context: Context, blockContext: IDebugContext): Promise<any> {
        return dateFormat(new Date(), 'Y-m-dTH:M:S.f');
    }
}