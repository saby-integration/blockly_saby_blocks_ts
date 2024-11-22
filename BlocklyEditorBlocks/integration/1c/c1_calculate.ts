/* tslint:disable */
window.Blockly.Msg.C1_CALCULATE_TOOLTIP = 'Блок позволяет вычислить выражение на языке 1С. BlockType: c1_calculate';
window.Blockly.Msg.C1_CALCULATE_CONTAINER_TOOLTIP = 'Добавить аргумент';
window.Blockly.Msg.C1_CALCULATE_PARAM_CONTAINER_TITLE = 'Аргумент';
window.Blockly.Msg.C1_CALCULATE_PARAM_CONTAINER_TOOLTIP = 'Добавить аргумент';
window.Blockly.Msg.C1_CALCULATE_TITLE = 'Вычислить в 1С';
window.Blockly.Msg.C1_CALCULATE_PARAMS_TITLE = 'с аргументами';
window.Blockly.Msg.C1_CALCULATE_HELPURL = 'https://n.sbis.ru/article/3b5b44bf-8985-47ba-b29c-98ea3bb38f67';

window.Blockly.Blocks.c1_calculate = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setHelpUrl(window.Blockly.Msg.C1_CALCULATE_HELPURL);
        this.setStyle('1С');
        this.setOutput(true, null);
        this.setInputsInline(false);
        this.itemCount_ = 0;
        this.updateShape_();
        this.setMutator(new window.Blockly.Mutator(['c1_calculate_param']));
        this.setTooltip(window.Blockly.Msg.C1_CALCULATE_TOOLTIP);
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
        const containerBlock = workspace.newBlock('c1_calculate_container');
        containerBlock.initSvg();

        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.itemCount_; i++) {
            const itemBlock = workspace.newBlock('c1_calculate_param');
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
        if (!this.getInput('NAME')) {
            this.appendValueInput('NAME')
                .appendField(window.Blockly.Msg.C1_CALCULATE_TITLE);
        }
        let i = 0;
        // Remove deleted inputs.
        for (i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('PARAM' + i)) {
                if (i === 0) {
                    this.appendValueInput('PARAM' + i)
                    .appendField(window.Blockly.Msg.C1_CALCULATE_PARAMS_TITLE)
                    .setAlign(window.Blockly.ALIGN_RIGHT);
                }
                else {
                    this.appendValueInput('PARAM' + i);
                }
            }
        }
        while (this.getInput('PARAM' + i)) {
            this.removeInput('PARAM' + i);
            i++;
        }
    },
};
window.Blockly.Blocks.c1_calculate_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('1С');
        this.appendDummyInput().appendField(window.Blockly.Msg.C1_CALCULATE_TITLE);
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.C1_CALCULATE_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
window.Blockly.Blocks.c1_calculate_param = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('1С');
        this.appendDummyInput().appendField(
            window.Blockly.Msg.C1_CALCULATE_PARAM_CONTAINER_TITLE
        );
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.C1_CALCULATE_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};

// согласно диалогу https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
