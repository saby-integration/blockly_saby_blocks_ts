/* tslint:disable */
window.Blockly.Msg.SAP_CALL_SELECT = 'Select';
window.Blockly.Msg.SAP_CALL_SELECT_TOOLTIP = 'BlockType: sap_call_select';
window.Blockly.Msg.SAP_CALL_SELECT_CONTAINER_TITLE_ADD = 'Select';
window.Blockly.Msg.SAP_CALL_SELECT_CONTAINER_TOOLTIP = 'Add or remove method params';
window.Blockly.Msg.SAP_CALL_SELECT_PARAM_CONTAINER_TITLE = 'Field';
window.Blockly.Msg.SAP_CALL_SELECT_PARAM_CONTAINER_TOOLTIP = 'Add an field to the select';
window.Blockly.Msg.SAP_CALL_SELECT_HELPURL =
    'https://n.sbis.ru/article/a3774722-0e07-4f8f-a94f-25df1c3ccb9e';

window.Blockly.Blocks.sap_call_select = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setHelpUrl(window.Blockly.Msg.SAP_CALL_SELECT_HELPURL);
        this.setStyle('SAP');
        this.setOutput(true, null);
        this.setInputsInline(false);
        // this.setColour(230);
        this.itemCount_ = 0;
        this.updateShape_();
        // this.setOutput(true, 'Array');
        this.setMutator(new window.Blockly.Mutator(['sap_call_method_param']));
        this.setTooltip(window.Blockly.Msg.SAP_CALL_SELECT_TOOLTIP);
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this {window.Blockly.Block}
     */
    mutationToDom() {
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
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!window.Blockly.Workspace} workspace Mutator's workspace.
     * @return {!window.Blockly.Block} Root block in mutator.
     * @this {window.Blockly.Block}
     */
    decompose(workspace) {
        const containerBlock = workspace.newBlock('sap_call_method_container');
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.itemCount_; i++) {
            const itemBlock = workspace.newBlock('sap_call_method_param');
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
    compose(containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        const connections = [];
        while (itemBlock && !itemBlock.isInsertionMarker()) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (let i = 0; i < this.itemCount_; i++) {
            const connection = this.getInput('PARAM' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (let i = 0; i < this.itemCount_; i++) {
            window.Blockly.Mutator.reconnect(connections[i], this, 'PARAM' + i);
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!window.Blockly.Block} containerBlock Root block in mutator.
     * @this {window.Blockly.Block}
     */
    saveConnections(containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock('STACK');
        let i = 0;
        while (itemBlock) {
            const input = this.getInput('PARAM' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
        }
    },
    // rebuildShape_: function () {
    //     this.updateShape_();
    // },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {window.Blockly.Block}
     */
    updateShape_() {
        if (!this.getInput('select')) {
            this.appendDummyInput('select').appendField('select');
            this.appendValueInput('from').appendField('from');
            this.appendValueInput('where').appendField('where');
            this.appendValueInput('order_by').appendField('order by');
            this.appendValueInput('group_by').appendField('group by');
            this.appendValueInput('having').appendField('having');
            this.appendValueInput('limit').appendField('limit');
            this.appendValueInput('offset').appendField('offset');
            this.appendStatementInput('loop_handler').appendField('for any item');
            // this.appendValueInput("item_format")
            //     .setCheck(null)
            //     .appendField("item format");
            // this.appendDummyInput()
            //     .appendField("result format")
            //     .appendField(new window.Blockly.FieldDropdown([
            //         ["rows", "rows"],
            //         ["object", "object"],
            //         // ["inline","inline"]
            //     ]), "result_format");
        }
        let i = 0;
        for (i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('PARAM' + i)) {
                this.appendValueInput('PARAM' + i)
                    .appendField('field')
                    .appendField(new window.Blockly.FieldTextInput(''), `FIELD${i}_NAME`)
                    .appendField('as')
                    .appendField(new window.Blockly.FieldTextInput(''), `FIELD${i}_AS`)
                    .appendField('type');
            }
        }
        while (this.getInput('PARAM' + i)) {
            this.removeInput('PARAM' + i);
            i++;
        }
    },
};
window.Blockly.Blocks.sap_call_method_container = {
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.SAP_CALL_SELECT_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.SAP_CALL_SELECT_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
window.Blockly.Blocks.sap_call_method_param = {
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(
            window.Blockly.Msg.SAP_CALL_SELECT_PARAM_CONTAINER_TITLE
        );
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.SAP_CALL_SELECT_PARAM_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
