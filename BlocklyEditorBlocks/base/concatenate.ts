/* tslint:disable */
window.Blockly.Msg.CONCATENATE = 'concatenate';
window.Blockly.Msg.CONCATENATE_SEPARATOR = 'add separator';
window.Blockly.Msg.CONCATENATE_CONTAINER_TITLE_ADD = 'Obj';
window.Blockly.Msg.CONCATENATE_CONTAINER_TOOLTIP = 'Add or remove elem';
window.Blockly.Msg.CONCATENATE_PARAM_CONTAINER_TITLE = 'Elem';
window.Blockly.Msg.CONCATENATE_PARAM_CONTAINER_TOOLTIP = 'Add elem to concatenate';
window.Blockly.Msg.CONCATENATE_TOOLTIP = 'BlockType: concatenate';
window.Blockly.Msg.CONCATENATE_HELPURL =
    'https://n.sbis.ru/article/f03cda77-63e4-4617-a930-6ff4c3b01a95';

window.Blockly.Blocks.concatenate = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setHelpUrl(window.Blockly.Msg.CONCATENATE_HELPURL);
        this.setStyle('text_blocks');
        this.setInputsInline(false);
        this.itemCount_ = 3;
        this.updateShape_();
        this.setOutput(true);
        this.setMutator(new window.Blockly.Mutator(['concat_mutator']));
        this.setTooltip(window.Blockly.Msg.CONCATENATE_TOOLTIP);
    },

    mutationToDom() {
        const container = window.Blockly.utils.xml.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },

    domToMutation(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },

    decompose(workspace) {
        const containerBlock = workspace.newBlock('concatenate_container');
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.itemCount_; i++) {
            const itemBlock = workspace.newBlock('concat_mutator');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },

    compose(containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock('STACK');
        const connections = [];
        while (itemBlock && !itemBlock.isInsertionMarker()) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
        }
        for (let i = 0; i < this.itemCount_; i++) {
            const connection = this.getInput('PROP' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) === -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        for (let i = 0; i < this.itemCount_; i++) {
            window.Blockly.Mutator.reconnect(connections[i], this, 'PROP' + i);
        }
    },

    saveConnections(containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock('STACK');
        let i = 0;
        while (itemBlock) {
            const input = this.getInput('PROP' + i);
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
            this.appendDummyInput('EMPTY').appendField(window.Blockly.Msg.CONCATENATE);
            this.appendDummyInput('EMPTY')
                .appendField(window.Blockly.Msg.CONCATENATE_SEPARATOR)
                .appendField(
                    new window.Blockly.FieldDropdown([
                        ['Нет', ''],
                        ['Пробел', 'space'],
                        [';', ';'],
                        ['-', '-'],
                        ['|', '|'],
                        ['.', '.'],
                        ['_', '_'],
                        ['/', '/'],
                    ]),
                    'SEPARATOR'
                );
            // .appendField(new window.Blockly.FieldTextInput(""), `SEPARATOR`)
        }
        let i;
        for (i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('PROP' + i)) {
                this.appendValueInput('PROP' + i);
            }
        }
        // this.setNextStatement(true, null);
        // Remove deleted inputs.
        while (this.getInput('PROP' + i)) {
            this.removeInput('PROP' + i);
            i++;
        }
    },
};
window.Blockly.Blocks.concatenate_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.CONCATENATE_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.CONCATENATE_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
window.Blockly.Blocks.concat_mutator = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.CONCATENATE_PARAM_CONTAINER_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.CONCATENATE_PARAM_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
