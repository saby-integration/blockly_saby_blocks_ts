/* tslint:disable */
import {
    templateMutationContainer,
    templateMutationParamsBlock,
    templateParamsBlock
} from '../../base/template/params_block';

const blockId_ = 'view_filter_enumeration';
window.Blockly.Blocks[blockId_] = {
    ...templateParamsBlock,
    blockId_,
    mutationBlockNames_: ['param_item'],
    fields_: ['VALUE', 'TITLE', 'IS_FOLDER', 'PARENT'],
    inputs_: ['VALUE', 'TITLE', 'IS_FOLDER', 'PARENT'],
    beforeInit_ () {
        this.setStyle('Настройки');
        this.setInputsInline(false);
        this.appendDummyInput('INFO')
            .appendField('Оформление. Фильтр. Перечисление');
        this.appendDummyInput()
            .appendField('Название')
            .appendField(new window.Blockly.FieldTextInput(''), 'NAME')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField('Заголовок')
            .appendField(new window.Blockly.FieldTextInput(''), 'TITLE')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField('Значение по умолчанию')
            .appendField(new window.Blockly.FieldTextInput(''), 'DEFAULT_VALUE')
            .setAlign(window.Blockly.ALIGN_RIGHT);

        this.setOutput(true);
        this.setTooltip(window.Blockly.Msg.VIEW_TOOLBAR_MENU_TOOLTIP);
    },
    updateParam_ (i) {
        const paramType = this.getParamType_(i);
        switch (paramType) {
            case 'view_filter_enumeration_param_item':
                if (!this.getInput(this.getFullInputName_('VALUE', i))) {
                    this.appendDummyInput(this.getFullInputName_('INFO', i))
                        .setAlign(window.Blockly.ALIGN_LEFT)
                        .appendField('Параметры элемента');
                    this.appendDummyInput(this.getFullInputName_('VALUE', i))
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField('Значение')
                        .appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('VALUE', i));
                    this.appendDummyInput(this.getFullInputName_('TITLE', i))
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField('Заголовок')
                        .appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('TITLE', i));
                    this.appendDummyInput(this.getFullInputName_('IS_FOLDER', i))
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField('Это папка')
                        .appendField(new window.Blockly.FieldCheckbox('FALSE'), this.getFullFieldName_('IS_FOLDER', i));
                    this.appendDummyInput(this.getFullInputName_('PARENT', i))
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField('Родитель')
                        .appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('PARENT', i));
                }
                break;
        }
    },
};

templateMutationContainer(blockId_);
templateMutationParamsBlock(blockId_, 'param_item');
