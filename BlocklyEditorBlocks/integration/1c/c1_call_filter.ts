/* tslint:disable */
window.Blockly.Msg.C1_CALL_FILTER = 'Отбор';
window.Blockly.Msg.C1_CALL_FILTER_TOOLTIP = 'BlockType: c1_call_filter';
window.Blockly.Msg.C1_CALL_FILTER_CONTAINER_TITLE_ADD = 'Отбор';
window.Blockly.Msg.C1_CALL_FILTER_CONTAINER_TOOLTIP = 'Add or remove method params';
window.Blockly.Msg.C1_CALL_FILTER_PARAM_CONTAINER_TITLE = 'Param';
window.Blockly.Msg.C1_CALL_FILTER_PARAM_CONTAINER_TOOLTIP = 'Add an param to the filter';
window.Blockly.Msg.C1_CALL_FILTER_ORDERED = 'Упорядочить';
window.Blockly.Msg.C1_CALL_FILTER_LIMIT_ONE = 'Вернуть одну запись';
window.Blockly.Msg.C1_CALL_FILTER_HELPURL =
    'https://n.sbis.ru/article/53ab2233-5b29-42dd-982a-8e04b7fe646f';

window.Blockly.Blocks.c1_call_filter = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setHelpUrl(window.Blockly.Msg.C1_CALL_FILTER_HELPURL);
        this.setStyle('1С');
        this.setOutput(true, null);
        this.setInputsInline(false);
        // this.setColour(230);
        this.itemCount_ = 0;
        this.updateShape_();
        // this.setOutput(true, 'Array');
        this.setMutator(new window.Blockly.Mutator(['c1_call_filter_param']));
        this.setTooltip(window.Blockly.Msg.C1_CALL_FILTER_TOOLTIP);
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this {window.Blockly.Block}
     */
    mutationToDom() {
        const container = window.Blockly.utils.xml.createElement('mutation');
        container.setAttribute('LIMIT_ONE', this.limitOne_ ? 'TRUE' : 'FALSE');
        container.setAttribute('ORDERED', this.ordered_ ? 'TRUE' : 'FALSE');
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
        this.limitOne_ = xmlElement.getAttribute('LIMIT_ONE') === 'TRUE';
        this.ordered_ = xmlElement.getAttribute('ORDERED') === 'TRUE';
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!window.Blockly.Workspace} workspace Mutator's workspace.
     * @return {!window.Blockly.Block} Root block in mutator.
     * @this {window.Blockly.Block}
     */
    decompose(workspace) {
        const containerBlock = workspace.newBlock('c1_call_filter_container');
        containerBlock.initSvg();
        containerBlock.setFieldValue(this.limitOne_, 'LIMIT_ONE');
        containerBlock.setFieldValue(this.ordered_, 'ORDERED');

        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.itemCount_; i++) {
            const itemBlock = workspace.newBlock('c1_call_filter_param');
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
        this.limitOne_ = containerBlock.getFieldValue('LIMIT_ONE') === 'TRUE';
        this.ordered_ = containerBlock.getFieldValue('ORDERED') === 'TRUE';

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
        if (!this.getInput('filter')) {
            this.appendValueInput('filter')
                .appendField('Отобрать')
                .appendField(this.limitOne_ ? 'одну' : 'все', 'LIMIT')
                .appendField('из');
        }
        this.setFieldValue(this.limitOne_ ? 'одну' : 'все', 'LIMIT');
        let i = 0;
        // this.setNextStatement(true, null);
        // Remove deleted inputs.
        for (i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('PARAM' + i)) {
                this.appendValueInput('PARAM' + i)
                    .setAlign(window.Blockly.ALIGN_RIGHT)
                    .appendField('где')
                    .appendField(new window.Blockly.FieldTextInput(''), `FIELD${i}_NAME`)
                    .appendField(
                        new window.Blockly.FieldDropdown([
                            ['=', '='],
                            ['<>', '<>'],
                            ['>', '>'],
                            ['<', '<'],
                            ['>=', '>='],
                            ['<=', '<='],
                            ['in', 'in'],
                        ]),
                        `PARAM${i}_TYPE`
                    );
            }
        }
        if (this.ordered_) {
            if (!this.getInput('ORDERED')) {
                this.appendDummyInput('ORDERED')
                    .setAlign(window.Blockly.ALIGN_RIGHT)
                    .appendField('Упрорядочить ')
                    .appendField(new window.Blockly.FieldTextInput(''), 'ORDERED_FIELD')
                    .appendField(
                        new window.Blockly.FieldDropdown([
                            ['По возрастанию', 'ASC'],
                            ['По убыванию', 'DESC'],
                        ]),
                        'ORDERED_DIRECTION'
                    );
            }
        } else {
            if (this.getInput('ORDERED')) {
                this.removeInput('ORDERED');
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
window.Blockly.Blocks.c1_call_filter_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.C1_CALL_FILTER_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.appendDummyInput()
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField(window.Blockly.Msg.C1_CALL_FILTER_LIMIT_ONE)
            .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'LIMIT_ONE');
        this.appendDummyInput()
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField(window.Blockly.Msg.C1_CALL_FILTER_ORDERED)
            .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'ORDERED');
        this.setTooltip(window.Blockly.Msg.C1_CALL_FILTER_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
window.Blockly.Blocks.c1_call_filter_param = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(
            window.Blockly.Msg.C1_CALL_FILTER_PARAM_CONTAINER_TITLE
        );
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.C1_CALL_FILTER_PARAM_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
