mainFocusInput = document.getElementById('mainFocusInput')
mainFocusList = document.getElementById('mainFocusList')
mainFocusButton = document.querySelector('.main-focus-modal')
mainFocusDiv = document.querySelector('.main-focus-div')

mainFocus()
function mainFocus(){
    focusLoad()

    //to add list item to main focus element
    mainFocusInput.addEventListener('keypress',function(e){
        if(e.key==='Enter'){
            let mfli = document.createElement('li')
            mainFocusList.prepend(mfli)
            mfli.innerHTML = mainFocusInput.value;
            mfli.style.display = 'flex';
            mfli.style.justifyContent = 'space-between';
            mfli.style.alignItems = 'center';
            mainFocusInput.value = '';
            let delFocusSpan = document.createElement("span");
            delFocusSpan.addEventListener('click', deleteFocusItem, false);
            delFocusSpan.innerText = "delete";
            delFocusSpan.className = "material-icons";
            mfli.append(delFocusSpan);
            let focusItem = mfli.innerHTML.split('<span',1).toString()
            localFocus.push({
                id: _uuid(),
                item: focusItem})
            
            focusSave()
        }
    })
    
    function focusSave() {
        let stringified = JSON.stringify(localFocus);
        localStorage.setItem("localFocus", stringified);
    }
    
    function focusLoad() {
        let retrieved = localStorage.getItem("localFocus");
        localFocus = JSON.parse(retrieved);
        if (localFocus == null){
            localFocus = [];}
            localFocus.forEach(({id: id, item: item})=> { 
                let mfli = document.createElement('li')
                let key = id
                mainFocusList.prepend(mfli)
                mfli.innerHTML = item;
                mfli.style.display = 'flex';
                mfli.style.justifyContent = 'space-between';
                mfli.style.alignItems = 'center';
                let delFocusSpan = document.createElement("span");
                delFocusSpan.addEventListener('click', deleteFocusItem, false);
                delFocusSpan.innerText = "delete";
                delFocusSpan.className = "material-icons";
                mfli.append(delFocusSpan);

                function deleteFocusItem() {
                    let mfli = this.parentNode;
                    mfli.remove();
                    localFocus.splice(key, 1);
                    focusSave()
                }
        }) 
}
    
    function deleteFocusItem() {
        let mfli = this.parentNode;
        mfli.remove();
        localFocus.splice(this.id, 1);
        focusSave()
    }
    
    
    //to click/unclick div in main focus element
    mainFocusButton.addEventListener('click', function(){
        if(mainFocusDiv.style.display !== 'flex'){
            mainFocusDiv.style.display = 'flex';
        }
        else{
            mainFocusDiv.style.display = 'none';
        }
    })

    //set id to be saved in local storage
    function _uuid() {
        var d = Date.now();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
          d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
      }
}
