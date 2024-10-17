/* tslint:disable */
import {
    templateMutationContainer,
    templateMutationParamsBlock,
    templateParamsBlock
} from '../../base/template/params_block';

const blockId_ = 'view_toolbar_menu';
window.Blockly.Blocks[blockId_] = {
    ...templateParamsBlock,
    blockId_,
    mutationBlockNames_: ['param_command'],
    fields_: ['COMMAND'],
    inputs_: ['COMMAND'],
    beforeInit_ () {
        this.setStyle('Настройки');
        this.setInputsInline(false);
        this.appendDummyInput('INFO')
            .appendField('Оформление. Тулбар. Меню');
        this.appendDummyInput()
            .appendField('Имя')
            .appendField(new window.Blockly.FieldTextInput(''), 'NAME')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField('Заголовок')
            .appendField(new window.Blockly.FieldTextInput(''), 'TITLE')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField('Иконка')
            .appendField(new window.Blockly.FieldTextInput(''), 'ICON')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField('Подсказка')
            .appendField(new window.Blockly.FieldTextInput(''), 'DESCRIPTION')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField('Отображать в верхнем тулбаре')
            .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'SHOW_IN_MAIN_TOOLBAR')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField('Отображать в боковом тулбаре')
            .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'SHOW_IN_DEFAULT_TOOLBAR')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField('Отображать в ПМО')
            .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'SHOW_IN_OPERATION_PANEL')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField('Отображать в контекстном меню')
            .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'SHOW_IN_ITEM_ACTION')
            .setAlign(window.Blockly.ALIGN_RIGHT);

        this.setOutput(true);
        this.setTooltip(window.Blockly.Msg.VIEW_TOOLBAR_MENU_TOOLTIP);
    },
    updateParam_ (i) {
        const paramType = this.getParamType_(i);
        switch (paramType) {
            case 'view_toolbar_menu_param_command':
                if (!this.getInput(this.getFullInputName_('COMMAND', i))) {
                    this.appendValueInput(this.getFullInputName_('COMMAND', i))
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField('Команда');
                }
                break;
        }
    },
};

templateMutationContainer(blockId_);
templateMutationParamsBlock(blockId_, 'param_command');
