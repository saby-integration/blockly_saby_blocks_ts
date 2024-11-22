/* tslint:disable */
window.Blockly.Msg.INDICATOR_TURNOVER_BETWEEN_ACCOUNTS = 'Сальдо конечное';
window.Blockly.Msg.INDICATOR_TURNOVER_BETWEEN_ACCOUNTS_CONTAINER_TITLE_ADD = 'Method';
window.Blockly.Msg.INDICATOR_TURNOVER_BETWEEN_ACCOUNTS_CONTAINER_TOOLTIP = 'Add or remove method params';
window.Blockly.Msg.INDICATOR_TURNOVER_BETWEEN_ACCOUNTS_PARAM_CONTAINER_TITLE = 'Using';
window.Blockly.Msg.INDICATOR_TURNOVER_BETWEEN_ACCOUNTS_PARAM_CONTAINER_TOOLTIP = 'Add an param to the call method';

window.Blockly.Blocks.indicator_turnover_between_accounts = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {window.Blockly.Block}
     */
    init () {
        // this.setHelpUrl(window.Blockly.Msg['INDICATOR_TURNOVER_BETWEEN_ACCOUNTS_HELPURL']);
        this.setStyle('SABY ЭДО');
        this.setInputsInline(false);
        // this.setPreviousStatement(true, null);
        // this.setNextStatement(true, null);
        this.itemCount_ = 0;
        this.updateShape_();
        this.setOutput(true);
        // this.setMutator(new window.Blockly.Mutator(['indicator_turnover_between_accounts_method_param']));
        // this.setTooltip(window.Blockly.Msg['INDICATOR_TURNOVER_BETWEEN_ACCOUNTS_TOOLTIP']);
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
        const containerBlock = workspace.newBlock('indicator_turnover_between_accounts_method_container');
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.itemCount_; i++) {
            const itemBlock = workspace.newBlock('indicator_turnover_between_accounts_method_param');
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
    saveConnections (containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock('STACK');
        let i = 0;
        while (itemBlock) {
            const input = this.getInput('PARAM' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
        }
    },
    updateShape_ () {
        if (!this.getInput('EMPTY')){
            this.appendDummyInput('EMPTY')
                .appendField(window.Blockly.Msg.INDICATOR_TURNOVER_BETWEEN_ACCOUNTS)
                .appendField(new window.Blockly.FieldTextInput(''), 'NAME');
            this.appendValueInput('ACCOUNT').appendField('Номер счета');
            this.appendValueInput('FACE1').appendField('Аналитика 1');
            this.appendValueInput('FACE2').appendField('Аналитика 2');
            this.appendValueInput('FACE3').appendField('Аналитика 3');
            this.appendValueInput('DATE').appendField('Дата');
            this.appendValueInput('ORG').appendField('Организация');
        }
        let i;
        for (i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('PARAM' + i)) {
                this.appendValueInput('PARAM' + i)
                    .appendField('USING key')
                    .appendField(new window.Blockly.FieldTextInput(''), `PARAM${i}_NAME`);
            }
        }
        while (this.getInput('PARAM' + i)) {
            this.removeInput('PARAM' + i);
            i++;
        }
    }
};
window.Blockly.Blocks.indicator_turnover_between_accounts_method_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init () {
        this.setStyle('SABY ЭДО');
        this.appendDummyInput()
            .appendField(window.Blockly.Msg.INDICATOR_TURNOVER_BETWEEN_ACCOUNTS_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.INDICATOR_TURNOVER_BETWEEN_ACCOUNTS_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};
window.Blockly.Blocks.indicator_turnover_between_accounts_method_param = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init () {
        this.setStyle('SABY ЭДО');
        this.appendDummyInput()
            .appendField(window.Blockly.Msg.INDICATOR_TURNOVER_BETWEEN_ACCOUNTS_PARAM_CONTAINER_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.INDICATOR_TURNOVER_BETWEEN_ACCOUNTS_PARAM_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
