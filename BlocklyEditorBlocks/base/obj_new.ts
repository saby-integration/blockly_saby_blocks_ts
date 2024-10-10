/* tslint:disable */
import {TEMPLATE_PARAMS_BLOCK} from './template/params_block';

window.Blockly.Blocks.obj_new = {
    ...TEMPLATE_PARAMS_BLOCK,
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {Block}
     */
    init () {
        this.setHelpUrl(window.Blockly.Msg.OBJ_NEW_HELP_URL);
        this.setStyle('procedure_blocks');
        this.setInputsInline(false);
        this.param_count_ = 0;
        this.appendDummyInput()
            .appendField(window.Blockly.Msg.OBJ_NEW_TITLE);
        this.updateShape_();
        this.setOutput(true, 'Array');
        this.setMutator(new window.Blockly.Mutator(['obj_new_param']));
        this.setTooltip(window.Blockly.Msg.OBJ_NEW_TOOLTIP);
        this.mutation_container_name = 'obj_new_container';
        this.mutation_bloks_name = ['obj_new_param'];
        this.fields_ = ['NAME'];
        this.inputs_ = ['VALUE'];

    },
    // eslint-disable-next-line no-unused-vars
    decompose_container (containerBlock) {
    },

    // eslint-disable-next-line no-unused-vars
    compose_container (containerBlock) {
    },

    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {Block}
     */
    updateShape_ () {
        // this.setEndpoint_(this.hasEndpoint_)
        // Add new inputs.
        for (let i = 0; i < this.param_count_; i++) {
            if (!this.getInput('PARAM_VALUE_' + i)) {
                const input = this.appendValueInput('PARAM_VALUE_' + i)
                    .setAlign(window.Blockly.ALIGN_RIGHT);
                if (i === 0) {
                    input.appendField(window.Blockly.Msg.OBJ_NEW_PARAMS_TITLE);
                }
                input.appendField(new window.Blockly.FieldTextInput(''), 'PARAM_NAME_' + i);
            }
        }
        // Remove deleted inputs.
        for (let i = this.param_count_; this.getInput('PARAM_VALUE_' + i); i++) {
            this.removeInput('PARAM_VALUE_' + i);
        }
    },

};

window.Blockly.Blocks.obj_new_container = {
    /**
     * Mutator block for list container.
     * @this {Block}
     */
    init () {
        this.setStyle('procedure_blocks');
        this.appendDummyInput()
            .appendField(window.Blockly.Msg.OBJ_NEW_TITLE);
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.OBJ_NEW_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};

window.Blockly.Blocks.obj_new_param = {
    /**
     * Mutator block for adding params.
     * @this {Block}
     */
    init () {
        this.setStyle('procedure_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.PARAM);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.OBJ_NEW_PARAM_TOOLTIP);
        this.contextMenu = false;
    },
};
