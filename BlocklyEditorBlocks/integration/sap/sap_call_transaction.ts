/* tslint:disable */
window.Blockly.Msg.SAP_CALL_TRANSACTION = 'Call Transaction';
window.Blockly.Msg.SAP_CALL_TRANSACTION_TOOLTIP = 'BlockType: sap_call_transaction';
window.Blockly.Msg.SAP_CALL_TRANSACTION_CONTAINER_TITLE_ADD = 'Method';
window.Blockly.Msg.SAP_CALL_TRANSACTION_CONTAINER_TOOLTIP = 'Add or remove method params';
window.Blockly.Msg.SAP_CALL_TRANSACTION_PARAM_CONTAINER_TITLE = 'Using';
window.Blockly.Msg.SAP_CALL_TRANSACTION_PARAM_CONTAINER_TOOLTIP = 'Add an param to the call method';
window.Blockly.Msg.SAP_CALL_TRANSACTION_HELPURL =
    'https://n.sbis.ru/article/fc8c2a1a-f82b-4b8f-b13c-54a086fe5776';

window.Blockly.Blocks.sap_call_transaction = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setHelpUrl(window.Blockly.Msg.SAP_CALL_TRANSACTION_HELPURL);
        this.setStyle('SAP');
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.itemCount_ = 1;
        this.updateShape_();
        // this.setOutput(true, 'Array');
        this.setMutator(new window.Blockly.Mutator(['sap_call_transaction_method_param']));
        this.setTooltip(window.Blockly.Msg.SAP_CALL_TRANSACTION_TOOLTIP);
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
        const containerBlock = workspace.newBlock('sap_call_transaction_method_container');
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.itemCount_; i++) {
            const itemBlock = workspace.newBlock('sap_call_transaction_method_param');
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
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {window.Blockly.Block}
     */
    updateShape_() {
        if (!this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
                .appendField(window.Blockly.Msg.SAP_CALL_TRANSACTION)
                .appendField(new window.Blockly.FieldTextInput(''), 'NAME');
            this.appendDummyInput()
                .appendField('UPDMODE')
                .appendField(
                    new window.Blockly.FieldDropdown([
                        ['Локально', 'L'],
                        ['Синхронно', 'S'],
                        ['Асинхронно', 'A'],
                    ]),
                    'UPDMODE'
                );
            this.appendDummyInput()
                .appendField('CATTMODE')
                .appendField(
                    new window.Blockly.FieldDropdown([
                        ['CATT без упр.', 'N'],
                        ['CATT с упр.', 'A'],
                        ['Без CATT', ''],
                    ]),
                    'CATTMODE'
                );
            this.appendDummyInput()
                .appendField('DISMODE')
                .appendField(
                    new window.Blockly.FieldDropdown([
                        ['Просмотр экранов', 'A'],
                        ['Просмотр ошибок', 'E'],
                        ['Фоновая обработка', 'N'],
                        ['Фон. и для отладки', 'P'],
                    ]),
                    'DISMODE'
                );
            this.appendDummyInput()
                .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'DEFSIZE')
                .appendField('DEFSIZE');
            this.appendDummyInput()
                .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'RACOMMIT')
                .appendField('RACOMMIT');
            this.appendDummyInput()
                .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'NOBINPT')
                .appendField('NOBINPT');
            this.appendDummyInput()
                .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'NOBIEND')
                .appendField('NOBIEND');
        }
        let i;
        for (i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('PARAM' + i)) {
                this.appendValueInput('PARAM' + i)
                    .appendField('USING key')
                    .appendField(new window.Blockly.FieldTextInput(''), `PARAM${i}_NAME`);
            }
        }
        // this.setNextStatement(true, null);
        // Remove deleted inputs.
        while (this.getInput('PARAM' + i)) {
            this.removeInput('PARAM' + i);
            i++;
        }
    },
};
window.Blockly.Blocks.sap_call_transaction_method_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(
            window.Blockly.Msg.SAP_CALL_TRANSACTION_CONTAINER_TITLE_ADD
        );
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.SAP_CALL_TRANSACTION_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
window.Blockly.Blocks.sap_call_transaction_method_param = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(
            window.Blockly.Msg.SAP_CALL_TRANSACTION_PARAM_CONTAINER_TITLE
        );
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.SAP_CALL_TRANSACTION_PARAM_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
