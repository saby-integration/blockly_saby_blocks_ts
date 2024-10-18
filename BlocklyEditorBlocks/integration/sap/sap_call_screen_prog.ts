/* tslint:disable */
import {
    templateMutationContainer,
    templateMutationParamsBlock,
    templateParamsBlockOld,
} from '../../base/template/params_block';

window.Blockly.Msg.SAP_CALL_SCREEN_PROG = 'Call prog';
window.Blockly.Msg.SAP_CALL_SCREEN_PROG_TOOLTIP = 'BlockType: sap_call_screen_prog';
window.Blockly.Msg.SAP_CALL_SCREEN_PROG_WITH = 'with';
window.Blockly.Msg.SAP_CALL_SCREEN_PROG_SCREEN = 'screen';
window.Blockly.Msg.SAP_CALL_SCREEN_PROG_VARIANT = 'variant';
window.Blockly.Msg.SAP_CALL_SCREEN_PROG_SELNAME = 'selname';
window.Blockly.Msg.SAP_CALL_SCREEN_PROG_KIND = 'kind';
window.Blockly.Msg.SAP_CALL_SCREEN_PROG_SIGN = 'sign';
window.Blockly.Msg.SAP_CALL_SCREEN_PROG_OPTION = 'option';
window.Blockly.Msg.INI_NAME = 'ini';
window.Blockly.Msg.SAP_CALL_SCREEN_PROG_CONTAINER_TITLE = 'Call prog';
window.Blockly.Msg.SAP_CALL_SCREEN_PROG_CONTAINER_TOOLTIP = 'Add or remove method params';
window.Blockly.Msg.SAP_CALL_SCREEN_PROG_PARAM_TITLE = 'With';
window.Blockly.Msg.SAP_CALL_SCREEN_PROG_PARAM_TOOLTIP = 'Add an param to the call method';
window.Blockly.Msg.SAP_CALL_SCREEN_PROG_HELPURL =
    'https://n.sbis.ru/article/98b76918-684d-428d-8c57-5e966765568d';

const blockId_ = 'sap_call_screen_prog';
window.Blockly.Blocks[blockId_] = {
    ...templateParamsBlockOld,
    blockId_,
    fields_: ['SELNAME', 'KIND', 'SIGN', 'OPTION'],
    inputs_: ['LOW', 'HIGH'],
    beforeInit_() {
        this.setHelpUrl(window.Blockly.Msg.SAP_CALL_SCREEN_PROG_HELPURL);
        this.setStyle('SAP');
        this.setTooltip(window.Blockly.Msg.SAP_CALL_SCREEN_PROG_TOOLTIP);
        this.setOutput(true, null);
        this.setInputsInline(false);
        this.paramCount_ = 1;
        this.appendDummyInput('EMPTY')
            .appendField(window.Blockly.Msg.SAP_CALL_SCREEN_PROG)
            .appendField(new window.Blockly.FieldTextInput(''), 'NAME')
            .appendField(window.Blockly.Msg.SAP_CALL_SCREEN_PROG_SCREEN)
            .appendField(new window.Blockly.FieldTextInput(''), 'SCREEN')
            .appendField(window.Blockly.Msg.SAP_CALL_SCREEN_PROG_VARIANT)
            .appendField(new window.Blockly.FieldTextInput(''), 'VARIANT');
        this.appendValueInput('RESULT_FORMAT')
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField('result format');
        this.appendStatementInput('INI');
    },
    updateParam_(i) {
        if (!this.getInput('PARAM' + i)) {
            this.appendDummyInput('PARAM' + i)
                .appendField('selname')
                .appendField(
                    new window.Blockly.FieldTextInput(''),
                    this.getFullFieldName_('SELNAME', i)
                )
                .appendField('kind')
                .appendField(
                    new window.Blockly.FieldDropdown([
                        ['select-options', 'S'],
                        ['parameters', 'P'],
                    ]),
                    this.getFullFieldName_('KIND', i)
                );
            this.appendValueInput('LOW' + i)
                .appendField('sign')
                .appendField(
                    new window.Blockly.FieldDropdown([
                        ['inclusive', 'I'],
                        ['exclusive', 'E'],
                    ]),
                    'SIGN' + i
                )
                .setAlign(window.Blockly.ALIGN_RIGHT)
                .appendField('option')
                .appendField(
                    new window.Blockly.FieldDropdown([
                        ['Equal', 'EQ'],
                        ['Not Equal', 'NE'],
                        ['Less Than', 'LT'],
                        ['Greater Than', 'GT'],
                        ['Less Equal', 'LE'],
                        ['Greater Equal', 'GE'],
                        ['Contains Only', 'CO'],
                        ['Contains Not Only', 'CN'],
                        ['Contains Any', 'CA'],
                        ['Contains Not Any', 'NA'],
                        ['Contains String', 'CS'],
                        [' Contains No String', 'NS'],
                        ['Covers Pattern', 'CP'],
                        ['No Pattern', 'NP'],
                    ]),
                    'OPTION' + i
                )
                .appendField('low');
            this.appendValueInput('HIGH' + i)
                .setAlign(window.Blockly.ALIGN_RIGHT)
                .appendField('high');
        }
    },
};

templateMutationContainer('sap_call_screen_prog', 'SAP');
templateMutationParamsBlock('sap_call_screen_prog', 'param', 'SAP');

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
