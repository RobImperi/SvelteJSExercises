export default class EventDispatcher {

    _instance = null;
    _dispatch = null;

    constructor(createEventDispatcher){
        this._dispatch = createEventDispatcher;
    }

    dispatchEvent(event){
        this._dispatch(event);
    }
 
    static instance = (createEventDispatcher) => {
        if(!this._instance){
            this._instance = new EventDispatcher(createEventDispatcher);
             
        }
        return this._instance;
    }
}

