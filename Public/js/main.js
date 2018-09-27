 document.getElementById("people").oninput = function() {ChangePrice(), PeopleValue()};
 document.getElementById("thing").oninput = function() {ChangePrice(), ThingValue()};

 $(".dropdown-industry .dropdown-menu li a").click(function(e) {
        var t = $(this).text();
        $("#typeBusiness").text(t);
        ChangePrice();
 });

 function ChangePrice() {
        var NumberPeople = document.getElementById("people").value;
        var NumberDocs = document.getElementById("thing").value;
        var Business = $("#typeBusiness").text();
        var three = 3000;
        var priceSt = $(".standart"); 
        var priceBasic = $(".basic"); 
        var pricePro = $(".pro");  
        var price6000 = 6000;
        var price8000 = 8000;
        var price10000 = 10000;
        var price12000 = 12000;
        var price14000 = 14000;
        var price15000 = 15000;
        var price16000 = 16000;
        var price17000 = 17000;
        var price18000 = 18000;
        var price19000 = 19000;
        var price21000 = 21000;
        var price23000 = 23000;
        var price25000 = 25000;

        /* Для Standart*/

        for (var i=0; i < priceSt.length; i++){

                /* Для Standart и количества сотрудников <10 */

                if ((NumberPeople == 1)&&(NumberDocs <= 10)) {
                        priceSt[i].innerHTML = price8000 + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs <= 10)) {
                        priceSt[i].innerHTML = price10000 + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs <= 10)) {
                        priceSt[i].innerHTML = price12000 + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs <= 10)) {
                        priceSt[i].innerHTML = price14000 + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs <= 10)) {
                        priceSt[i].innerHTML = price16000 + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs <= 10)) {
                        priceSt[i].innerHTML = price18000 + "₽";
                }


                /* Для Standart и количества сотрудников <20 но >10 */

                if ((NumberPeople == 1)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price8000 + three) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price8000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price10000 + three) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price10000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price12000 + three) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price12000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price14000 + three) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price14000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price16000 + three) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price16000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price18000 + three) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price18000 + three) * 1.5) + "₽";
                }

                /* Для Standart и количества сотрудников <20 но >30 */

                if ((NumberPeople == 1)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price8000 + (three * 2)) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price8000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price10000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price10000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price12000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price12000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price14000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price14000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price16000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price16000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price18000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price18000 + (three * 2)) * 1.5) + "₽";
                }

                /* Для Standart и количества сотрудников <30 но >40 */

                if ((NumberPeople == 1)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price8000 + (three * 3)) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price8000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price10000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price10000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price12000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price12000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price14000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price14000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price16000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price16000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price18000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price18000 + (three * 3)) * 1.5) + "₽";
                }

                /* Для Standart и количества сотрудников <40 но >50 */

                if ((NumberPeople == 1)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price8000 + (three*4)) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price8000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price10000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price10000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price12000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price12000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price14000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price14000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price16000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price16000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price18000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 10)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price18000 + (three*4)) * 1.5) + "₽";
                }

                /* Для Standart и количества сотрудников <50 но >60 */

                if ((NumberPeople == 1)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price8000 + (three * 5)) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price8000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price10000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price10000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price12000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price12000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price14000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price14000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price16000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price16000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        priceSt[i].innerHTML = (price18000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        priceSt[i].innerHTML = ((price18000 + (three * 5)) * 1.5) + "₽";
                }


        }

        /* Для Basic */

        for (var i=0; i < priceBasic.length; i++){

                /* Для Basic и количества сотрудников <10 */

                if ((NumberPeople == 1)&&(NumberDocs <= 10)) {
                        priceBasic[i].innerHTML = price6000 + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs <= 10)) {
                        priceBasic[i].innerHTML = price8000 + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs <= 10)) {
                        priceBasic[i].innerHTML = price10000 + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs <= 10)) {
                        priceBasic[i].innerHTML = price12000 + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs <= 10)) {
                        priceBasic[i].innerHTML = price14000 + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs <= 10)) {
                        priceBasic[i].innerHTML = price16000 + "₽";
                }


                /* Для Basic и количества сотрудников <20 но >10 */

                if ((NumberPeople == 1)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price6000 + three) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price6000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price8000 + three) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price8000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price10000 + three) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price10000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price12000 + three) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price12000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price14000 + three) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price14000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price16000 + three) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price16000 + three) * 1.5) + "₽";
                }

                /* Для Basic и количества сотрудников <20 но >30 */

                if ((NumberPeople == 1)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price6000 + (three * 2)) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price6000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price8000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price8000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price10000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price10000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price12000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price12000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price14000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price14000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price16000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price16000 + (three * 2)) * 1.5) + "₽";
                }

                /* Для Basic и количества сотрудников <30 но >40 */

                if ((NumberPeople == 1)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price6000 + (three * 3)) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price6000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price8000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price8000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price10000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price10000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price12000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price12000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price14000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price14000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price16000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price16000 + (three * 3)) * 1.5) + "₽";
                }

                /* Для Basic и количества сотрудников <40 но >50 */

                if ((NumberPeople == 1)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price6000 + (three*4)) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price6000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price8000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price8000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price10000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price10000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price12000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price12000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price14000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price14000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price16000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 10)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price16000 + (three*4)) * 1.5) + "₽";
                }

                /* Для Basic и количества сотрудников <50 но >60 */

                if ((NumberPeople == 1)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price6000 + (three * 5)) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price6000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price8000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price8000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price10000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price10000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price12000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price12000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price14000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price14000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        priceBasic[i].innerHTML = (price16000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        priceBasic[i].innerHTML = ((price16000 + (three * 5)) * 1.5) + "₽";
                }

        }


        /* Для PRO*/

        for (var i=0; i < pricePro.length; i++){

                /* Для PRO и количества сотрудников <10 */

                if ((NumberPeople == 1)&&(NumberDocs <= 10)) {
                        pricePro[i].innerHTML = price15000 + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs <= 10)) {
                        pricePro[i].innerHTML = price17000 + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs <= 10)) {
                        pricePro[i].innerHTML = price19000 + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs <= 10)) {
                        pricePro[i].innerHTML = price21000 + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs <= 10)) {
                        pricePro[i].innerHTML = price23000 + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs <= 10)) {
                        pricePro[i].innerHTML = price25000 + "₽";
                }


                /* Для PRO и количества сотрудников <20 но >10 */

                if ((NumberPeople == 1)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price15000 + three) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price15000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price17000 + three) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price17000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price19000 + three) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price19000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price21000 + three) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price21000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price23000 + three) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price23000 + three) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price25000 + three) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 10)&&(NumberDocs <= 20)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price25000 + three) * 1.5) + "₽";
                }

                /* Для PRO и количества сотрудников <20 но >30 */

                if ((NumberPeople == 1)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price15000 + (three * 2)) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price15000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price17000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price17000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price19000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price19000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price21000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price21000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price23000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price23000 + (three * 2)) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price25000 + (three * 2)) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 20)&&(NumberDocs <= 30)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price25000 + (three * 2)) * 1.5) + "₽";
                }

                /* Для PRO и количества сотрудников <30 но >40 */

                if ((NumberPeople == 1)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price15000 + (three * 3)) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price15000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price17000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price17000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price19000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price19000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price21000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price21000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price23000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price23000 + (three * 3)) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price25000 + (three * 3)) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 30)&&(NumberDocs <= 40)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price25000 + (three * 3)) * 1.5) + "₽";
                }

                /* Для PRO и количества сотрудников <40 но >50 */

                if ((NumberPeople == 1)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price15000 + (three*4)) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price15000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price17000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price17000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price19000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price19000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price21000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price21000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price23000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price23000 + (three*4)) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 40)&&(NumberDocs <= 50)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price25000 + (three*4)) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 10)&&(NumberDocs <= 50)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price25000 + (three*4)) * 1.5) + "₽";
                }

                /* Для PRO и количества сотрудников <50 но >60 */

                if ((NumberPeople == 1)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price15000 + (three * 5)) + "₽";
                }
                if ((NumberPeople == 1)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price15000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price17000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 1)&&(NumberPeople <= 5)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price17000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price19000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 5)&&(NumberPeople <= 10)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price19000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price21000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 10)&&(NumberPeople <= 15)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price21000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price23000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 15)&&(NumberPeople <= 20)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price23000 + (three * 5)) * 1.5) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business=="Услуги")) {
                        pricePro[i].innerHTML = (price25000 + (three * 5)) + "₽";
                }
                if ((NumberPeople > 20)&&(NumberPeople <= 25)&&(NumberDocs > 50)&&(NumberDocs <= 60)&&(Business!=="Услуги")) {
                        pricePro[i].innerHTML = ((price25000 + (three * 5)) * 1.5) + "₽";
                }

        }


 };
