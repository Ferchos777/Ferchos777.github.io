function funcionProcesar(){
    let varCadena="Valores de los controles:";
    //Seccionar el formulario
    let varForm = document.forms["frmControles"];
    
    //Leer valores de los controles
    let varRadio = varForm.elements["radioOpciones"]; 
    varCadena += "\n - Radio: " + varRadio.value;
    
    let varCheck = varForm.elements["checkOpciones"]; 
    varCadena += "\n - Check: " + varCheck.value;
    
    let varSelect = varForm.elements["selectBasic"]; 
    varCadena += "\n - Select: " + varSelect.value;
    
    let varMultiple = varForm.elements["selectMultiple"]; 
    varCadena += "\n - Multiple: " + varMultiple.value;
    //Otros controles
    
    let varFile = varForm.elements["varFile"]; 
    varCadena += "\n - File: " + varFile.value;
    
    let varColor = varForm.elements["varColor"]; 
    varCadena += "\n - Multiple: " + varMultiple.value;
    
    let varTime = varForm.elements["varTime"]; 
    varCadena += "\n - Hora: " + varTime.value;
    
    let varWeek = varForm.elements["varWeek"]; 
    varCadena += "\n - Semana: " + varWeek.value;
    
    let varMonth = varForm.elements["varMonth"]; 
    varCadena += "\n - Mes: " + varMonth.value;
    
    
    alert(varCadena);
}
