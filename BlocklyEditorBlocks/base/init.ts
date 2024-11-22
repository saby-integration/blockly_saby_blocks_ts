import './new_obj';
import './lists';
import './concatenate';
import './compare_objects';
import './logic_compare2';
import './execute_workspace';

import BlocksBase from './base';
window.Blockly.defineBlocksWithJsonArray(BlocksBase);

export {
    templateParamsBlock,
    templateMutationContainer,
    templateMutationParamsBlock,
    templateParamsBlockOld
} from './template/params_block';
