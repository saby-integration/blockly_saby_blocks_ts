/* tslint:disable */
window.Blockly.Msg.EXTSYS_CALC_INI = 'Calc ini';
window.Blockly.Msg.EXTSYS_CALC_INI_CONTAINER_TITLE_ADD = 'Calc ini';
window.Blockly.Msg.EXTSYS_CALC_INI_CONTAINER_TOOLTIP = 'Add or remove method params';
window.Blockly.Msg.EXTSYS_CALC_INI_VALUE_CONTAINER_TITLE = 'Param';
window.Blockly.Msg.EXTSYS_CALC_INI_VALUE_CONTAINER_TOOLTIP = 'Add an param to the select';
window.Blockly.Msg.EXTSYS_CALC_INI_TOOLTIP = 'BlockType: extsys_calc_ini';
window.Blockly.Msg.EXTSYS_CALC_INI_HELPURL =
    'https://n.sbis.ru/article/bbd77c1a-669c-4834-b3b1-111f1fe34f44';
window.Blockly.Msg.CALC_INI_TOOLTIP = 'BlockType: calc_ini';
window.Blockly.Msg.CALC_INI_HELPURL =
    'https://n.sbis.ru/article/dd82f378-daf1-4d07-bfef-eed86ce154b7';

function calc_ini(title, blockId) {
    return {
        /**
         * Block for creating a list with any number of elements of any type.
         * @this {window.Blockly.Block}
         */
        init() {
            this.setHelpUrl(window.Blockly.Msg.EXTSYS_CALC_INI_HELPURL);
            switch (blockId) {
                case 'extsys_calc_ini':
                    this.setStyle('SABY ЭДО');
                    this.setHelpUrl(window.Blockly.Msg.EXTSYS_CALC_INI_HELPURL);
                    break;
                default:
                    this.setStyle('procedure_blocks');
                    this.setHelpUrl(window.Blockly.Msg.CALC_INI_HELPURL);
                    break;
            }
            this.setOutput(true, null);
            this.setInputsInline(false);
            this.itemCount_ = 0;
            this.updateShape_();
            // this.setOutput(true, 'Array');
            this.setMutator(new window.Blockly.Mutator(['extsys_cacl_ini_param']));
            this.setTooltip(window.Blockly.Msg[`${blockId.toUpperCase()}_TOOLTIP`]);
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
            const containerBlock = workspace.newBlock('extsys_cacl_ini_container');
            containerBlock.initSvg();
            let connection = containerBlock.getInput('STACK').connection;
            for (let i = 0; i < this.itemCount_; i++) {
                const itemBlock = workspace.newBlock('extsys_cacl_ini_param');
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
            // Count number of inputs.
            // this.optionList_.length = 0;
            // this.itemCount_ = 0
            const data = [];

            // сохраняем пользовательские параметры
            let optionBlock = containerBlock.getInputTargetBlock('STACK');
            while (optionBlock) {
                // this.itemCount_ += 1
                data.push(optionBlock.userData_);
                optionBlock =
                    optionBlock.nextConnection && optionBlock.nextConnection.targetBlock();
            }
            optionBlock = containerBlock.getInputTargetBlock('STACK');

            const connections = [];
            while (optionBlock && !optionBlock.isInsertionMarker()) {
                connections.push(optionBlock.valueConnection_);
                optionBlock =
                    optionBlock.nextConnection && optionBlock.nextConnection.targetBlock();
            }
            // Disconnect any children that don't belong.
            for (let i = 0; i < this.itemCount_; i++) {
                const connection = this.getInput(`PARAM${i}_VALUE`).connection.targetConnection;
                if (connection && connections.indexOf(connection) === -1) {
                    connection.disconnect();
                }
            }
            this.itemCount_ = connections.length;
            this.updateShape_();
            // Restore any data.
            for (let i = 0; i < data.length; i++) {
                const userData = data[i];
                if (userData !== undefined) {
                    this.setFieldValue(userData.name, `PARAM${i}_NAME`);
                    // this.setFieldValue(data[i][1] || 'OPTIONNAME', 'CPU' + i);
                }
            }
            for (let i = 0; i < this.itemCount_; i++) {
                window.Blockly.Mutator.reconnect(connections[i], this, `PARAM${i}_VALUE`);
            }
        },
        /**
         * Store pointers to any connected child blocks.
         * @param {!window.Blockly.Block} containerBlock Root block in mutator.
         * @this {window.Blockly.Block}
         */
        saveConnections(containerBlock) {
            let optionBlock = containerBlock.getInputTargetBlock('STACK');
            let i = 0;
            while (optionBlock) {
                const input = this.getInput(`PARAM${i}_VALUE`);
                optionBlock.valueConnection_ = input && input.connection.targetConnection;
                optionBlock.userData_ = this.getUserData(i);
                i++;
                optionBlock =
                    optionBlock.nextConnection && optionBlock.nextConnection.targetBlock();
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
            if (!this.getInput('INI_NAME')) {
                this.appendValueInput('INI_NAME').appendField(title);
                this.appendDummyInput()
                    .appendField('endpoint')
                    .appendField(new window.Blockly.FieldTextInput(''), 'ENDPOINT');
            }
            let i = 0;
            // this.setNextStatement(true, null);
            // Remove deleted inputs.
            for (i = 0; i < this.itemCount_; i++) {
                if (!this.getInput(`PARAM${i}_VALUE`)) {
                    this.appendValueInput(`PARAM${i}_VALUE`)
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField(
                            window.Blockly.Msg[
                                'window.Blockly.Msg.EXTSYS_CALC_INI_VALUE_CONTAINER_TITLE'
                            ]
                        )
                        .appendField(new window.Blockly.FieldTextInput(''), `PARAM${i}_NAME`)
                        .appendField('set');
                }
            }
            // this.setNextStatement(true, null);
            // Remove deleted inputs.
            while (this.getInput(`PARAM${i}_VALUE`)) {
                this.removeInput(`PARAM${i}_VALUE`);
                i++;
            }
        },
        getUserData(n) {
            return {
                name: this.getFieldValue(`PARAM${n}_NAME`),
            };
        },
    };
}

window.Blockly.Blocks.extsys_calc_ini = calc_ini('Ext Calc ini', 'extsys_calc_ini');
window.Blockly.Blocks.calc_ini = calc_ini('Calc ini', 'calc_ini');

window.Blockly.Blocks.extsys_cacl_ini_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.EXTSYS_CALC_INI_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.EXTSYS_CALC_INI_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
window.Blockly.Blocks.extsys_cacl_ini_param = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(
            window.Blockly.Msg.EXTSYS_CALC_INI_VALUE_CONTAINER_TITLE
        );
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.EXTSYS_CALC_INI_VALUE_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
