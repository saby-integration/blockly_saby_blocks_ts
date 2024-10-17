/* tslint:disable */
import {
    templateMutationContainer,
    templateMutationParamsBlock,
    templateParamsBlock
} from '../../base/template/params_block';

const blockId_ = 'view_filter_chips';
window.Blockly.Blocks[blockId_] = {
    ...templateParamsBlock,
    blockId_,
    mutationBlockNames_: ['param_button'],
    fields_: ['KEY', 'TITLE', 'DEFAULT_VALUE'],
    inputs_: ['KEY', 'TITLE', 'DEFAULT_VALUE'],
    beforeInit_ () {
        this.setStyle('Настройки');
        this.setInputsInline(false);
        this.appendDummyInput('INFO')
            .appendField('Оформление. Фильтры. Чипсы');
        this.appendDummyInput()
            .appendField('Название')
            .appendField(new window.Blockly.FieldTextInput(''), 'NAME')
            .setAlign(window.Blockly.ALIGN_RIGHT);

        this.setOutput(true);
        this.setTooltip(window.Blockly.Msg.VIEW_TOOLBAR_MENU_TOOLTIP);
    },
    updateParam_ (i) {
        const paramType = this.getParamType_(i);
        switch (paramType) {
            case 'view_filter_chips_param_button':
                if (!this.getInput(this.getFullInputName_('KEY', i))) {
                    this.appendDummyInput(this.getFullInputName_('INFO', i))
                        .setAlign(window.Blockly.ALIGN_LEFT)
                        .appendField('Параметры кнопки');
                    this.appendDummyInput(this.getFullInputName_('KEY', i))
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField('Ключ')
                        .appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('KEY', i));
                    this.appendDummyInput(this.getFullInputName_('TITLE', i))
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField('Заголовок')
                        .appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('TITLE', i));
                    this.appendDummyInput(this.getFullInputName_('DEFAULT_VALUE', i))
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField('По умолчанию')
                        .appendField(new window.Blockly.FieldCheckbox('FALSE'), this.getFullFieldName_('DEFAULT_VALUE', i));
                }
                break;
        }
    },
};

templateMutationContainer(blockId_);
templateMutationParamsBlock(blockId_, 'param_button');
