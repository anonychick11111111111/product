function addToCart(btn) {
    const trNode = btn.parentElement.parentElement;
    
    const trNodeClone = trNode.cloneNode(true);
    const btnAdd = trNodeClone.getElementsByTagName('button');
    btnAdd[0].innerText ='Xóa';
    btnAdd[0].setAttribute('onclick', 'removeCartItem(this)');
    const cartBody = document.getElementById("cart-body");

    cartBody.appendChild(trNodeClone);

    const carTable = document.getElementById('carItems');
    carTable.style.display = 'table';
    const EmtyCart = document.getElementById('emtyCart');
    emtyCart.style = 'display:none';
    const grandTotal = document.getElementById('grandTotal');
    grandTotal.style = 'display: block';
    calculateGrandTotal();

}

function removeCartItem(btn) {
    const trNode = btn.parentElement.parentElement;
    const tbodyNode = trNode.parentElement;
    tbodyNode.removeChild(trNode);

    if(tbodyNode.children.length <= 0) {
        const cartTable = document.getElementById('carItems');
        cartTable.display = "none";
        const emtyCart = document.getElementById('emtyCart');
        emtyCart.style = 'display:block';

        const grandTotal = document.getElementById('grandTotal');
        grandTotal.style = 'display:block';
        grandTotal.childNodes[1].innerText = '0';
    
    }
    calculateGrandTotal();
}

function calculateGrandTotal() {
    const carItemsTable = document.getElementById('carItems');
    const amountSpans = carItemsTable.getElementsByClassName('amount');
    console.log(amountSpans)
    let total = 0;
    for(const element of amountSpans) {
        total += Number(element.innerHTML);
    }

    const totalSpan = document.getElementById('total');
    totalSpan.innerText = total;
}

