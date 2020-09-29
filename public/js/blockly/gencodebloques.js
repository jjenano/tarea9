Blockly.JavaScript['select'] = function(block) {
  var value_selecttext = Blockly.JavaScript.valueToCode(block, 'selectText', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fromtext = Blockly.JavaScript.valueToCode(block, 'fromText', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "Select " + value_selecttext + " From " + value_fromtext + " \n" ;
  return code;
};

Blockly.JavaScript['where'] = function(block) {
  var value_wheretext = Blockly.JavaScript.valueToCode(block, 'whereText', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "Where " + value_wheretext + " \n";
  return code;
};

Blockly.JavaScript['order_by'] = function(block) {
  var value_ordertext = Blockly.JavaScript.valueToCode(block, 'ordertext', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "order by " + value_ordertext + " \n";
  return code;
};

Blockly.JavaScript['ordering'] = function(block) {
  var text_nombre = block.getFieldValue('nombre');
  var dropdown_ascdesc = block.getFieldValue('ascdesc');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name1 = value_name != "" && value_name != ";" ? "," + value_name : value_name;
  var code = text_nombre + " " + dropdown_ascdesc + " " + value_name1;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['limit'] = function(block) {
  var value_limittext = Blockly.JavaScript.valueToCode(block, 'limitText', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "Limit " + value_limittext + " \n";
  return code;
};

Blockly.JavaScript['insert'] = function(block) {
  var value_inserttext = Blockly.JavaScript.valueToCode(block, 'insertText', Blockly.JavaScript.ORDER_ATOMIC);
  var value_valuestext = Blockly.JavaScript.valueToCode(block, 'valuesText', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "Insert Into " + value_inserttext + " Values (" + value_valuestext + "); \n";
  return code;
};

Blockly.JavaScript['update'] = function(block) {
  var value_updatetext = Blockly.JavaScript.valueToCode(block, 'updateText', Blockly.JavaScript.ORDER_ATOMIC);
  var value_settext = Blockly.JavaScript.valueToCode(block, 'setText', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = "Update " + value_updatetext + " Set " + value_settext + " \n";
  return code;
};

Blockly.JavaScript['delete'] = function(block) {
  var value_deletetext = Blockly.JavaScript.valueToCode(block, 'deleteText', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "Delete From " + value_deletetext + " \n";
  return code;
};

Blockly.JavaScript['textosc'] = function(block) {
  var text_texttext = block.getFieldValue('textText');
  var code = text_texttext;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['use'] = function(block) {
  var value_usetext = Blockly.JavaScript.valueToCode(block, 'useText', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "use " + value_usetext + "; \n";
  return code;
};

Blockly.JavaScript['operadores'] = function(block) {
  var value_opizq = Blockly.JavaScript.valueToCode(block, 'opizq', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_opetext = block.getFieldValue('opeText');
  var value_opder = Blockly.JavaScript.valueToCode(block, 'opder', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_opizq + " " + dropdown_opetext + " " + value_opder;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['unario_not'] = function(block) {
  var value_not = Blockly.JavaScript.valueToCode(block, 'not', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "!" + value_not;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['unario_incdec'] = function(block) {
  var text_variable = block.getFieldValue('Variable');
  var dropdown_incdec = block.getFieldValue('incdec');
  var code = text_variable + dropdown_incdec;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['defvar'] = function(block) {
  var dropdown_tipvar = block.getFieldValue('tipvar');
  var value_nombretext = Blockly.JavaScript.valueToCode(block, 'nombreText', Blockly.JavaScript.ORDER_ATOMIC);
  var value_exptext = Blockly.JavaScript.valueToCode(block, 'exptext', Blockly.JavaScript.ORDER_ATOMIC);
  value_exptext = value_exptext == "" ? ";" : " " + value_exptext + ";";
  var code = dropdown_tipvar + " " + value_nombretext + value_exptext + "\n";
  return code;
};

Blockly.JavaScript['asignacion'] = function(block) {
  var value_vartext = Blockly.JavaScript.valueToCode(block, 'varText', Blockly.JavaScript.ORDER_ATOMIC);
  var value_exptext = Blockly.JavaScript.valueToCode(block, 'expText', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = value_vartext + " = " + value_exptext + ";\n";
  return code;
};

Blockly.JavaScript['switchsen'] = function(block) {
  var text_cond = block.getFieldValue('cond');
  var statements_cases = Blockly.JavaScript.statementToCode(block, 'cases');
  var code = "Switch (" + text_cond +"){ \n" + statements_cases + " \n} \n" ;
  return code;
};

Blockly.JavaScript['casesen'] = function(block) {
  var value_casetext = Blockly.JavaScript.valueToCode(block, 'caseText', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_instrucciones = Blockly.JavaScript.statementToCode(block, 'instrucciones');
  var code = "Case " + value_casetext + " : \n" + statements_instrucciones  ;
  return code;
};

Blockly.JavaScript['defaultsent'] = function(block) {
  var statements_instrucciones = Blockly.JavaScript.statementToCode(block, 'instrucciones');
  var code = "Default: \n" + statements_instrucciones  ;
  return code;
};

Blockly.JavaScript['whilesen'] = function(block) {
  var value_cond = Blockly.JavaScript.valueToCode(block, 'cond', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_instrucciones = Blockly.JavaScript.statementToCode(block, 'instrucciones');
  var code = "While (" + value_cond +"){ \n" + statements_instrucciones + " \n} \n" ;
  return code;
};

Blockly.JavaScript['dowhilesen'] = function(block) {
  var statements_instrucciones = Blockly.JavaScript.statementToCode(block, 'instrucciones');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "Do {"+statements_instrucciones+"} While (" + value_name +");\n" ;
  return code;
};

Blockly.JavaScript['forsen'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_condtext = Blockly.JavaScript.valueToCode(block, 'condText', Blockly.JavaScript.ORDER_ATOMIC);
  var value_inctext = Blockly.JavaScript.valueToCode(block, 'incText', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_instrucciones = Blockly.JavaScript.statementToCode(block, 'instrucciones');
  var code = "for (" + value_var + " ; " + value_condtext + " ; " + value_inctext + "){ \n" + statements_instrucciones + " \n} \n" ;
  return code;
};

Blockly.JavaScript['call_proc'] = function(block) {
  var text_proc = block.getFieldValue('proc');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "Call "+text_proc+"(" + value_name +");\n" ;
  return code;
};

Blockly.JavaScript['llamada_funcion'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = text_name+"(" + value_name +");\n" ;
  return code;
};