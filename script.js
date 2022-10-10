function price()
{
    var a = Number(document.getElementById("quantity").value);
    var b = Number(document.getElementById("price").value);
    if(a == "" || b == "")
    {
        alert("Ошибка! Неверный формат чисел:");
    }
    else
        if (!(/^(0|[1-9][0-9]*)$/).test(a) || !(/^([1-9][0-9]*)+(.[0-9]{1,2})?$/).test(b))
        {
            alert("Ошибка! Неверный формат чисел:");
        }
        else
        {
            var c = a * b;
            document.getElementById("pay").innerHTML = "Стоимость покупки: " + c;
        }
    document.addEventListener("DOMContentLoaded", function(){
        console.log("DOMContent Loaded");
        let h = document.getElementById("button");
        h.addEventListener("click", price);
    });
}
// ^([1-9][0-9]*)+(.[0-9]{1,2})?$

// ^(0|[1-9][0-9]*)$
