/* tslint:disable */
import {
    templateMutationContainer,
    templateMutationParamsBlock,
    templateParamsBlock
} from '../../base/template/params_block';

const blockId_ = 'sap_prog_result_format';
window.Blockly.Blocks[blockId_] = {
    ...templateParamsBlock,
    blockId_,
    style_: 'SAP',
    fields_: ['NAME', 'TYPE', 'SOURCE'],
    inputs_: [],
    updateParam_ (i) {
        const inputName = this.getFullInputName_('VALUE', i);
        if (!this.getInput(inputName)) {
            this.appendDummyInput(inputName)
                .appendField(window.Blockly.Msg.NAME)
                .appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('NAME', i))
                .appendField(window.Blockly.Msg.TYPE)
                .appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('TYPE', i))
                .appendField(window.Blockly.Msg.SOURCE)
                .appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('SOURCE', i));
        }
    },

};
templateMutationContainer(blockId_);
templateMutationParamsBlock(blockId_);

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
