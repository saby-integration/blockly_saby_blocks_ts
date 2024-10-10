/* tslint:disable */
import {
    templateMutationContainer,
    templateMutationParamsBlock,
    templateParamsBlock
} from '../../base/template/params_block';

const blockId_ = 'sap_prog_breakpoints';
window.Blockly.Blocks[blockId_] = {
    ...templateParamsBlock,
    blockId_,
    style_: 'SAP',
    updateParam_ (i) {
        const inputName = this.getFullInputName_('VALUE', i);
        if (!this.getInput(inputName)) {
            const input = this.appendValueInput(inputName)
                .setAlign(window.Blockly.ALIGN_RIGHT);
            input.appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('NAME', i));
        }
    },

};
templateMutationContainer(blockId_, 'SAP');
templateMutationParamsBlock(blockId_, undefined, 'SAP');

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
