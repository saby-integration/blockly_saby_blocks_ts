/* tslint:disable */
import {TEMPLATE_PARAMS_BLOCK} from './template/params_block';

window.Blockly.Blocks.execute_workspace = {
    ...TEMPLATE_PARAMS_BLOCK,
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {Block}
     */
    init() {
        this.setHelpUrl(window.Blockly.Msg.EXECUTE_WORKSPACE_HELPURL);
        this.setTooltip(window.Blockly.Msg.EXECUTE_WORKSPACE_TOOLTIP);
        this.setStyle('procedure_blocks');
        this.setInputsInline(false);
        this.param_count_ = 0;
        this.appendValueInput('NAME').appendField(window.Blockly.Msg.EXECUTE_WORKSPACE_TITLE);
        this.updateShape_();
        this.setOutput(true, 'Array');
        this.setMutator(new window.Blockly.Mutator(['execute_workspace_param']));
        this.setTooltip(window.Blockly.Msg.EXECUTE_WORKSPACE_TOOLTIP);
        this.mutation_container_name = 'execute_workspace_container';
        this.mutation_bloks_name = ['execute_workspace_param'];
        this.fields_ = ['NAME'];
        this.inputs_ = ['VALUE'];
    },
    /**
     * Add or remove the endpoint input from this function definition.
     * @param {boolean} hasEndpoint True if a statement block is needed.
     * @this {Block}
     */
    setEndpoint_(hasEndpoint) {
        if (this.hasEndpoint_ === hasEndpoint) {
            return;
        }
        if (hasEndpoint) {
            this.appendValueInput('ENDPOINT')
                .setAlign(window.Blockly.ALIGN_RIGHT)
                .appendField(window.Blockly.Msg.EXECUTE_WORKSPACE_ENDPOINT);
            if (this.getInput('PARAM_VALUE_0')) {
                this.moveInputBefore('ENDPOINT', 'PARAM_VALUE_0');
            }
        } else {
            this.removeInput('ENDPOINT', true);
        }
        this.hasEndpoint_ = hasEndpoint;
    },
    decompose_container(containerBlock) {
        containerBlock.setFieldValue(this.hasEndpoint_, 'ENDPOINT');
    },

    compose_container(containerBlock) {
        let hasEndpoint = containerBlock.getFieldValue('ENDPOINT');
        hasEndpoint = hasEndpoint === 'TRUE';
        this.setEndpoint_(hasEndpoint);
    },

    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {Block}
     */
    updateShape_() {
        // this.setEndpoint_(this.hasEndpoint_)
        // Add new inputs.
        for (let i = 0; i < this.param_count_; i++) {
            if (!this.getInput('PARAM_VALUE_' + i)) {
                const input = this.appendValueInput('PARAM_VALUE_' + i).setAlign(
                    window.Blockly.ALIGN_RIGHT
                );
                if (i === 0) {
                    input.appendField(window.Blockly.Msg.EXECUTE_WORKSPACE_PARAMS_TITLE);
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

window.Blockly.Blocks.execute_workspace_container = {
    /**
     * Mutator block for list container.
     * @this {Block}
     */
    init() {
        this.setStyle('procedure_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.EXECUTE_WORKSPACE_TITLE);
        this.appendDummyInput()
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField(window.Blockly.Msg.EXECUTE_WORKSPACE_ALLOW_ENDPOINT)
            .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'ENDPOINT');
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.EXECUTE_WORKSPACE_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};

window.Blockly.Blocks.execute_workspace_param = {
    /**
     * Mutator block for adding params.
     * @this {Block}
     */
    init() {
        this.setStyle('procedure_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.PARAM);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.EXECUTE_WORKSPACE_PARAM_TOOLTIP);
        this.contextMenu = false;
    },
};
