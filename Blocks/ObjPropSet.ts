import SimpleBlock from '../../blockly_executor_ts/BlockTemplates/SimpleBlock';
import Context, {IDebugContext} from '../../blockly_executor_ts/Core/Context';

export default class ObjPropSet extends SimpleBlock {
    async _calcValue(node: Element, path: string, context: Context, blockContext: IDebugContext): Promise<any> {
        const variableName = blockContext.VAR || '';
        const obj = ObjPropSet.getVariables(context, variableName);
        obj[blockContext.PATH || ''] = blockContext.VALUE;
        this.setVariable(context, variableName, obj);
    }
}