/* tslint:disable */
import {
    templateParamsBlock,
    templateMutationParamsBlock,
    templateMutationContainer,
} from '../../base/template/params_block';

const blockId_ = 'algorithm_info';
window.Blockly.Blocks[blockId_] = {
    ...templateParamsBlock,
    blockId_,
    mutationBlockNames_: [
        'param_string', 'param_number', 'param_boolean', 'param_extsys_objects', 'param_extsys_connection'],
    fields_: ['NAME', 'TITLE', 'DESCRIPTION', 'DEFAULT'],
    inputs_: ['VALUE', 'TITLE', 'DEFAULT', 'DESCRIPTION', 'NAME'],
    beforeInit_ () {
        this.setHelpUrl(window.Blockly.Msg.ALGORITHM_INFO_HELP_URL);
        this.setStyle('Настройки');
        this.setInputsInline(false);
        this.appendDummyInput('INFO')
            .appendField(window.Blockly.Msg.ALGORITHM_INFO_TITLE);
        this.appendDummyInput()
            .appendField('Тип внеш.системы')
            .appendField(new window.Blockly.FieldTextInput(''), 'ext_sys_type_');
        this.appendDummyInput()
            .appendField('Мин.верс.внеш.системы')
            .appendField(new window.Blockly.FieldTextInput(''), 'min_sys_version');
        this.appendDummyInput()
            .appendField('Тип алгоритма')
            .appendField(new window.Blockly.FieldDropdown([
                    ['robot', 'robot'],
                    ['operation', 'operation'],
                    ['action read', 'action_read'],
                    ['action find', 'action_find'],
                    ['action update ', 'action_update'],
                    ['action list', 'action_list'],
                    ['action changes', 'action_changes'],
                    ['service', 'service'],
                ]),
                'type');
        this.appendDummyInput()
            .appendField('Тип объекта внеш.системы')
            .appendField(new window.Blockly.FieldTextInput(''), 'ext_sys_obj_type');
        this.appendDummyInput()
            .appendField('Название объекта внеш.системы')
            .appendField(new window.Blockly.FieldTextInput(''), 'ext_sys_obj_title');
        this.appendDummyInput()
            .appendField('Тип объекта API')
            .appendField(new window.Blockly.FieldTextInput(''), 'obj_type');

        this.appendDummyInput()
            .appendField('Мин.верс.продукта')
            .appendField(new window.Blockly.FieldTextInput(''), 'min_product_version');
        this.appendValueInput('menu')
            .appendField('menu')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField('Параметры алгоритма:');
        this.setOutput(true);
        this.setTooltip(window.Blockly.Msg.ALGORITHM_INFO_TOOLTIP);
    },
    updateParam_ (i) {
        const paramType = this.getParamType_(i);
        // console.log(paramType)
        switch (paramType) {
            case 'algorithm_info_param_extsys_connection':
                if (!this.getInput(this.getFullInputName_('VALUE', i))) {
                    this.appendDummyInput(this.getFullInputName_('VALUE', i))
                        .setAlign(window.Blockly.ALIGN_LEFT)
                        .appendField('- ' + window.Blockly.Msg[`${paramType.toUpperCase()}_TITLE`] )
                        .appendField(new window.Blockly.FieldDropdown([
                                ['FTP', 'FTP'],
                                ['HTTP', 'HTTP'],
                                ['SMTP', 'SMTP'],
                            ]),
                            this.getFullFieldName_('NAME', i));
                }
                break;
            case 'algorithm_info_param_extsys_objects':
                if (!this.getInput(this.getFullInputName_('VALUE', i))) {
                    this.appendDummyInput(this.getFullInputName_('VALUE', i))
                        .setAlign(window.Blockly.ALIGN_LEFT)
                        .appendField('- ' + window.Blockly.Msg[`${paramType.toUpperCase()}_TITLE`]);
                }
                break;
            case 'algorithm_info_param_boolean':
                if (!this.getInput(this.getFullInputName_('VALUE', i))) {
                    this.add_simple_type_param(paramType, i);
                    this.appendDummyInput(this.getFullInputName_('DEFAULT', i))
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField(window.Blockly.Msg.DEFAULT)
                        .appendField(new window.Blockly.FieldCheckbox(''), this.getFullFieldName_('DEFAULT', i));
                }
                break;
            case 'algorithm_info_param_bool':
                if (!this.getInput(this.getFullInputName_('VALUE', i))) {
                    this.appendDummyInput(this.getFullInputName_('VALUE', i))
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField(window.Blockly.Msg[`${paramType.toUpperCase()}_TITLE`]);
                }
                break;
            case 'algorithm_info_param_number':
                if (!this.getInput(this.getFullInputName_('VALUE', i))) {
                    this.add_simple_type_param(paramType, i);
                    this.appendDummyInput(this.getFullInputName_('DEFAULT', i))
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField(window.Blockly.Msg.DEFAULT)
                        .appendField(new window.Blockly.FieldNumber(''), this.getFullFieldName_('DEFAULT', i));
                }
                break;
            case 'algorithm_info_param_string':
                if (!this.getInput(this.getFullInputName_('VALUE', i))) {
                    this.add_simple_type_param(paramType, i);
                    this.appendDummyInput(this.getFullInputName_('DEFAULT', i))
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField(window.Blockly.Msg.DEFAULT)
                        .appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('DEFAULT', i));
                }
                break;
        }
    },
    add_simple_type_param (paramType, i) {
        this.appendDummyInput(this.getFullInputName_('VALUE', i))
            .setAlign(window.Blockly.ALIGN_LEFT)
            .appendField('-')
            .appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('NAME', i))
            .appendField('(' + window.Blockly.Msg[`${paramType.toUpperCase()}_TITLE`] + ')');
        this.appendDummyInput(this.getFullInputName_('TITLE', i))
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField(window.Blockly.Msg.TITLE)
            .appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('TITLE', i));
        this.appendDummyInput(this.getFullInputName_('DESCRIPTION', i))
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField(window.Blockly.Msg.DESCRIPTION)
            .appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('DESCRIPTION', i));
    }
};

templateMutationContainer(blockId_, 'Настройки');
templateMutationParamsBlock(blockId_, 'param_string', 'Настройки');
templateMutationParamsBlock(blockId_, 'param_number', 'Настройки');
templateMutationParamsBlock(blockId_, 'param_boolean', 'Настройки');
templateMutationParamsBlock(blockId_, 'param_extsys_objects', 'Настройки');
templateMutationParamsBlock(blockId_, 'param_extsys_connection', 'Настройки');

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
