import Context, {IDebugContext} from '../../blockly_executor_ts/Core/Context';
import Block from '../../blockly_executor_ts/Core/Block';

export default class NewObj extends Block {
    protected async _execute(node: Element, path: string, context: Context, blockContext: IDebugContext): Promise<any> {
        const mutationCount = +Block.getMutation(node, 'PROP', 0);
        if (!('result' in blockContext)) {
            blockContext.result = {};
        }
        if (mutationCount) {
            for (let j = 0; j < mutationCount; j++) {
                const propName = node.querySelector(`field[name=PROP${j}_NAME]`).textContent;
                const nodePropValue = node.querySelector(`value[name=PROP${j}_VALUE]`);
                // tslint:disable-next-line:max-line-length
                const propValue = await this.executeAllNext(nodePropValue, `${path}.PROP${j}_VALUE`, context, blockContext);
                blockContext.result[propName] = propValue;
            }
        }
        this._checkStep(context, blockContext);
        return  blockContext.result;
    }
}