/* tslint:disable */
export const templateParamsBlock = {
    blockId_: 'block_id',
    paramPrefix_: 'PARAM',
    paramCountMutationName_: 'items',
    fields_: ['NAME'],
    inputs_: ['VALUE'],
    paramCount_: 0,
    paramTypes_: [],
    mutationBlockNames_: ['param'],
    style_: 'procedure_blocks',

    beforeInit_ () {
        this.setHelpUrl(window.Blockly.Msg[`${this.blockId_.toUpperCase()}_HELP_URL`]);
        this.setStyle(this.style_);
        this.setInputsInline(false);
        this.appendDummyInput('NAME')
            .appendField(window.Blockly.Msg[`${this.blockId_.toUpperCase()}_TITLE`]);
        this.updateShape_();
        this.setOutput(true, 'Array');
        this.setTooltip(window.Blockly.Msg[`${this.blockId_.toUpperCase()}_TOOLTIP`]);
    },
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {window.Blockly.Block}
     */
    init () {
        this.beforeInit_();
        this.updateShape_();
        if (this.mutationBlockNames_.length) {
            this.mutationBlocksFullTypes = [];
            for (let i = 0; i < this.mutationBlockNames_.length; i++) {
                this.mutationBlocksFullTypes.push(`${this.blockId_}_${this.mutationBlockNames_[i]}`);
            }
            this.setMutator(new window.Blockly.Mutator(this.mutationBlocksFullTypes));
        }
    },
    /**
     * Create XML to represent list inputs.
     * Backwards compatible serialization implementation.
     * @return {!Element} XML storage element.
     * @this {Block}
     */
    mutationToDom () {
        const container = window.Blockly.utils.xml.createElement('mutation');
        if (this.mutationBlockNames_.length > 1 && this.paramTypes_) {
            container.setAttribute(`${this.paramCountMutationName_}_types`, this.paramTypes_.join(','));
        }

        container.setAttribute(this.paramCountMutationName_, this.paramCount_);
        this.mutationToDom_(container);
        return container;
    },
    mutationToDom_ (container) {
    },
    /**
     * Parse XML to restore the list inputs.
     * Backwards compatible serialization implementation.
     * @param {!Element} xmlElement XML storage element.
     * @this {Block}
     */
    domToMutation (xmlElement) {
        this.paramCount_ = parseInt(xmlElement.getAttribute(this.paramCountMutationName_), 10);
        if (this.mutationBlockNames_.length > 1) {
            const paramTypes_ = xmlElement.getAttribute(`${this.paramCountMutationName_}_types`);
            this.paramTypes_ = paramTypes_ ? paramTypes_.split(',') : [];
        }
        this.domToMutation_(xmlElement);
        this.updateShape_();
    },
    domToMutation_ (xmlElement) {
    },
    /**
     * Returns the state of this block as a JSON serializable object.
     * @return {{param_count: number}} The state of this block, ie the item count.
     */
    saveExtraState () {
        const result = {};
        result[this.paramCountMutationName_] = this.paramCount_;
        if (this.mutationBlockNames_.length > 1) {
            result[`${this.paramCountMutationName_}_types`] = this.paramTypes_;
        }
        this.saveExtraState_(result);
        return result;
    },
    saveExtraState_ (result) {
    },
    /**
     * Applies the given state to this block.
     * @param {*} state The state to apply to this block, ie the item count.
     */
    loadExtraState (state) {
        this.paramCount_ = state[this.paramCountMutationName_];
        if (this.mutationBlockNames_.length > 1) {
            this.paramTypes_ = state[`${this.paramCountMutationName_}_types`];
        }
        this.loadExtraState_(state);
        this.updateShape_();
    },
    loadExtraState_ (state) {
    },
    /**
     * Вызывается перед показом окна мутатора, нужно отрисовать окно мутатора в соответствии с текущими парамеитрами блока.
     * @param {!Workspace} workspace Mutator's workspace.
     * @return {!Block} Root block in mutator.
     * @this {Block}
     */
    decompose (workspace) {
        const containerBlock = workspace.newBlock(`${this.blockId_}_container`);
        this.decompose_container(containerBlock);
        containerBlock.initSvg();
        if (this.mutationBlockNames_.length) {
            let connection = containerBlock.getInput('STACK').connection;
            for (let i = 0; i < this.paramCount_; i++) {
                const blockType = this.getParamType_(i);
                const itemBlock = workspace.newBlock(blockType);
                itemBlock.initSvg();
                connection.connect(itemBlock.previousConnection);
                connection = itemBlock.nextConnection;
            }
        }
        return containerBlock;
    },

    decompose_container (containerBlock) {
    },

    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Block} containerBlock Root block in mutator.
     * @this {Block}
     */
    compose (containerBlock) {
        this.paramTypes_ = [];
        this.compose_container(containerBlock);

        let paramBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        // window.Blockly.Events.disable();
        const connections = [];
        while (paramBlock && !paramBlock.isInsertionMarker()) {
            connections.push(paramBlock.params_);
            this.paramTypes_.push(paramBlock.type);
            paramBlock = paramBlock.nextConnection && paramBlock.nextConnection.targetBlock();
        }
        // console.log(connections)
        // Disconnect any children that don't belong.
        // for (let i = 0; i < this.paramCount_; i++) {
        //     const connection = this.getInput('PARAM_VALUE_' + i).connection.targetConnection;
        //     if (connection && connections.indexOf(connection) === -1) {
        //         connection.disconnect()
        //     }
        // }
        this.paramCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child standard_blocks.
        let key = null;
        for (let i = 0; i < this.paramCount_; i++) {
            if (connections[i] && connections[i].fields) {
                for (let j = 0; j < this.fields_.length; j++) {
                    key = this.fields_[j];
                    try {
                        this.setFieldValue(connections[i].fields[key], `${this.paramPrefix}${i}_${key}`);
                        // eslint-disable-next-line no-empty
                    } catch (err) {

                    }
                }
                for (let j = 0; j < this.inputs_.length; j++) {
                    key = this.inputs_[j];
                    try {
                        window.Blockly.Mutator.reconnect(connections[i].inputs[key], this, `${this.paramPrefix}${i}_${key}`);
                        // eslint-disable-next-line no-empty
                    } catch (err) {

                    }
                }
            } else {
                for (let j = 0; j < this.fields_.length; j++) {
                    key = this.fields_[j];
                    try {
                        this.setFieldValue('', `${this.paramPrefix}${i}_${key}`);
                        // eslint-disable-next-line no-empty
                    } catch (err) {

                    }
                }
            }
        }
        // window.Blockly.Events.enable();
    },
    compose_container (containerBlock) {
    },
    /**
     * Вызывается перед открытием мутатора. Store pointers to any connected child standard_blocks.
     * @param {!Block} containerBlock Root block in mutator.
     * @this {Block}
     */
    saveConnections (containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock('STACK');
        let i = 0;
        let value = null;
        let key = null;
        while (itemBlock) {
            let skip = false;
            const params = {
                inputs: {},
                fields: {}
            };
            for (let j = 0; j < this.fields_.length; j++) {
                key = this.fields_[j];
                value = this.getFieldValue(this.getFullFieldName_(key, i));
                if (value === null) {
                    skip = true;
                    return;
                }
                params.fields[key] = value;
            }
            if (!skip) {
                for (let j = 0; j < this.inputs_.length; j++) {
                    key = this.inputs_[j];
                    value = this.getInput(this.getFullInputName_(key, i));
                    params.inputs[key] = value && value.connection && value.connection.targetConnection;
                }
            }
            if (!skip) {
                itemBlock.params_ = params;
            }
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
            i++;
        }
    },
    getFullFieldName_(fieldName, i) {
        return `${this.paramPrefix_}${i}_${fieldName}`;
    },
    getFullInputName_(inputName, i) {
        return `${this.paramPrefix_}${i}_${inputName}`;
    },
    updateShape_ () {
        this.updateHeader_();
        let i = 0;
        for (i = 0; i < this.paramCount_; i++) {
            this.updateParam_(i);
        }
        for (let i = this.paramCount_; this.getInput(this.getFullInputName_(this.inputs_[0], i)); i++) {
            const self = this;
            this.inputs_.forEach(function (inputName) {
                try {
                    self.removeInput(`${self.paramPrefix_}${i}_${inputName}`);
                } catch (err) {
                    // console.log()
                }
            });
        }

    },

    updateHeader_ () {

    },
    updateParam_ (i) {
        if (!this.getInput(this.getFullInputName_('VALUE', i))) {
            this.appendValueInput(this.getFullInputName_('VALUE', i))
                .setAlign(window.Blockly.ALIGN_RIGHT)
                .appendField(new window.Blockly.FieldTextInput(''), this.getFullFieldName_('NAME', i));
        }
    },
    getParamType_ (paramNumber) {
        if (!this.paramTypes_ || this.paramTypes_.length < paramNumber + 1) {
            return this.mutationBlocksFullTypes[0];
        }
        return this.paramTypes_[paramNumber];
    }
};
export const TEMPLATE_PARAMS_BLOCK = {
    /**
     * Create XML to represent list inputs.
     * Backwards compatible serialization implementation.
     * @return {!Element} XML storage element.
     * @this {Block}
     */
    mutationToDom () {
        const container = window.Blockly.utils.xml.createElement('mutation');
        container.setAttribute('param_count', this.param_count_);
        return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * Backwards compatible serialization implementation.
     * @param {!Element} xmlElement XML storage element.
     * @this {Block}
     */
    domToMutation (xmlElement) {
        this.param_count_ = parseInt(xmlElement.getAttribute('param_count'), 10);
        this.updateShape_();
    },
    /**
     * Returns the state of this block as a JSON serializable object.
     * @return {{param_count: number}} The state of this block, ie the item count.
     */
    saveExtraState () {
        return {
            param_count: this.param_count_,
        };
    },
    /**
     * Applies the given state to this block.
     * @param {*} state The state to apply to this block, ie the item count.
     */
    loadExtraState (state) {
        this.param_count_ = state.param_count;
        this.updateShape_();
    },
    /**
     * Вызывается перед показом окна мутатора, нужно отрисовать окно мутатора в соответствии с текущими парамеитрами блока.
     * @param {!Workspace} workspace Mutator's workspace.
     * @return {!Block} Root block in mutator.
     * @this {Block}
     */
    decompose (workspace) {
        const containerBlock = workspace.newBlock(this.mutation_container_name);
        this.decompose_container(containerBlock);
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.param_count_; i++) {
            const itemBlock = workspace.newBlock(this.mutation_bloks_name);
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },

    decompose_container (containerBlock) {
    },

    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Block} containerBlock Root block in mutator.
     * @this {Block}
     */
    compose (containerBlock) {
        this.compose_container(containerBlock);

        let paramBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        // window.Blockly.Events.disable();
        const connections = [];
        while (paramBlock && !paramBlock.isInsertionMarker()) {
            connections.push(paramBlock.params_);
            paramBlock = paramBlock.nextConnection && paramBlock.nextConnection.targetBlock();
        }
        // console.log(connections)
        // Disconnect any children that don't belong.
        // for (let i = 0; i < this.param_count_; i++) {
        //     const connection = this.getInput('PARAM_VALUE_' + i).connection.targetConnection;
        //     if (connection && connections.indexOf(connection) === -1) {
        //         connection.disconnect()
        //     }
        // }
        this.param_count_ = connections.length;
        this.updateShape_();
        // Reconnect any child standard_blocks.
        let key = null;
        for (let i = 0; i < this.param_count_; i++) {
            if (connections[i] && connections[i].fields) {
                for (let j = 0; j < this.fields_.length; j++) {
                    key = this.fields_[j];
                    this.setFieldValue(connections[i].fields[key], `PARAM_${key}_${i}`);
                }
                for (let j = 0; j < this.inputs_.length; j++) {
                    key = this.inputs_[j];
                    window.Blockly.Mutator.reconnect(connections[i].inputs[key], this, `PARAM_${key}_${i}`);
                }
            } else {
                for (let j = 0; j < this.fields_.length; j++) {
                    key = this.fields_[j];
                    this.setFieldValue('', `PARAM_${key}_${i}`);
                }
            }
        }
        // window.Blockly.Events.enable();
    },
    compose_container (containerBlock) {
    },
    /**
     * Вызывается перед открытием мутатора. Store pointers to any connected child standard_blocks.
     * @param {!Block} containerBlock Root block in mutator.
     * @this {Block}
     */
    saveConnections (containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock('STACK');
        let i = 0;
        let value = null;
        let key = null;
        while (itemBlock) {
            let skip = false;
            const params = {
                inputs: {},
                fields: {}
            };
            for (let j = 0; j < this.fields_.length; j++) {
                key = this.fields_[j];
                value = this.getFieldValue(`PARAM_${key}_${i}`);
                if (value === null) {
                    skip = true;
                    return;
                }
                params.fields[key] = value;
            }
            if (!skip) {
                for (let j = 0; j < this.inputs_.length; j++) {
                    key = this.inputs_[j];
                    value = this.getInput(`PARAM_${key}_${i}`);
                    params.inputs[key] = value && value.connection.targetConnection;
                }
            }
            if (!skip) {
                itemBlock.params_ = params;
            }
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
            i++;
        }
    },
};

export function templateMutationContainer(blockId, style='procedure_blocks') {
    window.Blockly.Blocks[`${blockId}_container`] = {
        /**
         * Mutator block for list container.
         * @this {Block}
         */
        init () {
            this.setStyle(style);
            this.appendDummyInput()
                .appendField(window.Blockly.Msg[`${blockId.toUpperCase()}_CONTAINER_TITLE`]);
            this.appendStatementInput('STACK');
            this.setTooltip(window.Blockly.Msg[`${blockId.toUpperCase()}_CONTAINER_TOOLTIP`]);
            this.contextMenu = false;
        },
    };
}
export function templateMutationParamsBlock(blockId, paramType = 'param', style='procedure_blocks') {
    window.Blockly.Blocks[`${blockId}_${paramType}`] = {
        /**
         * Mutator block for adding params.
         * @this {Block}
         */
        init () {
            this.setStyle(style);
            this.appendDummyInput().appendField(window.Blockly.Msg[`${blockId.toUpperCase()}_${paramType.toUpperCase()}_TITLE`]);
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setTooltip(window.Blockly.Msg[`${blockId.toUpperCase()}_${paramType.toUpperCase()}_TOOLTIP`]);
            this.contextMenu = false;
        }
    };
}

export const templateParamsBlockOld = {
    ...templateParamsBlock,
    getFullFieldName_(fieldName, i) {
        return `${fieldName}${i}`;
    },
    getFullInputName_(inputName, i) {
        return `${inputName}${i}`;
    }
};
