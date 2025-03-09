import Context, {IDebugContext} from '../../blockly_executor_ts/Core/Context';
import SimpleBlock from '../../blockly_executor_ts/BlockTemplates/SimpleBlock';
import Block from '../../blockly_executor_ts/Core/Block';
import {objGetPathValue} from '../../blockly_executor_ts/Core/helpers';

export default class ObjPropGet extends SimpleBlock {
   async _calcValue(node: Element, path: string, context: Context, blockContext: IDebugContext): Promise<any> {
        const objName = blockContext.VALUE || '';
        let blockContextPath = blockContext.PATH || '';
        const obj = Block.getVariables<object | any[]>(context, blockContext.VAR || '');
        if (!obj) {
            throw new Error(`${objName} not defined`);
        }
        if (blockContextPath && blockContextPath[0] === '\"') {
            blockContextPath = blockContextPath.slice(1);
            if (blockContextPath.slice(-1) === '\"') {
                blockContextPath = path.slice(0, -1);
            }
            return obj[blockContextPath];
        } else {
            return objGetPathValue(obj, blockContextPath);
        }
    }
}