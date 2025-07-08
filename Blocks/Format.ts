import {dateFormat} from '../../blockly_executor_ts/Core/timeHelper';
import SimpleBlock from '../../blockly_executor_ts/BlockTemplates/SimpleBlock';
import Context, {IDebugContext} from '../../blockly_executor_ts/Core/Context';

function formatToDate(value: string, formatString: string): string {
    const date = new Date(Date.parse(value));
    return dateFormat(date, formatString);
}

function formatFromDate(value: string, formatString: string): string {
    const date = new Date(Date.parse(value));
    return dateFormat(date, formatString);
}

function formatToNumber(value: string): number {
    const floatValue = parseFloat(value);
    const intValue = +value;
    if (intValue === floatValue) {
        return  intValue;
    }
    return  floatValue;
}

function formatToString(value: string): string {
    return value.toString();
}

const operations = {
    to_date: formatToDate,
    from_date: formatFromDate,
    to_number: formatToNumber,
    to_string: formatToString
};

export default class Format extends SimpleBlock {
    async _calcValue(node: Element, path: string, context: Context, blockContext: IDebugContext): Promise<any> {
        const operation = operations[blockContext.type];
        if (!operation) {
            throw new Error(`block ${Format.name} operation ${blockContext.type}`);
        }
        blockContext.result = operation(blockContext.value, blockContext.template);
        return blockContext.result;
    }
}