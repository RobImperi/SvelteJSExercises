import validationConf from "./validationRules.js"
import {tick} from "svelte"

class CustomValidation{

    _instance = null;
    _formMap  = null;
    //importazione delle regole di validazione basate sul modello (formKey, property, rule)
    _validationRules = validationConf;

    //singleton
    constructor(){
        if(this._formMap == null){
            this._formMap = {};
        }
    }

    static instance = function(){
        if(this._instance == null){
            this._instance = new CustomValidation()
        }
        return this._instance;
    }

    //per ogni form viene creata una mappa nel singleton 
    //in cui sono mappate tutte le variabili
    getValidationForm = function(id){
        var resultFormMap = null;
        if(!this._formMap[id]){
            this._formMap[id] = {};
        }
        resultFormMap = this._formMap[id]
        return resultFormMap;
    }

    //viene validato il form in funzione dell'id con il quale è stato creato
    //per ogni proprietà del form viene restituita una chiave keyValid true/false
    //per sincronizzare correttamente il componente è utile una callback in modo da assegnare l'oggetto result
    //all'interno del componente svelte e non in una classe esterna
    validate = function(formId, validationCallback){
        console.dir(this._formMap[formId]);
        let results = {};
        let keys = Object.keys(this._formMap[formId]);
        keys.forEach((key)=>{
            if(key !== 'results'){
                results[key+"Valid"] = this.validateRule(this._formMap[formId][key], formId, key)
            }
        })     
        validationCallback(results);        
    }

    //viene validato il singolo valore in funzione della regola associata
    validateRule = function(value, formId, rule){
        let validationresult = false;
        if(this._validationRules[formId][rule] && typeof this._validationRules[formId][rule] === 'function'){
            validationresult = this._validationRules[formId][rule](value);
        }
        return validationresult;
    }

}

//export della singola istanza, chiunque importa la classe importa la singola istanza della classe
export default CustomValidation.instance();