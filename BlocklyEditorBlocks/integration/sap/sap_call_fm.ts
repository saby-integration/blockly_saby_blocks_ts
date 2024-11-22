/* tslint:disable */
window.Blockly.Msg.SAP_CALL_FM = 'Call FM';
window.Blockly.Msg.SAP_CALL_FM_TOOLTIP = 'BlockType: sap_call_fm';
window.Blockly.Msg.SAP_CALL_FM_CONTAINER_TITLE_ADD = 'Method';
window.Blockly.Msg.SAP_CALL_FM_CONTAINER_TOOLTIP = 'Add or remove method params';
window.Blockly.Msg.SAP_CALL_FM_PARAM_CONTAINER_TITLE = 'Param';
window.Blockly.Msg.SAP_CALL_FM_PARAM_CONTAINER_TOOLTIP = 'Add an param to the call method';
window.Blockly.Msg.SAP_CALL_FM_HELPURL = 'https://n.sbis.ru/article/22b2443e-b6d0-4618-8748-e85b439d7a9c';

window.Blockly.Blocks.sap_call_fm = {
    init() {
        this.setHelpUrl(window.Blockly.Msg.SAP_CALL_FM_HELPURL);
        this.setStyle();
        this.setStyle('SAP');
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.itemCount_ = 3;
        this.updateShape_();
        this.setMutator(new window.Blockly.Mutator(['sap_call_method_param']));
        this.setTooltip(window.Blockly.Msg.SAP_CALL_FM_TOOLTIP);
    },

    mutationToDom() {
        const container = window.Blockly.utils.xml.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },

    domToMutation(xmlElement: Element) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },

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

    compose(containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock('STACK');
        const connections = [];
        while (itemBlock && !itemBlock.isInsertionMarker()) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
        }
        for (let i = 0; i < this.itemCount_; i++) {
            const connection = this.getInput('PARAM' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) === -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        for (let i = 0; i < this.itemCount_; i++) {
            window.Blockly.Mutator.reconnect(connections[i], this, 'PARAM' + i);
        }
    },

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

    updateShape_() {
        if (!this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
                .appendField(window.Blockly.Msg.SAP_CALL_FM)
                .appendField(new window.Blockly.FieldTextInput(''), 'NAME');
        }
        let i;
        for (i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('PARAM' + i)) {
                this.appendValueInput('PARAM' + i)
                    .appendField(
                        new window.Blockly.FieldDropdown([
                            ['Importing', 'Importing'],
                            ['Exporting', 'Exporting'],
                            ['Changing', 'Changing'],
                            ['Table', 'Table'],
                        ]),
                        `PARAM${i}_TYPE`
                    )
                    .appendField(new window.Blockly.FieldTextInput(''), `PARAM${i}_NAME`);
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
        this.appendDummyInput().appendField(window.Blockly.Msg.SAP_CALL_FM_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.SAP_CALL_FM_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
window.Blockly.Blocks.sap_call_method_param = {
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.SAP_CALL_FM_PARAM_CONTAINER_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.SAP_CALL_FM_PARAM_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
