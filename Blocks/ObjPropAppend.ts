import SimpleBlock from '../../blockly_executor_ts/BlockTemplates/SimpleBlock';
import Context, {IDebugContext} from '../../blockly_executor_ts/Core/Context';
import Block from '../../blockly_executor_ts/Core/Block';

export default class ObjPropAppend extends SimpleBlock {
    async _calcValue(node: Element, path: string, context: Context, blockContext: IDebugContext): Promise<any> {
        const obj = Block.getVariables<any[]>(context, blockContext.VAR);
        if (blockContext.PATH) {
            obj[blockContext.PATH].push(blockContext.VALUE);
        } else {
            obj.push(blockContext.VALUE);
        }
        this.setVariable(context, blockContext.VAR, obj);
    }
}