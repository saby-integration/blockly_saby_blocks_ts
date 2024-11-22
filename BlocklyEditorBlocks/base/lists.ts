/* tslint:disable */
window.Blockly.Blocks.lists_get_index = {
    /**
     * Block for getting element at index.
     * @this {window.Blockly.Block}
     */
    init() {
        const MODE =
            [
                [window.Blockly.Msg.LISTS_GET_INDEX_GET, 'GET'],
                [window.Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE, 'GET_REMOVE'],
                [window.Blockly.Msg.LISTS_GET_INDEX_REMOVE, 'REMOVE']
            ];
        this.WHERE_OPTIONS =
            [
                [window.Blockly.Msg.LISTS_GET_INDEX_FROM_START, 'FROM_START'],
                [window.Blockly.Msg.LISTS_GET_INDEX_FROM_END, 'FROM_END'],
                [window.Blockly.Msg.LISTS_GET_INDEX_FIRST, 'FIRST'],
                [window.Blockly.Msg.LISTS_GET_INDEX_LAST, 'LAST'],
                [window.Blockly.Msg.LISTS_GET_INDEX_RANDOM, 'RANDOM']
            ];
        this.setHelpUrl(window.Blockly.Msg.LISTS_GET_INDEX_HELPURL);
        this.setStyle('list_blocks');
        const modeMenu = new window.Blockly.FieldDropdown(MODE, function(value) {
            const isStatement = (value == 'REMOVE');
            this.getSourceBlock().updateStatement_(isStatement);
        });
        this.appendDummyInput()
            .appendField(window.Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST)
            .appendField(new window.Blockly.FieldVariable('items'), 'VAR');
        // this.appendValueInput('VALUE')
        //     .setCheck('Array')
        this.appendDummyInput()
            .appendField(modeMenu, 'MODE')
            .appendField('', 'SPACE');
        this.appendDummyInput('AT');
        if (window.Blockly.Msg.LISTS_GET_INDEX_TAIL) {
            this.appendDummyInput('TAIL')
                .appendField(window.Blockly.Msg.LISTS_GET_INDEX_TAIL);
        }
        this.setInputsInline(true);
        this.setOutput(true);
        this.updateAt_(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        const thisBlock = this;
        this.setTooltip(function() {
            const mode = thisBlock.getFieldValue('MODE');
            const where = thisBlock.getFieldValue('WHERE');
            let tooltip = '';
            switch (mode + ' ' + where) {
                case 'GET FROM_START':
                case 'GET FROM_END':
                    tooltip = window.Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
                    break;
                case 'GET FIRST':
                    tooltip = window.Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
                    break;
                case 'GET LAST':
                    tooltip = window.Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
                    break;
                case 'GET RANDOM':
                    tooltip = window.Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
                    break;
                case 'GET_REMOVE FROM_START':
                case 'GET_REMOVE FROM_END':
                    tooltip = window.Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
                    break;
                case 'GET_REMOVE FIRST':
                    tooltip = window.Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
                    break;
                case 'GET_REMOVE LAST':
                    tooltip = window.Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
                    break;
                case 'GET_REMOVE RANDOM':
                    tooltip = window.Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
                    break;
                case 'REMOVE FROM_START':
                case 'REMOVE FROM_END':
                    tooltip = window.Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
                    break;
                case 'REMOVE FIRST':
                    tooltip = window.Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
                    break;
                case 'REMOVE LAST':
                    tooltip = window.Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
                    break;
                case 'REMOVE RANDOM':
                    tooltip = window.Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM;
                    break;
            }
            if (where == 'FROM_START' || where == 'FROM_END') {
                const msg = (where == 'FROM_START') ?
                    window.Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP :
                    window.Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP;
                tooltip += '  ' + msg.replace('%1',
                    thisBlock.workspace.options.oneBasedIndex ? '#1' : '#0');
            }
            return tooltip;
        });
    },
    /**
     * Create XML to represent whether the block is a statement or a value.
     * Also represent whether there is an 'AT' input.
     * @return {!Element} XML storage element.
     * @this {window.Blockly.Block}
     */
    mutationToDom() {
        const container = window.Blockly.utils.xml.createElement('mutation');
        const isStatement = !this.outputConnection;
        container.setAttribute('statement', isStatement);
        const isAt = this.getInput('AT').type == window.Blockly.INPUT_VALUE;
        container.setAttribute('at', isAt);
        return container;
    },
    /**
     * Parse XML to restore the 'AT' input.
     * @param {!Element} xmlElement XML storage element.
     * @this {window.Blockly.Block}
     */
    domToMutation(xmlElement) {
        // Note: Until January 2013 this block did not have mutations,
        // so 'statement' defaults to false and 'at' defaults to true.
        const isStatement = (xmlElement.getAttribute('statement') == 'true');
        this.updateStatement_(isStatement);
        const isAt = (xmlElement.getAttribute('at') != 'false');
        this.updateAt_(isAt);
    },
    /**
     * Switch between a value block and a statement block.
     * @param {boolean} newStatement True if the block should be a statement.
     *     False if the block should be a value.
     * @private
     * @this {window.Blockly.Block}
     */
    updateStatement_(newStatement) {
        const oldStatement = !this.outputConnection;
        if (newStatement != oldStatement) {
            this.unplug(true, true);
            if (newStatement) {
                this.setOutput(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
            } else {
                this.setPreviousStatement(false);
                this.setNextStatement(false);
                this.setOutput(true);
            }
        }
    },
    /**
     * Create or delete an input for the numeric index.
     * @param {boolean} isAt True if the input should exist.
     * @private
     * @this {window.Blockly.Block}
     */
    updateAt_(isAt) {
        this.removeInput('AT');
        this.removeInput('ORDINAL', true);
        if (isAt) {
            this.appendValueInput('AT')
                .setCheck('Number');
            if (window.Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
                this.appendDummyInput('ORDINAL').appendField(window.Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
            }
        } else {
            this.appendDummyInput('AT');
        }
        const menu = new window.Blockly.FieldDropdown(this.WHERE_OPTIONS, function(value) {
            const newAt = (value === 'FROM_START') || (value === 'FROM_END');
            if (newAt !== isAt) {
                const block = this.getSourceBlock();
                block.updateAt_(newAt);
                block.setFieldValue(value, 'WHERE');
                return null;
            }
            return undefined;
        });
        this.getInput('AT')
            .appendField(menu, 'WHERE');
        if (window.Blockly.Msg.LISTS_GET_INDEX_TAIL) {
            this.moveInputBefore('TAIL', null);
        }
    }
};

window.Blockly.Blocks.lists_set_index = {
    /**
     * Block for setting the element at index.
     * @this {window.Blockly.Block}
     */
    init() {
        const MODE =
            [
                [window.Blockly.Msg.LISTS_SET_INDEX_SET, 'SET'],
                [window.Blockly.Msg.LISTS_SET_INDEX_INSERT, 'INSERT']
            ];
        this.WHERE_OPTIONS =
            [
                [window.Blockly.Msg.LISTS_GET_INDEX_FROM_START, 'FROM_START'],
                [window.Blockly.Msg.LISTS_GET_INDEX_FROM_END, 'FROM_END'],
                [window.Blockly.Msg.LISTS_GET_INDEX_FIRST, 'FIRST'],
                [window.Blockly.Msg.LISTS_GET_INDEX_LAST, 'LAST'],
                [window.Blockly.Msg.LISTS_GET_INDEX_RANDOM, 'RANDOM']
            ];
        this.setHelpUrl(window.Blockly.Msg.LISTS_SET_INDEX_HELPURL);
        this.setStyle('list_blocks');
        this.appendDummyInput()
            .appendField(window.Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST)
            .appendField(new window.Blockly.FieldVariable('items'), 'VAR');
        // this.appendValueInput('LIST')
        //     .setCheck('Array')
        this.appendDummyInput()
            .appendField(new window.Blockly.FieldDropdown(MODE), 'MODE')
            .appendField('', 'SPACE');
        this.appendDummyInput('AT');
        this.appendValueInput('TO')
            .appendField(window.Blockly.Msg.LISTS_SET_INDEX_INPUT_TO);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.LISTS_SET_INDEX_TOOLTIP);
        this.updateAt_(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        const thisBlock = this;
        this.setTooltip(function() {
            const mode = thisBlock.getFieldValue('MODE');
            const where = thisBlock.getFieldValue('WHERE');
            let tooltip = '';
            switch (mode + ' ' + where) {
                case 'SET FROM_START':
                case 'SET FROM_END':
                    tooltip = window.Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
                    break;
                case 'SET FIRST':
                    tooltip = window.Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
                    break;
                case 'SET LAST':
                    tooltip = window.Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
                    break;
                case 'SET RANDOM':
                    tooltip = window.Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
                    break;
                case 'INSERT FROM_START':
                case 'INSERT FROM_END':
                    tooltip = window.Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
                    break;
                case 'INSERT FIRST':
                    tooltip = window.Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
                    break;
                case 'INSERT LAST':
                    tooltip = window.Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
                    break;
                case 'INSERT RANDOM':
                    tooltip = window.Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM;
                    break;
            }
            if (where == 'FROM_START' || where == 'FROM_END') {
                tooltip += '  ' + window.Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP
                    .replace('%1',
                        thisBlock.workspace.options.oneBasedIndex ? '#1' : '#0');
            }
            return tooltip;
        });
    },
    /**
     * Create XML to represent whether there is an 'AT' input.
     * @return {!Element} XML storage element.
     * @this {window.Blockly.Block}
     */
    mutationToDom() {
        const container = window.Blockly.utils.xml.createElement('mutation');
        const isAt = this.getInput('AT').type == window.Blockly.INPUT_VALUE;
        container.setAttribute('at', isAt);
        return container;
    },
    /**
     * Parse XML to restore the 'AT' input.
     * @param {!Element} xmlElement XML storage element.
     * @this {window.Blockly.Block}
     */
    domToMutation(xmlElement) {
        // Note: Until January 2013 this block did not have mutations,
        // so 'at' defaults to true.
        const isAt = (xmlElement.getAttribute('at') != 'false');
        this.updateAt_(isAt);
    },
    /**
     * Create or delete an input for the numeric index.
     * @param {boolean} isAt True if the input should exist.
     * @private
     * @this {window.Blockly.Block}
     */
    updateAt_(isAt) {
        // Destroy old 'AT' and 'ORDINAL' input.
        this.removeInput('AT');
        this.removeInput('ORDINAL', true);
        // Create either a value 'AT' input or a dummy input.
        if (isAt) {
            this.appendValueInput('AT').setCheck('Number');
            if (window.Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
                this.appendDummyInput('ORDINAL')
                    .appendField(window.Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
            }
        } else {
            this.appendDummyInput('AT');
        }
        const menu = new window.Blockly.FieldDropdown(this.WHERE_OPTIONS, function(value) {
            const newAt = (value == 'FROM_START') || (value == 'FROM_END');
            // The 'isAt' variable is available due to this function being a closure.
            if (newAt != isAt) {
                const block = this.getSourceBlock();
                block.updateAt_(newAt);
                // This menu has been destroyed and replaced.  Update the replacement.
                block.setFieldValue(value, 'WHERE');
                return null;
            }
            return undefined;
        });
        this.moveInputBefore('AT', 'TO');
        if (this.getInput('ORDINAL')) {
            this.moveInputBefore('ORDINAL', 'TO');
        }

        this.getInput('AT').appendField(menu, 'WHERE');
    }
};

window.Blockly.Blocks.lists_concatenate = {
    /**
     * Block for merging lists.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setHelpUrl(window.Blockly.Msg.LISTS_CONCATENATE_HELPURL);
        this.setStyle('list_blocks');
        this.itemCount_ = 2;
        this.updateShape_();
        this.setOutput(!0, 'Array');
        this.setMutator(new window.Blockly.Mutator(['lists_concatenate_item']));
        this.setTooltip(window.Blockly.Msg.LISTS_CONCATENATE_TOOLTIP);
    },
      /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this {window.Blockly.Block}
     */
    mutationToDom () {
           const container = window.Blockly.utils.xml.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {window.Blockly.Block}
     */
    domToMutation(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'),10);
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!window.Blockly.Workspace} workspace Mutator's workspace.
     * @return {!window.Blockly.Block} Root block in mutator.
     * @this {window.Blockly.Block}
     */
    decompose (workspace) {
        const containerBlock = workspace.newBlock('lists_concatenate_container');
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.itemCount_; i++) {
            const itemBlock = workspace.newBlock('lists_concatenate_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!window.Blockly.Block} containerBlock Root block in mutator.
     * @this {window.Blockly.Block}
     */
    compose (containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock('STACK');
        const connections = [];
        while (itemBlock && !itemBlock.isInsertionMarker()) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        for (let i = 0; i < this.itemCount_; i++)
            window.Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    },
     /**
     * Store pointers to any connected child blocks.
     * @param {!window.Blockly.Block} containerBlock Root block in mutator.
     * @this {window.Blockly.Block}
     */
    saveConnections (containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock('STACK');
        let i = 0;
        while (itemBlock) {
            const input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
     /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {window.Blockly.Block}
     */
    updateShape_ () {
         // Remove deleted inputs.
        this.itemCount_ && this.getInput('EMPTY') ? this.removeInput('EMPTY') : this.itemCount_ ||
            this.getInput('EMPTY') || this.appendDummyInput('EMPTY').appendField(window.Blockly.Msg.LISTS_CONCATENATE_TITLE);
        let i;
        for (i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                const b = this.appendValueInput('ADD' + i).setAlign(window.Blockly.ALIGN_RIGHT);
                0 == i && b.appendField(window.Blockly.Msg.LISTS_CONCATENATE_TITLE);
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    }
};

window.Blockly.Blocks.lists_concatenate_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.LISTS_CONCATENATE_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.LISTS_CONCATENATE_CONTAINER_TOOLTIP);
        this.contextMenu = !1;
    }
};

window.Blockly.Blocks.lists_concatenate_item = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.LISTS_CONCATENATE_ITEM_TITLE);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip(window.Blockly.Msg.LISTS_CONCATENATE_ITEM_TOOLTIP);
        this.contextMenu = !1;
    }
};
