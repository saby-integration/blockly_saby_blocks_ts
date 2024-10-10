/* tslint:disable */
window.Blockly.Msg.SAP_NEW_TABLE = 'new';
window.Blockly.Msg.SAP_NEW_TABLE_TYPE_TITLE='type';
window.Blockly.Msg.SAP_NEW_TABLE_CONTAINER_TITLE_ADD = 'Object';
window.Blockly.Msg.SAP_NEW_TABLE_CONTAINER_TOOLTIP = 'Add or remove object props';
window.Blockly.Msg.SAP_NEW_TABLE_PARAM_CONTAINER_TITLE = 'Prop';
window.Blockly.Msg.SAP_NEW_TABLE_PARAM_CONTAINER_TOOLTIP = 'Add an props to the new object';

window.Blockly.Blocks.new_obj = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {window.Blockly.Block}
     */
    init () {
        // this.setHelpUrl(window.Blockly.Msg['SAP_NEW_TABLE_HELPURL']);
        this.setStyle('SAP');
        this.setInputsInline(false);
        this.itemCount_ = 3;
        this.updateShape_();
        this.setOutput(true);
        this.setMutator(new window.Blockly.Mutator(['new_obj_param']));
        // this.setTooltip(window.Blockly.Msg['SAP_NEW_TABLE_TOOLTIP']);
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
    domToMutation (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!window.Blockly.Workspace} workspace Mutator's workspace.
     * @return {!window.Blockly.Block} Root block in mutator.
     * @this {window.Blockly.Block}
     */
    decompose (workspace) {
        const containerBlock = workspace.newBlock('sap_call_method_container');
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.itemCount_; i++) {
            const itemBlock = workspace.newBlock('new_obj_param');
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
        // Count number of inputs.
        const connections = [];
        while (itemBlock && !itemBlock.isInsertionMarker()) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (let i = 0; i < this.itemCount_; i++) {
            const connection = this.getInput('PROP' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (let i = 0; i < this.itemCount_; i++) {
            window.Blockly.Mutator.reconnect(connections[i], this, 'PROP' + i);
        }
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
            const input = this.getInput('PROP' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
    rebuildShape_ () {
        this.updateShape_();
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {window.Blockly.Block}
     */
    updateShape_ () {
        if (this.getInput('EMPTY')){
            this.removeInput('EMPTY');
        }
        let i = 0;

        while (this.getInput('PROP' + i)) {
            this.removeInput('PROP' + i);
            i++;
        }
        if (this.itemCount_) {
            this.appendDummyInput('EMPTY')
                .appendField(window.Blockly.Msg.SABY_NEW_OBJECT)
                .appendField(window.Blockly.Msg.SABY_NEW_OBJECT_CONTAINER_TITLE_ADD);

        } else {
            this.appendValueInput('EMPTY')
                .appendField(window.Blockly.Msg.SABY_NEW_OBJECT)
                .appendField(window.Blockly.Msg.SABY_NEW_OBJECT_TYPE_TITLE)
                .appendField(new window.Blockly.FieldTextInput(''), 'TYPE');
        }

        for (i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('PROP' + i)) {
                this.appendValueInput('PROP' + i)
                    .setAlign(window.Blockly.ALIGN_RIGHT)
                    .appendField('key')
                    .appendField(new window.Blockly.FieldTextInput(''), `PARAM${i}_NAME`)
                    .appendField(window.Blockly.Msg.SAP_NEW_TABLE_TYPE_TITLE)
                    .appendField(new window.Blockly.FieldTextInput(''), `PARAM${i}_TYPE`);
            }
        }
        // this.setNextStatement(true, null);
        // Remove deleted inputs.
    }
};
window.Blockly.Blocks.sap_call_method_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init () {
        this.setStyle('list_blocks');
        this.appendDummyInput()
            .appendField(window.Blockly.Msg.SAP_NEW_TABLE_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.SAP_NEW_TABLE_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};
window.Blockly.Blocks.new_obj_param = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init () {
        this.setStyle('list_blocks');
        this.appendDummyInput()
            .appendField(window.Blockly.Msg.SAP_NEW_TABLE_PARAM_CONTAINER_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.SAP_NEW_TABLE_PARAM_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
