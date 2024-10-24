/* tslint:disable */
window.Blockly.Msg.INDICATOR_OPENING_BALANCE = 'Сальдо начальное';
window.Blockly.Msg.INDICATOR_OPENING_BALANCE_CONTAINER_TITLE_ADD = 'Method';
window.Blockly.Msg.INDICATOR_OPENING_BALANCE_CONTAINER_TOOLTIP = 'Add or remove method params';
window.Blockly.Msg.INDICATOR_OPENING_BALANCE_PARAM_CONTAINER_TITLE = 'Using';
window.Blockly.Msg.INDICATOR_OPENING_BALANCE_PARAM_CONTAINER_TOOLTIP = 'Add an param to the call method';
window.Blockly.Msg.INDICATOR_OPENING_BALANCE_TOOLTIP = 'BlockType: indicator_opening_balance';

window.Blockly.Blocks.indicator_opening_balance = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {window.Blockly.Block}
     */
    init () {
        this.setStyle('SABY ЭДО');
        this.setInputsInline(false);
        this.itemCount_ = 0;
        this.updateShape_();
        this.setOutput(true);
        this.setTooltip(window.Blockly.Msg.INDICATOR_OPENING_BALANCE_TOOLTIP);
    },

    mutationToDom () {
        const container = window.Blockly.utils.xml.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },

    domToMutation (xmlElement: Element) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },

    decompose (workspace) {
        const containerBlock = workspace.newBlock('indicator_opening_balance_method_container');
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.itemCount_; i++) {
            const itemBlock = workspace.newBlock('indicator_opening_balance_method_param');
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
        if (!this.getInput('EMPTY')){
            this.appendDummyInput('EMPTY')
                .appendField(window.Blockly.Msg.INDICATOR_OPENING_BALANCE)
                .appendField(new window.Blockly.FieldTextInput(''), 'NAME');
            this.appendValueInput('ACCOUNT')
                .appendField('Номер счета');
            this.appendValueInput('FACE1')
                .appendField('Аналитика 1');
            this.appendValueInput('FACE2')
                .appendField('Аналитика 2');
            this.appendValueInput('FACE3')
                .appendField('Аналитика 3');
            this.appendValueInput('DATE')
                .appendField('Дата');
            this.appendValueInput('ORG')
                .appendField('Организация');
        }
        // let i;
        // for (i = 0; i < this.itemCount_; i++) {
        //     if (!this.getInput('PARAM' + i)) {
        //         this.appendValueInput('PARAM' + i)
        //             .appendField('USING key')
        //             .appendField(new window.Blockly.FieldTextInput(""), `PARAM${i}_NAME`);
        //     }
        // }
        // // this.setNextStatement(true, null);
        // // Remove deleted inputs.
        // while (this.getInput('PARAM' + i)) {
        //     this.removeInput('PARAM' + i);
        //     i++;
        // }
    }
};
window.Blockly.Blocks.indicator_opening_balance_method_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init () {
        this.setStyle('SABY ЭДО');
        this.appendDummyInput()
            .appendField(window.Blockly.Msg.INDICATOR_OPENING_BALANCE_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.INDICATOR_OPENING_BALANCE_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};
window.Blockly.Blocks.indicator_opening_balance_method_param = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init () {
        this.setStyle('SABY ЭДО');
        this.appendDummyInput()
            .appendField(window.Blockly.Msg.INDICATOR_OPENING_BALANCE_PARAM_CONTAINER_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.INDICATOR_OPENING_BALANCE_PARAM_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
